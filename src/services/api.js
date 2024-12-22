// services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080', // URL base da API
});

export const fetchCustomertData = () => api.get('/customer');