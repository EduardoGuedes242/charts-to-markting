
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/customer', 
});

export const fetchCustomerData = () => api.get('/');
export const fetchCustomerDashboardQuantityForGenderData = () => api.get('/dashboard/quantity-for-gender');
export const fetchCustomerDashboardQuantityForAgeData = () => api.get('/dashboard/quantity-for-age');
export const fetchCustomerDashboardQuantityForSourceChannelData = () => api.get('/dashboard/quantity-for-source-channel');