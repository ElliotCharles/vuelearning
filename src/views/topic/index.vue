<template>
  <div>
    <form action="/">
  <van-search
    v-model="value"
    show-action
    placeholder="请输入搜索关键词"
    @search="onSearch"
    @cancel="onCancel"
    @placeholder='getValue'
  />
</form>
<router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue';
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
      Toast(val);
    },
    onCancel() {
      Toast('取消');
    },
    getValue:function(n){
      this.value=n
    }
  },
  
}
</script>

<style scoped>
.historysearch{
margin:10px 20px ;
}
.hotsearch{
  margin:10px 20px ;
}
.historytag{
  margin:0px 2px
}
.hottag{
  margin:0px 2px
}


</style>>
