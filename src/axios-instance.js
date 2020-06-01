import axios from 'axios';

const instance = axios.create({
   baseURL: 'http://8baee08f33a9.ngrok.io/api'
});

export default instance;
