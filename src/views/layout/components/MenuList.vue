<template>
  <a-menu
    :default-selected-keys="[$route.name]"
    :default-open-keys="[$route.meta.parentTitle]"
    mode="inline"
    theme="dark"
    :inline-collapsed="collapsed"
  >
    <a-sub-menu key="home">
      <span slot="title"
        ><a-icon type="home" /><span>首页</span></span
      >
      <a-menu-item key="Index">
        <router-link :to="{name: 'Index'}"> <a-icon type="pie-chart" />统计</router-link>
      </a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="goods">
      <span slot="title"
        ><a-icon type="shopping" /><span>商品</span></span
      >
      <a-menu-item key="ProductList">
        <router-link :to="{name: 'ProductList'}"><a-icon type="unordered-list" /> 商品列表</router-link>
      </a-menu-item>
      <a-menu-item key="ProductAdd">
        <router-link
          :to="{name: 'ProductAdd'}"
        ><a-icon type="file-add" /> 添加商品</router-link>
      </a-menu-item>
      <a-menu-item key="Category" v-if="isShowManage">
        <router-link :to="{name: 'Category'}"><a-icon type="setting"/> 商品类目管理</router-link>
      </a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
    //   collapsed: false,
    };
  },
  watch: {
    $route() {
      console.log(this.$route);
    },
  },
  computed: {
    ...mapState(['collapsed', 'userInfo']),
    isShowManage() {
      // return this.userInfo.role === 'admin';
      return true;
    },
  },
};
</script>
