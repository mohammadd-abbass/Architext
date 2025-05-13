import apiClient from "../../services/axios";

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

const authService = {
  login: async (email: string, password: string): Promise<AuthResponse> => {
    const response = await apiClient.post('/auth/login', { email, password });
    const { user, token } = response.data.data;
    return { user, token };
  },

  register: async (name: string, email: string, password: string): Promise<AuthResponse> => {
    const response = await apiClient.post('/auth/signup', { name, email, password });
    const { user, token } = response.data.data; 
    return { user, token };
  },

  logout: async (): Promise<void> => {
    await apiClient.post('/auth/logout');
  }
};

export default authService;