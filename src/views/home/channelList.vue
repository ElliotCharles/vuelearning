<template>
  <div>
    <van-tabs v-model="activeName">
  <van-tab v-for="(item,index) in this.categoryList" :key="index"
   :title="item.name" :name="item.name" ></van-tab>
</van-tabs>
<div class="text">
  <h2>{{activeName}}</h2>
  <p>{{frontName}}</p>
</div>
<van-grid :column-num="2" class="current" :border="false">
 <van-grid-item v-for="(item) in this.currentCategoryList" :key="item.id" @click="detailEnter(item.id)">
    <van-image :src="item.list_pic_url" class="current_img" name=""/>
    <div>{{item.name}}</div>
    <p>￥{{ item.retail_price }}元</p>
  </van-grid-item>
</van-grid>
  </div>
</template>

<script>
import uri from "@/config/uri"
import Vue from 'vue';
import { Tab, Tabs, Grid, GridItem } from 'vant';

Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Grid);
Vue.use(GridItem);
export default {
   data() {
    return {
      
      activeName:"",
      frontName:"",
      categoryList:[],
      currentCategoryList:[]
    };
  },
  created(){
    let categoryID=this.$route.query.id
    this.$http.get(uri.getCategoryNav+"?id="+categoryID).then(res=>{
      if(res.errno==0){
      this.categoryList=res.data.brotherCategory
      this.activeName=res.data.currentCategory.name
      this.frontName=res.data.currentCategory.front_name
      console.log(res.data);
      
      }else{
        console.log("error");
      }
    })
    this.$http.get(uri.getCategoryList+"?categoryId="+categoryID).then(res=>{
        console.log(res);
        this.currentCategoryList=res.data.data
    })
  },
  methods:{
    detailEnter(pid){
          this.$router.push({path:"/detail",query:{id:pid}})
        }
  }
}
</script>

<style scoped>
.text{
  padding: 2px 0;
  text-align: center;
  background-color: 	#F5F5F5;
}
.text h2{
  font-size: 18px;
  color: #333;
  font-weight: normal;
}
.text p{
  font-size: 14px;
  color: #666666;
}
.current{
  margin-top: 50px;
  font-size: 14px;
  color: #333;
}
.current_img{
  width: 100%;
  height: 193px;
}
</style>