import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import authService from '../../features/auth/authService';
import Loader from '../common/Loader';

const ProtectedRoute = () => {
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      const isValid = await authService.validateToken();
      console.log('Token validation response:', isValid);
      setIsAuth(isValid);
      if (!isValid) localStorage.clear();
      setLoading(false);
    };

    const token = localStorage.getItem('token');
    if (!token) {
      setIsAuth(false);
      setLoading(false);
    } else {
      checkToken();
    }
  }, []);

  if (loading) return <Loader />;
  return isAuth ? <Outlet /> : <Navigate to="/auth" replace />;
};

export default ProtectedRoute;
