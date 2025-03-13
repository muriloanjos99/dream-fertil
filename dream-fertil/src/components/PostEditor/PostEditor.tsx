import { useState } from "react";
import { Post, PostUpload } from "../../types/Post";
import './PostEditor.css';

interface PostEditorProps {
  post?: Post;
  onSave: (postData: PostUpload) => void;
  onCancel: () => void;
  onUpload: (file: File) => Promise<string | null>;
  uploading: boolean;
}

export const PostEditor = ({ post, onSave, onCancel, onUpload, uploading }: PostEditorProps) => {
  const [title, setTitle] = useState(post?.title || '');
  const [content, setContent] = useState(post?.content || '');
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let imagePath = post?.imagePath || '';

    if (image) {
      const path = await onUpload(image);
      if (path) imagePath = path;
    }

    onSave({
      title,
      content,
      imagePath,
      created_at: post?.created_at || new Date().toISOString(),
    });
  };

  return (
    <div className="post-editor">
      <h2>{post ? 'Editar Post' : 'Novo Post'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Conteúdo"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
        />
        <div className="editor-actions">
          <button type="button" onClick={onCancel}>
            Cancelar
          </button>
          <button type="submit" disabled={uploading}>
            {uploading ? 'Salvando...' : 'Salvar'}
          </button>
        </div>
      </form>
    </div>
  );
};