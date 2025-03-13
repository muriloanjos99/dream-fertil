import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

export const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      username === import.meta.env.VITE_ADMIN_USERNAME &&
      password === import.meta.env.VITE_ADMIN_PASSWORD
    ) {
      localStorage.setItem('admin_secret', import.meta.env.VITE_ADMIN_SECRET_KEY);
      navigate('/admin-panel');
    } else {
      setError('Credenciais inválidas');
    }
  };

  return (
    <div className="admin-login">
      <h1>Acesso Administrativo</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Nome de usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};