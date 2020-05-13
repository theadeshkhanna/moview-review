import axios from 'axios';

const instance = axios.create({
   baseURL: 'http://d3ae1225.ngrok.io/api'
});

export default instance;
