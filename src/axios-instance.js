import axios from 'axios';

const instance = axios.create({
   baseURL: 'http://b3207720.ngrok.io/api'
});

export default instance;
