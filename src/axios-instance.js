import axios from 'axios';

const instance = axios.create({
   baseURL: 'http://27db1a806f88.ngrok.io/api'
});

export default instance;
