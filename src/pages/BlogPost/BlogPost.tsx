import { useLocation, useNavigate } from 'react-router-dom';
import './BlogPost.css';
import { calculateReadTime } from '../../utils/calculateReadTime';
import { Post } from '../../types/Post';
import { BsLink, BsWhatsapp } from 'react-icons/bs';

export const BlogPost = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const post = location.state?.post as Post;

  if (!post) {
    return <div>Artigo não encontrado.</div>;
  }

  const paragraphs = post.content.split('\n').map((paragraph, index) => (
    <p key={index}>{paragraph}</p>
  ));

  const handleBackToBlog = () => {
    navigate('/blog');
  };

  const handleShare = (platform: string) => {
    const postUrl = window.location.href;
    const shareText = `Confira o artigo "${post.title}" - de Dream Fértil\n${postUrl}`;

    switch (platform) {
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(shareText).then(() => {
          alert('Link copiado para a área de transferência!');
        });
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className='background-overlay' />
      <section className="news-detail-container">
        <button
          className="back-to-blog-button"
          onClick={handleBackToBlog}
          style={{ alignSelf: 'flex-start', marginBottom: '2rem' }}
        >
          ← Voltar ao Blog
        </button>

        <div className="metadata">
          <span>
            {new Date(post.created_at).toLocaleDateString('pt-BR', {
              day: '2-digit',
              month: 'long',
              year: 'numeric'
            })}
          </span>
          <span>•</span>
          <span>Tempo de leitura: {calculateReadTime(post.content)}</span>
        </div>

        <h1 className="news-title">{post.title}</h1>

        <img
          src={post.imageUrl}
          alt={post.title}
          className="news-image"
          loading="lazy"
        />

        <div className="news-content">
          {paragraphs}
        </div>

        <h3 className='share-message'>Compartilhe!</h3>

        <div className="share-buttons">
          <button
            className="share-button"
            onClick={() => handleShare('whatsapp')}
          >
            <BsWhatsapp size={"20px"} />
            WhatsApp
          </button>
          <button
            className="share-button"
            onClick={() => handleShare('copy')}
          >
            <BsLink />
            Copiar Link
          </button>
        </div>
      </section >
    </>
  );
};