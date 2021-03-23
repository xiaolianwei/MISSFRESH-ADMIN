import axios from '@/utils/axios';

export default {
  get() {
    return axios.get('/category/all');
  },
  add(form) {
    return axios.post('/category/add', form);
  },
  edit(form) {
    return axios.put('/category/edit', form);
  },
  remove(id) {
    return axios.delete(`/category/${id}`);
  },
};
