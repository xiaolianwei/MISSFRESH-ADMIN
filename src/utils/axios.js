import axios from 'axios';
import store from '../store';

const instance = axios.create({
  baseURL: ' https://mallapi.duyiedu.com/',
});

instance.interceptors.request.use((request) => {
  const options = request;
  if (!request.url.includes('passport')) {
    options.params = {
      ...options.params,
      appkey: store.state.userInfo.appkey,
    };
  }
  return options;
}, (error) => Promise.reject(error));

instance.interceptors.response.use((response) => {
  if (response.data.status === 'fail') {
    return Promise.reject(response.data.msg);
  }
  return response.data.data;
});

export default instance;
