import axios from 'axios';

const instance = axios.create({
   baseURL: 'http://d4a3e759.ngrok.io/api'
});

export default instance;
