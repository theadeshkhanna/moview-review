import axios from 'axios';

const instance = axios.create({
   baseURL: 'http://d80aed32.ngrok.io/api'
});

export default instance;
