import { useEffect, useState } from 'react';

export const useAdminAuth = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      const secret = localStorage.getItem('admin_secret');
      setIsAdmin(secret === import.meta.env.VITE_ADMIN_SECRET_KEY);
      setIsLoading(false);
    };

    checkAuth();
    window.addEventListener('storage', checkAuth);
    return () => window.removeEventListener('storage', checkAuth);
  }, []);

  return { isAdmin, isLoading };
};