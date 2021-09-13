<template>
  <div>
      <div class="historysearch">
  <h3>历史记录</h3>
  <van-tag color="#7232dd" v-for="item in list.historyKeywordList" :key="item.id" plain class="historytag" @click="click(item)">{{item}}</van-tag>
</div>
  <h3>热门搜索</h3>
<div class="hotsearch"  v-for="item in list.hotKeywordList" :key="item.id">
  <van-tag color="#ccc" v-if="is_hot = 1" plain class="hottag" @click="click(item.keyword)">{{item.keyword}}</van-tag>
  <!-- <van-tag color="#7232dd" v-if="is_hot = 0" plain class="hottag" @click="click(item.keyword)">{{item.keyword}}</van-tag> -->
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
      console.log(item);
      this.$http.get(uri.getGoodlist + "?"+item).then(res=>{
      this.$emit(placeholder,item)
      })
    }
},
created(){
    this.$http.get(uri.getPop).then(res=>{
      console.log(res.data.data);
      this.list = res.data.data;
    })
    
  }
}
</script>

<style>

</style>