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
<router-view></router-view>
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
      value: '',
      list:{
      defaultKeyword:{},
      historyKeywordList:{},
      hotKeywordList:{}
      },
     
    };
  },
  methods: {
    onSearch(val) {
      this.$router.push("/topic/drop?value=" + val)
    },
    onCancel(){
      this.$router.push("/topic/suggest")
    }    
    // getValue:function(n){
    //   this.value=n
    // }
  },
  // updated(){
    // this.value = this.$store.state.searchKeyword
  // },
}
</script>

<style scoped>



</style>
