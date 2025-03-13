import { Post } from "../../types/Post";
import './AdminPostItem.css';

interface AdminPostItemProps {
  post: Post;
  onEdit: (post: Post) => void;
  onDelete: (id: number) => void;
}

export const AdminPostItem = ({ post, onEdit, onDelete }: AdminPostItemProps) => {
  return (
    <div className="admin-post-item">
      <img src={post.imageUrl} alt={post.title} />
      <div className="post-details">
        <h3>{post.title}</h3>
        <p>{post.content.substring(0, 100)}...</p>
        <small>
          Publicado em: {new Date(post.created_at).toLocaleDateString('pt-BR')}
        </small>
      </div>
      <div className="post-actions">
        <button onClick={() => onEdit(post)}>Editar</button>
        <button onClick={() => onDelete(post.id)}>Excluir</button>
      </div>
    </div>
  );
};