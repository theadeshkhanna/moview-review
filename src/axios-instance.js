import axios from 'axios';

const instance = axios.create({
   baseURL: 'http://1b793ff9.ngrok.io/api'
});

export default instance;
