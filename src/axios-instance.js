import axios from 'axios';

const instance = axios.create({
   baseURL: 'http://623904b1.ngrok.io/api'
});

export default instance;
