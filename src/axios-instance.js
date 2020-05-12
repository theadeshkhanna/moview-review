import axios from 'axios';

const instance = axios.create({
   baseURL: 'http://ca600bab.ngrok.io/api'
});

export default instance;
