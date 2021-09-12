<template>
<div>
<router-view></router-view>
  <van-tabbar v-model="active">
  <van-tabbar-item icon="home-o">首页</van-tabbar-item>
  <van-tabbar-item icon="home-o">专题</van-tabbar-item>
  <van-tabbar-item icon="search">分类</van-tabbar-item>
  <van-tabbar-item icon="friends-o">购物车</van-tabbar-item>
  <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
</van-tabbar>
</div>
</template>

<script>
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar);
Vue.use(TabbarItem);
export default {
 data() {
    return {
      active: 0,
    };
  },
}
</script>

<style>

</style>