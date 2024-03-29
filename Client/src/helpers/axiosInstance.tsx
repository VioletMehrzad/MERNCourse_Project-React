import axios from 'axios';
import Cookies from 'js-cookie';

const instance = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    Authorization: Cookies.get('token')
  }
});

export default instance;
