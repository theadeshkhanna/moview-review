import axios from 'axios';

const instance = axios.create({
   baseURL: 'http://44730cee.ngrok.io/api'
});

export default instance;
