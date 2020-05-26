import axios from 'axios';

const instance = axios.create({
   baseURL: 'http://d904d580.ngrok.io/api'
});

export default instance;
