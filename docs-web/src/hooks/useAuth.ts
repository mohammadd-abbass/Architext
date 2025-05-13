import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import authService, { AuthResponse } from '../features/auth/authService';
import { setLoading, setUser, setError, logoutUser } from '../features/auth/authSlice';

const useAuth = () => {
  const dispatch = useDispatch();

  const handleAuthResponse = (response: AuthResponse) => {
    localStorage.setItem('token', response.token);
    dispatch(setUser(response.user));
  };

  const login = useCallback(async (email: string, password: string) => {
    try {
      dispatch(setLoading());
      const response = await authService.login(email, password);
      handleAuthResponse(response);
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(setError(error.message));
      } else {
        dispatch(setError('An unknown error occurred.'));
      }
    }
  }, [dispatch]);

  const register = useCallback(async (username: string, email: string, password: string) => {
    try {
      dispatch(setLoading());
      const response = await authService.register(username, email, password);
      handleAuthResponse(response);
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(setError(error.message));
      } else {
        dispatch(setError('An unknown error occurred.'));
      }
    }
  }, [dispatch]);

  const logout = useCallback(async () => {
    try {
      await authService.logout();
      dispatch(logoutUser());
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(setError(error.message));
      } else {
        dispatch(setError('An unknown error occurred.'));
      }
    }
  }, [dispatch]);

  const loadUser = useCallback(async () => {
    try {
      dispatch(setLoading());
      const user = await authService.getMe();
      dispatch(setUser(user));
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(setError(error.message));
      } else {
        dispatch(setError('An unknown error occurred.'));
      }
    }
  }, [dispatch]);

  return {
    login,
    register,
    logout,
    loadUser
  };
};

export default useAuth;