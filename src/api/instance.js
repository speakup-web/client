import axios from 'axios';

export const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    const { status } = error.response;
    const { message } = error.response.data;
    const tokenExpiredMsg = '"exp" claim timestamp check failed';

    if (status === 401 && message === tokenExpiredMsg) {
      localStorage.removeItem('auth');
      window.location.reload();
    }

    return Promise.reject(error);
  }
);
