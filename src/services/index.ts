import axios from 'axios';
const URL = 'http://192.168.1.13:3333'
const api = axios.create({
    baseURL: URL,
});
export default api;