import axios from 'axios';

const instance = axios.create({
   baseURL: 'http://9e27e65a.ngrok.io/api'
});

export default instance;
