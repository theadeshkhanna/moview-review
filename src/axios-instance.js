import axios from 'axios';

const instance = axios.create({
   baseURL: 'http://26f5bdb9.ngrok.io/api'
});

export default instance;
