<template>
  <div>
    <van-dropdown-menu>
        <van-dropdown-item v-model="value1" disabled :options="option1" title="综合"/>
        <van-dropdown-item v-model="value2" :options="option2" title="价格"/>
        <van-dropdown-item v-model="value3" :options="option3" title="分类"/>
    </van-dropdown-menu>
    <van-grid :column-num="2" :border="false" >
      <van-grid-item v-for="item in goodlist" :key="item.id" :to="`/goods/related?id=${item.id}`"> 
        <van-image class="img1" :src="item.list_pic_url" />
        <span class="span1">{{item.name}}</span>
        <span class="span2">{{item.retail_price}}元</span>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import Vue from 'vue';
import uri from '@/config/uri'
import { DropdownMenu, DropdownItem ,Grid, GridItem,Image} from 'vant';
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Image);
export default {
    data() {
    return {
      value1: 0,
      value2: 'a',
      value3: 'a',
      option1: [
        
      ],
      option2: [
        { text: '价格由高到低', value: 'a' },
        { text: '价格由低到高', value: 'b' },
      ],
      option3: [
        { text: '分类', value: 'a' },
      ],
      goodlist:{
        id:'',
        name:'',
        list_pic_url:'',
        retail_price:''
      }
    };
  },
  methods:{
    getGoodsInfo(){
      console.log("getinfo  请求")
      this.$http.get(uri.getGoodlist +"?keyword="+this.$store.state.searchKeyword).then(res=>{
              this.goodlist = res.data.data.data
            })
    }
  },
  created(){
    this.getGoodsInfo()
  },
}
</script>

<style>
.box{
  margin-bottom: 20px;
}
  .img1{
    height: 45vh;
  }
 .span1{
   padding: 10px 0;
 }
 .span2{
   color: brown;
 }
</style>