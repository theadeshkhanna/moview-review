import axios from 'axios';

const instance = axios.create({
   baseURL: 'http://17864ac7914a.ngrok.io/api'
});

export default instance;
