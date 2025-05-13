import {  useState } from 'react';
import { AuthForm } from '../components/features/auth/AuthForm';
// import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export const AuthPage = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  return (
    <div className="auth-page flex flex-col justify-center items-center min-h-screen relative px-6 md:px-6">
        <h1 className="title absolute left-8 top-8 text-4xl font-bold text-accent">Architext</h1>
        <AuthForm
            isLogin={isLoginForm}
            toggleAuthMode={() => setIsLoginForm((prev) => !prev)}
            onSubmit={()=>{}}

        />
    </div>
  );
};