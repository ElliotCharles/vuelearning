<template>
  <div>
    <form action="/">
  <van-search
    v-model="value"
    show-action
    placeholder="请输入搜索关键词"
    @input="onSearch"
    @cancel="onCancel"
  />
</form>
<router-view ref="ppp"></router-view>
  </div>
</template>

<script>
import Vue from 'vue';
import uri from '@/config/uri'
import { Search,Toast,Tag } from 'vant';
Vue.use(Tag);
Vue.use(Search);
export default {
  data() {
    return {
      value: "",
      list:{
      defaultKeyword:{},
      historyKeywordList:{},
      hotKeywordList:{}
      },
     
    };
  },
  watch: {
    $route(val){
      this.value = val.query.keyword
    }
  },
  methods: {
    onSearch(val) {
      if(this.$route.path == "/topic/drop"){
        this.$refs.ppp.getGoodsInfo()
       
      }else{
         this.$router.push("/topic/drop?keyword="+val)
       
      } 
      this.$store.commit('setKeyword',val)
      // console.log(this.$store.state.searchKeyword)
    },
    onCancel(){
      this.$router.push("/topic/suggest")
    },
    
  },
  
}
</script>

<style scoped>



</style>
