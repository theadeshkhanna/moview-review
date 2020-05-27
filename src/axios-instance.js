import axios from 'axios';

const instance = axios.create({
   baseURL: 'http://1ce07a1b.ngrok.io/api'
});

export default instance;
