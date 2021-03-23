<template>
  <div class="header">
    <a-button
      type="primary"
      style="margin-bottom: 16px"
      @click="toggleCollapsed"
    >
      <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>
    <a-breadcrumb>
      <a-breadcrumb-item>
        {{ $route.meta.parentTitle=='home' ? '首页' : '商品' }}
      </a-breadcrumb-item>
      <a-breadcrumb-item>
        <router-link :to="{name: $route.name}">{{ $route.meta.title }}</router-link>
      </a-breadcrumb-item>
    </a-breadcrumb>
    <ul class="user-info">
      <li>欢迎{{ userInfo.username }} <a-icon type="down" /></li>
      <li @click="logout">退出</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import user from '@/api/user';

export default {
  data() {
    return {
      //   collapsed: false,
    };
  },
  computed: {
    ...mapState(['collapsed', 'userInfo']),
  },
  methods: {
    toggleCollapsed() {
      this.$store.commit('changeCollapsed');
    },
    logout() {
      user.logout();
      this.$router.push('/login');
    },
  },
};
</script>
