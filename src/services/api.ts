import axios from 'axios';

const api = axios.create({
  baseURL: 'https://datawise-backend.onrender.com', // Mock API
});

export default api;
