import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    collapsed: false,
    userInfo: {
      appkey: '',
      email: '',
      role: '',
      username: '',
    },
    cateAddForm: {},
  },
  mutations: {
    changeCollapsed(state) {
      state.collapsed = !state.collapsed;
    },
    initUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
    initCateAddForm(state, ref) {
      state.cateAddForm.addRef = ref;
    },
  },
  actions: {},
  modules: {
  },
});
