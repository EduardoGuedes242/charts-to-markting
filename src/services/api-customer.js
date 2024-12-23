
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080', // URL base da API
});

export const fetchCustomerData = () => api.get('/customer');
export const fetchCustomerDashboardQuantityForGenderData = () => api.get('/customer/dashboard/quantity-for-gender');
export const fetchCustomerDashboardQuantityForAgeData = () => api.get('/customer/dashboard/quantity-for-age');