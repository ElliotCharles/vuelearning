<template>
  <div>
    <van-tabbar v-model="active" active-color="#ff5f16" inactive-color="#797d82" @change="onChange">
        <!-- 自定义图标得用插槽：具名插槽，名称为icon -->
        <van-tabbar-item>
            <van-icon slot="icon" size="20" class="iconfont">&#xe7d3;</van-icon>
            <span>首页</span>
        </van-tabbar-item>
        <van-tabbar-item>
            <van-icon slot="icon" size="20" class="iconfont">&#xe8c0;</van-icon>
            <span>专题</span>
        </van-tabbar-item>
        <van-tabbar-item>
            <van-icon slot="icon" size="20" class="iconfont">&#xe90d;</van-icon>
            <span>分类</span>
        </van-tabbar-item>
        <van-tabbar-item>
            <van-icon slot="icon" size="20" class="iconfont">&#xe639;</van-icon>
            <span>购物车</span>
        </van-tabbar-item>
        <van-tabbar-item>
            <van-icon slot="icon" size="20" class="iconfont">&#xe639;</van-icon>
            <span>我的</span>
        </van-tabbar-item>
    </van-tabbar>
</div>
</template>

<script>
import Vue from "vue";
import { Tabbar, TabbarItem, Icon } from "vant";
import "@/assets/iconfont/iconfont.css";
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Icon);
export default {
    data() {
        return {
            // 选中的那个菜单的索引
            active: 0,
            // 定义菜单的地址，要求与索引值一一对应
            // urls: ["/films/nowPlaying", "/cinemas", "/infos", "/center"],
        };
    }
}
</script>

<style>

</style>