// pages/AuthPage.tsx
import {  useState } from 'react';
import { AuthForm } from '../components/features/auth/AuthForm';
// import { useNavigate } from 'react-router-dom';
// import useAuth from './useAuth';

export const AuthPage = () => {
//   const { user, login, signUp, isLoading, error, token } = useAuth();
  const [isLoginForm, setIsLoginForm] = useState(true);
//   const navigate = useNavigate();

//   const handleAuthSubmit = (formData: { email: string; password: string; name?: string }) => {
//     if (isLoginForm) {
//       login(formData.email, formData.password);
//     } else {
//       if (formData.name) {
//         signUp(formData.name, formData.email, formData.password);
//       }
//     }
//   };

//   useEffect(() => {
//     if (user && token) {
//       navigate('/home');
//     }
//   }, [user, token, navigate]);

  return (
    <div className="auth-page flex flex-col justify-center items-center min-h-screen">
      <h1 className="title text-4xl font-bold text-accent mb-8">Architext</h1>
      <AuthForm
        isLogin={isLoginForm}
        toggleAuthMode={() => setIsLoginForm((prev) => !prev)}
        onSubmit={()=> {}}
        // error={error}
        // isLoading={isLoading}
      />
    </div>
  );
};