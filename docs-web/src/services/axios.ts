import axios, { Method } from 'axios';

const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

interface RequestOptions {
  method: Method;
  route: string;
  body?: unknown;
  headers?: Record<string, string>;
}

interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
}

const request = async <T = unknown>({
  method,
  route,
  body,
  headers = {},
}: RequestOptions): Promise<ApiResponse<T>> => {
  try {
    const token = localStorage.getItem('token');

    const defaultHeaders: Record<string, string> = {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    };

    const response = await axios.request({
      method,
      url: `${apiUrl}${route}`,
      data: body,
      headers: defaultHeaders,
    });

    return {
      success: response.data.success ?? true,
      message: response.data.message ?? 'Request successful',
      data: response.data.data,
    };
  } catch (error: unknown) {
    const errorMessage =
      axios.isAxiosError(error) && error.response?.data?.message
        ? error.response.data.message
        : error instanceof Error
        ? error.message
        : 'An error occurred';

    return {
      success: false,
      message: errorMessage,
    };
  }
};

export default request;
