import axios from 'axios';

const instance = axios.create({
   baseURL: 'http://1fe33349.ngrok.io/api'
});

export default instance;
