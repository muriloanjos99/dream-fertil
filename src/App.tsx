import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AdminLogin } from './components/Admin/AdminLogin';
import { AdminPanel } from './components/Admin/AdminPanel';
import { useEffect, useState } from 'react';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Inicio } from './components/Inicio/Inicio';
import { Features } from './components/Features/Features';
import { QuemSomos } from './components/QuemSomos/QuemSomos';
import { Produtos } from './components/Produtos/Produtos';
import { Certificacao } from './components/Certificacao/Certificacao';
import { FaleConosco } from './components/FaleConosco/FaleConosco';
import { Blog } from './pages/Blog/Blog';
import { BlogPost } from './pages/BlogPost/BlogPost';
import './App.css';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const secret = localStorage.getItem('admin_secret');
      setIsAdmin(secret === import.meta.env.VITE_ADMIN_SECRET_KEY);
    };

    checkAuth();
    window.addEventListener('storage', checkAuth);
    return () => window.removeEventListener('storage', checkAuth);
  }, []);




  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Inicio />
              <Features />
              <QuemSomos />
              <Produtos />
              <Certificacao />
              <FaleConosco />
            </>
          } />

          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />

          <Route path="/tela-admin-blog" element={<AdminLogin />} />

          <Route
            path="/admin-panel"
            element={isAdmin ? <AdminPanel /> : <Navigate to="/admin-secreto" />}
          />

          <Route path="/404" element={<div>Página não encontrada</div>} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;