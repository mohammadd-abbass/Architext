import { Loader } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const CallbackPage = () => {
  const [token, setToken] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const tokenFromURL = queryParams.get('token');

    if (tokenFromURL) {
      localStorage.setItem('token', tokenFromURL);
      setToken(tokenFromURL);
    }
    setChecked(true); 
  }, [location.search]);

  if (!checked) return <Loader/>;

  if (token) {
    return <Navigate to="/" replace />;
  } else {
    return <Navigate to="/auth?error=authentication_failed" replace />;
  }
};

export default CallbackPage;
