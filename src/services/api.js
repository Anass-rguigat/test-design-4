import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('[API Error]', error.message);
    return Promise.reject(error);
  },
);

export const submitInvestorForm = async (data) => {
  const response = await api.post('/investments', data);
  return response.data;
};

export default api;
