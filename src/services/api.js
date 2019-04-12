import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistackribeiro.herokuapp.com'
});

export default api;