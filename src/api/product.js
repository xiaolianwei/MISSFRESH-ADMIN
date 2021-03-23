import axios from '@/utils/axios';

export default {
  add(form) {
    return axios.post('/products/add', form);
  },
  get(params) {
    return axios.get('/products/all', { params });
  },
  remove(id) {
    return axios.delete(`/products/${id}`);
  },
  detail(id) {
    return axios.get(`/products/${id}`);
  },
  edit(form) {
    return axios.put('/products/edit', form);
  },
};
