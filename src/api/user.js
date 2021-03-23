import axios from '@/utils/axios';
import { removeCookie } from '@/utils/cookie';
import store from '../store';

export default {
  login(data) {
    return axios.post('/passport/login', data);
  },
  logout() {
    removeCookie();
    store.commit('initUserInfo', {
      appkey: '',
      email: '',
      role: '',
      username: '',
    });
  },
};
