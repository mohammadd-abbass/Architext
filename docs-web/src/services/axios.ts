import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_URL || 'http://localhost:3000/api',
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiClient;