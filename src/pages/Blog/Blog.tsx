import { supabase } from '../../supabaseClient';
import { useNavigate } from 'react-router-dom';
import { calculateReadTime } from '../../utils/calculateReadTime';
import { Post } from '../../types/Post';
import { useQuery } from '@tanstack/react-query';
import './Blog.css';

export const Blog = () => {
  const navigate = useNavigate();

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from('DreamFertil_Postagens')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    const postsWithSignedUrls = await Promise.all(
      data.map(async (post) => {
        const signedUrl = await getSignedUrl(post.imagePath);
        return {
          ...post,
          imageUrl: signedUrl || '',
        };
      })
    );

    return postsWithSignedUrls;
  };

  const getSignedUrl = async (filePath: string) => {
    const { data, error } = await supabase.storage
      .from('post-images')
      .createSignedUrl(filePath, 3600);

    if (error) {
      // console.error('Erro ao gerar URL assinada:', error.message);
      return null;
    }

    return data.signedUrl;
  };

  const { data: posts, isLoading, error } = useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 1000 * 60 * 5,
  });

  const handleReadMore = (post: Post) => {
    navigate(`/blog/${post.id}`, { state: { post } });
  };


  if (isLoading) return <div>Carregando...</div>;

  if (error) return <div>Erro ao carregar posts: {error.message}</div>;


  return (
    <>
      <div className='background-overlay' />

      <section className="blog-container">
        <div className="blog-header">
          <h1>
            <span className="blog-title-main">Dream Fértil</span>
            <span className="blog-title-sub">Artigos e Notícias</span>
          </h1>
        </div>

        <div className="posts-grid">
          {!posts || posts.length === 0 ? (
            <div className='no-posts-container'>
              <p className='no-posts-message'>Ainda não há postagens, aguarde!</p>
              <img src='src/assets/farmer-farm-svgrepo-com.svg' alt="Nenhum post encontrado" className='no-posts-img' />
            </ div>
          ) : (
            posts.map((post) => (
              <article key={post.id} className="post-card">
                <div className="post-image-container">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="post-image"
                    loading="lazy"
                  />
                  <div className="image-overlay" />
                </div>

                <div className="post-content">
                  <div className="post-meta">
                    <time className="post-date">
                      {new Date(post.created_at).toLocaleDateString('pt-BR', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric'
                      }).replace('.', '')}
                    </time>
                    <span className="read-time">{calculateReadTime(post.content)} de leitura</span>
                  </div>

                  <h2 className="post-title">{post.title}</h2>

                  <p className="post-excerpt">
                    {post.content.split('\n')[0].substring(0, 120)}...
                  </p>

                  <button
                    className="read-more"
                    onClick={() => handleReadMore(post)}
                  >
                    Continuar Leitura
                    <span className="arrow">→</span>
                  </button>
                </div>
              </article>
            ))
          )}
        </div>
      </section>
    </>
  );
};