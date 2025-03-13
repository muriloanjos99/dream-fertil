import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../supabaseClient';
import { Post, PostUpload } from '../../types/Post';
import { useAdminAuth } from '../../utils/useAdminAuth';
import { PostEditor } from '../PostEditor/PostEditor';
import { AdminPostItem } from '../AdminPostItem/AdminPostItem';
import './AdminPanel.css';

export const AdminPanel = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPost, setCurrentPost] = useState<Post | undefined>(undefined);
  const [uploading, setUploading] = useState(false);
  const { isAdmin, isLoading } = useAdminAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isAdmin) {
      navigate('/admin-secreto');
    }
  }, [isAdmin, isLoading]);

  const sanitizeFileName = (fileName: string) => {
    return fileName.replace(/[^a-zA-Z0-9\-_.]/g, '-');
  };

  const getSignedUrl = async (filePath: string) => {
    if (!filePath) {
      // console.error('Caminho do arquivo não fornecido');
      return null;
    }

    const { data, error } = await supabase.storage
      .from('post-images')
      .createSignedUrl(filePath, 3600);

    if (error) {
      // console.error('Erro ao gerar URL assinada:', error.message);
      return null;
    }

    return data.signedUrl;
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from('DreamFertil_Postagens')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        // console.error('Erro ao carregar posts:', error.message);
        return;
      }

      if (data) {
        const postsWithSignedUrls = await Promise.all(
          data.map(async (post) => {
            if (!post.imagePath) {
              // console.error('Caminho da imagem não encontrado para o post:', post.id);
              return {
                ...post,
                imageUrl: '',
              };
            }

            const signedUrl = await getSignedUrl(post.imagePath);
            return {
              ...post,
              imageUrl: signedUrl || '',
            };
          })
        );

        setPosts(postsWithSignedUrls);
      }
    };

    fetchPosts();
  }, []);

  const handleDelete = async (id: number) => {
    const { error } = await supabase
      .from('DreamFertil_Postagens')
      .delete()
      .eq('id', id);

    if (error) {
      // console.error('Erro ao deletar post:', error.message);
      return;
    }

    setPosts(posts.filter((post) => post.id !== id));
  };

  const handleEdit = (post: Post) => {
    setCurrentPost(post);
    setIsEditing(true);
  };

  const handleCreatePost = async (postData: PostUpload) => {
    const { error } = await supabase
      .from('DreamFertil_Postagens')
      .insert([postData]);

    if (error) {
      // console.error('Erro ao criar post:', error.message);
      return;
    }

    const newPost: Post = {
      id: Date.now(),
      ...postData,
      imageUrl: await getSignedUrl(postData.imagePath) || '',
    };

    setPosts([newPost, ...posts]);
  };

  const handleUpdatePost = async (postData: PostUpload) => {
    if (!currentPost) return;

    const { error } = await supabase
      .from('DreamFertil_Postagens')
      .update(postData)
      .eq('id', currentPost.id);

    if (error) {
      // console.error('Erro ao atualizar post:', error.message);
      return;
    }

    const updatedPost: Post = {
      ...currentPost,
      ...postData,
      imageUrl: await getSignedUrl(postData.imagePath) || '',
    };

    setPosts(posts.map((post) => (post.id === currentPost.id ? updatedPost : post)));
  };

  const handleSave = async (postData: PostUpload) => {
    if (currentPost) {
      await handleUpdatePost(postData);
    } else {
      await handleCreatePost(postData);
    }

    setIsEditing(false);
    setCurrentPost(undefined);
  };

  const handleUpload = async (file: File) => {
    setUploading(true);

    const sanitizedFileName = sanitizeFileName(file.name);
    const fileName = `${Date.now()}-${sanitizedFileName}`;

    const { data, error } = await supabase.storage
      .from('post-images')
      .upload(fileName, file);

    if (error) {
      // console.error('Erro ao fazer upload da imagem:', error.message);
      return null;
    }

    setUploading(false);
    return data.path;
  };

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="admin-panel">
      <h1>Painel de Gerenciamento</h1>

      <button
        className="new-post-button"
        onClick={() => {
          setIsEditing(true);
          setCurrentPost(undefined);
        }}
      >
        + Novo Post
      </button>

      {isEditing && (
        <PostEditor
          post={currentPost}
          onSave={handleSave}
          onCancel={() => setIsEditing(false)}
          onUpload={handleUpload}
          uploading={uploading}
        />
      )}

      <div className="posts-list">
        {posts.map((post) => (
          <AdminPostItem
            key={post.id}
            post={post}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};