import axios from 'axios';

const instance = axios.create({
   baseURL: 'http://78149be1398e.ngrok.io/api'
});

export default instance;
