import axios from 'axios';

const instance = axios.create({
   baseURL: 'http://2dc35e7b.ngrok.io/api'
});

export default instance;
