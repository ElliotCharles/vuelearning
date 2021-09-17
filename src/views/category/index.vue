<template>
  <div>
      <van-sidebar v-model="activeKey" @change="onChange"  class="sidebar">
       
        <van-sidebar-item v-for="item in categoryList" :key="item.id" :title="item.name">
        </van-sidebar-item>
      </van-sidebar>
      <Child :current="currentCategory"></Child>
  </div>
</template>

<script>
import Child from './catedetail.vue'
import uri from "@/config/uri"
import Vue from 'vue';
import { Sidebar, SidebarItem ,Notify} from 'vant';

Vue.use(Sidebar);
Vue.use(SidebarItem);
export default {
   data() {
    return {
      activeKey: 0,
      categoryList:{},
      currentCategory:{}
    };
  },
  components:{Child},
  methods: {
    onChange(index) {
      let id = this.categoryList[index].id
      // console.log(id)
      this.$http.get(uri.getCatelog + "?id=" + id).then(res=>{
        this.currentCategory = res.data.data.currentCategory
      })
    },
  },
  created(){
     this.$http.get(uri.getCategory).then(res=>{
       this.categoryList = res.data.data.categoryList
       this.currentCategory = res.data.data.currentCategory
     })
  }
  
}
</script>

<style scoped>

.sidebar{
  width: 100px;
  float: left;
}
</style>