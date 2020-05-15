import axios from 'axios';

const instance = axios.create({
   baseURL: 'http://3dbd77da.ngrok.io/api'
});

export default instance;
