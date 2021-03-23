<template>
  <div class="app-wrap">
    <div class="main-app" :class="{unfold: collapsed}">
      <main-header />
      <router-view></router-view>
    </div>
    <div class="menu-list" :class="{unfold: collapsed}">
      <menu-list :key="key" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import MainHeader from './components/MainHeader.vue';
import MenuList from './components/MenuList.vue';

export default {
  components: {
    MainHeader,
    MenuList,
  },
  data() {
    return {
      key: new Date().getTime(),
    };
  },
  watch: {
    $route() {
      this.key = new Date().getTime();
    },
  },
  computed: {
    ...mapState(['collapsed']),
  },
};
</script>

<style lang="less">
  @import url("~@/assets/css/home.less");
</style>
