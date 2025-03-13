import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const verifyAdmin = (password: string) => {
  return password === import.meta.env.VITE_ADMIN_PASSWORD;
};

export const useAdminGuard = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const storedSecret = localStorage.getItem('admin_secret');
    if (storedSecret !== import.meta.env.VITE_ADMIN_SECRET_KEY) {
      navigate('/404');
    }
  }, []);
};