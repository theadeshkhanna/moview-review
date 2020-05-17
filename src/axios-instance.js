import axios from 'axios';

const instance = axios.create({
   baseURL: 'http://677beb13.ngrok.io/api'
});

export default instance;
