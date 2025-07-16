import axios, { AxiosInstance } from 'axios';

//Create instance of axios with base URL

const api: AxiosInstance = axios.create({
  baseURL: 'http://localhost:8000',
});

//Exoirt the Axios instance
export default api;
