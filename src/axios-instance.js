import axios from 'axios';

const instance = axios.create({
   baseURL: 'http://1d7193b6440b.ngrok.io/api'
});

export default instance;
