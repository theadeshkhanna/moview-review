import axios from 'axios';

const instance = axios.create({
   baseURL: 'http://d395ecf9c0a9.ngrok.io/api'
});

export default instance;
