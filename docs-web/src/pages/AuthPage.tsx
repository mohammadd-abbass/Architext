import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthForm } from '../components/features/auth/AuthForm';
import useAuth from '../hooks/useAuth';
import Loader from '../components/common/Loader';

export const AuthPage = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const navigate = useNavigate();

  const { login, register, loginWithGitHub, user, error, loading } = useAuth();



  const handleSubmit = (formData: { email: string; password: string; name?: string }) => {
    if (isLoginForm) {
      login(formData.email, formData.password);
    } else {
      if (!formData.name) return;
      register(formData.name, formData.email, formData.password);
    }
  };

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    loading? <Loader/> :
    <div className="auth-page flex flex-col justify-center items-center min-h-screen relative px-6 md:px-6">
      <h1 className="title absolute left-8 top-8 text-4xl font-bold text-accent">Architext</h1>
      <AuthForm
        isLogin={isLoginForm}
        toggleAuthMode={() => setIsLoginForm((prev) => !prev)}
        onSubmit={handleSubmit}
        error={error}
        onGitHubLogin={loginWithGitHub}
        isLoading={loading}
      />
    </div>
  );
};
