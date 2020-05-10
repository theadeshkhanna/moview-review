import axios from 'axios';

const instance = axios.create({
   baseURL: 'http://67ecdbcb.ngrok.io/api'
});

export default instance;
