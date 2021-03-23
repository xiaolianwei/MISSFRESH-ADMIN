import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/layout/Home.vue';
import Login from '../views/layout/Login.vue';
import store from '../store';
import { getCookie } from '../utils/cookie';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: { name: 'Index' },
    children: [
      {
        path: 'index',
        name: 'Index',
        meta: {
          title: '统计',
          parentTitle: 'home',
        },
        component: () => import(/* webpackChunkName: "chunk" */ '../views/page/index.vue'),
      },
      {
        path: 'category',
        name: 'Category',
        meta: {
          title: '商品类目',
          parentTitle: 'goods',
        },
        component: () => import(/* webpackChunkName: "chunk" */ '../views/page/category.vue'),
      },
      {
        path: 'productAdd',
        name: 'ProductAdd',
        meta: {
          title: '添加商品',
          parentTitle: 'goods',
        },
        component: () => import(/* webpackChunkName: "chunk" */ '../views/page/productAdd.vue'),
      },
      {
        path: 'productEdit/:id',
        name: 'ProductEdit',
        meta: {
          title: '编辑商品',
          parentTitle: 'goods',
        },
        component: () => import(/* webpackChunkName: "chunk" */ '../views/page/productAdd.vue'),
      },
      {
        path: 'productList',
        name: 'ProductList',
        meta: {
          title: '商品列表',
          parentTitle: 'goods',
        },
        component: () => import(/* webpackChunkName: "chunk" */ '../views/page/productList.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  // if(to)
  // if(this.$store.state.userInfo.username){
  //   return next();
  // }
  const userInfo = getCookie();
  if (to.path !== '/login') {
    if (store.state.userInfo.username) {
      next();
    } else if (userInfo) {
      store.commit('initUserInfo', userInfo);
      next();
    } else {
      next('/login');
    }
  } else {
    next();
  }
});

export default router;
