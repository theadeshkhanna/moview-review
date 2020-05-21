import axios from 'axios';

const instance = axios.create({
   baseURL: 'http://e6d7a407.ngrok.io/api'
});

export default instance;
