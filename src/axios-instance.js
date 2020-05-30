import axios from 'axios';

const instance = axios.create({
   baseURL: 'http://1e57e057ac47.ngrok.io/api'
});

export default instance;
