import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { AuthForm } from '../components/features/auth/AuthForm';
import useAuth from '../hooks/useAuth';

export const AuthPage = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const navigate = useNavigate();
  const { user, loading, error } = useSelector((state: RootState) => state.auth);
  const { login, register, loadUser } = useAuth();

  // Check for existing user on initial load
  useEffect(() => {
    loadUser();
  }, [loadUser]);

  // Redirect if user exists
  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleSubmit = (data: { email: string; password: string; name?: string }) => {
    if (isLoginForm) {
      login(data.email, data.password);
    } else {
      if (!data.name) return;
      register(data.name, data.email, data.password);
    }
  };

  return (
    <div className="auth-page flex flex-col justify-center items-center min-h-screen relative px-6 md:px-6">
      <h1 className="title absolute left-8 top-8 text-4xl font-bold text-accent">Architext</h1>
      <AuthForm
        isLogin={isLoginForm}
        toggleAuthMode={() => setIsLoginForm((prev) => !prev)}
        onSubmit={handleSubmit}
        error={error}
        isLoading={loading}
      />
    </div>
  );
};