import axios from 'axios';

const instance = axios.create({
   baseURL: 'http://d4aa397f5ff6.ngrok.io/api'
});

export default instance;
