<template>
  <div>
      <div class="historysearch">
  <h3>历史记录</h3>
  <van-tag color="#225555" v-for="item in list.historyKeywordList" :key="item.id" plain class="historytag" @click="click(item)">{{item}}</van-tag>
<a class="cleanH" @click="onClean()">清除记录</a>
  <h3>热门搜索</h3>
<span class="hotsearch"  v-for="item in list.hotKeywordList" :key="item.id">
  <van-tag color="#ff2233" v-if="item.is_hot" plain class="hottag" @click="click(item.keyword)">{{item.keyword}}</van-tag>
  <van-tag color="#225555" v-else plain class="hottag" @click="click(item.keyword)">{{item.keyword}}</van-tag>
</span>
</div>
</div>
</template>

<script>
import Vue from 'vue';
import uri from "@/config/uri"
import {Tag } from 'vant';
Vue.use(Tag);
export default {
    data(){
        return{
list:{
      defaultKeyword:{},
      historyKeywordList:{},
      hotKeywordList:{}
      },
        }
    },
methods:{
    click(item){
      this.$store.commit('setKeyword',item)
      this.$router.push("/topic/drop?keyword="+item)
    },
    onClean(){
      this.$http.get(uri.cleanHistory).then(location.reload())

    }   
},
created(){
    this.$http.get(uri.getPop).then(res=>{
      this.list = res.data.data;
    })
    
  }
  
}
</script>

<style scoped>
.historysearch{
margin:10px 20px ;
}
.hotsearch{
  margin:0px 0px ;
}
.historytag{
  margin:0px 2px
}
.hottag{
  margin:0px 2px
}
.cleanH{
  float: right;
}
</style>