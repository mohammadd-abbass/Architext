import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useCallback } from 'react';
import authService from '../features/auth/authService';
import {
  setLoading,
  setUser,
  setError,
  logoutUser,
} from '../features/auth/authSlice';

const useAuth = () => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state: RootState) => state.auth);

  const login = useCallback(async (email: string, password: string) => {
    dispatch(setLoading());
    try {
      const { user, token } = await authService.login(email, password);
      console.log('Login successful:', user);
      localStorage.setItem('token', token);
      dispatch(setUser(user));
    } catch (err: unknown) {
      if (err && typeof err === 'object' && 'response' in err) {
        const response = (err as { response?: { data?: { message?: string } } }).response;
        dispatch(setError(response?.data?.message || 'Login failed'));
      } else {
        dispatch(setError('Login failed'));
      }
    }
  
  }, [dispatch]);

  const register = useCallback(async (name: string, email: string, password: string) => {
    dispatch(setLoading());
    try {
      const { user, token } = await authService.register(name, email, password);
      localStorage.setItem('token', token);
      dispatch(setUser(user));
    } catch (err: unknown) {
      if (err && typeof err === 'object' && 'response' in err) {
        const response = (err as { response?: { data?: { message?: string } } }).response;
        dispatch(setError(response?.data?.message || 'Login failed'));
      } else {
        dispatch(setError('Login failed'));
      }
    }
  
  }, [dispatch]);

  const logout = useCallback(async () => {
    try {
      await authService.logout();
    } catch (err) {
      console.warn('Logout error (ignored):', err);
    }
    dispatch(logoutUser());
  }, [dispatch]);

  return {
    user,
    loading,
    error,
    login,
    register,
    logout,
    isAuthenticated: !!user,
  };
};

export default useAuth;
