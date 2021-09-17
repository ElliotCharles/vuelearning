<template>
  <div>
    <img :src=current.banner_url alt="" class="imgtop">
    <div class="midword">{{current.front_name}}</div>
    <van-grid :column-num="3">
        <van-grid-item v-for="item in current.subCategoryList" :key="item.id" >
          <img :src=item.banner_url alt="">
          <span>{{item.name}}</span>
          </van-grid-item>
    </van-grid>
  </div>
    
</template>

<script>
import Vue from 'vue';
import { Grid, GridItem } from 'vant';

Vue.use(Grid);
Vue.use(GridItem);
export default {
  data(){
    return{}
  },
  props:['current'],
}
</script>

<style scoped>
.imgtop{
  width: 84%;
}
.midword{
  width: 84%;
  text-align: center;
  margin: 20px 0;
}
</style>