<template>
  <div> 
    <van-tabbar v-model="active" active-color="#8e322a" inactive-color="#4a4b4a" >
        <van-tabbar-item replace to="/index">
            <van-icon slot="icon" size="20" class="iconfont">&#xe620;</van-icon>
            <span>首页</span>
        </van-tabbar-item>
        <van-tabbar-item replace to="/topic/suggest">
            <van-icon slot="icon" size="20" class="iconfont">&#xe6a6;</van-icon>
            <span>搜索</span>
        </van-tabbar-item>
        <van-tabbar-item  replace to="/categorys">
            <van-icon slot="icon" size="20" class="iconfont">&#xe502;</van-icon>
            <span>分类</span>
        </van-tabbar-item>
        <van-tabbar-item replace to="/cart">
            <van-icon slot="icon" size="20" class="iconfont" >&#xe505;</van-icon>
            <span>购物车</span>
        </van-tabbar-item>
        <van-tabbar-item replace to="/user">
            <van-icon slot="icon" size="20" class="iconfont" >&#xf2f9;</van-icon>
            <span>我的</span>
        </van-tabbar-item>
    </van-tabbar>
</div>
</template>

<script>
import Vue from "vue";
import {mapMutations} from "vuex"
import { Tabbar, TabbarItem, Icon } from "vant";
import "@/assets/iconfont/iconfont.css";
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Icon);
export default {
    data() {
        return {
            active: 0,
            pathCollect:["/index","/topic","/category","/cart","/user"]
        };
    },
    created(){
        let b = this.pathCollect.indexOf(this.$route.matched[0].path)
        this.active = b
    },
}
</script>

<style>

</style>