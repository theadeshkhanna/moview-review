import axios from 'axios';

const instance = axios.create({
   baseURL: 'http://d4892151.ngrok.io/api'
});

export default instance;
