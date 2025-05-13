import request from '../services/axios';

export const login = async (email: string, password: string) =>
  request({
    method: 'POST',
    route: '/auth/login',
    body: { email, password },
  });

export const register = async (userData: { name: string; email: string; password: string }) =>
  request({
    method: 'POST',
    route: '/auth/register',
    body: userData,
  });

export const logout = async () =>
  request({
    method: 'POST',
    route: '/auth/logout',
  });

export const getCurrentUser = async () =>
  request({
    method: 'GET',
    route: '/auth/me',
  });
