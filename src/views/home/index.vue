<template>

<div class="body">
  <van-swipe :autoplay="3000">
  <van-swipe-item v-for="(item, index) in this.banner" :key="index">
    <img class="banner-img" v-lazy="item" />
  </van-swipe-item>
</van-swipe>

<van-grid column-num="5" >
   <van-grid-item class="grid_item" v-for="value in this.channel" :key="value.id"
    :icon="value.icon_url" :text="value.name" @click="channelEnter(value.id)" >
  </van-grid-item>
</van-grid>
<div class="blank"></div>
  <div class="brand">
    <div class="Head">品牌制造商直供</div>
    <van-grid :column-num="2" :gutter="0" :border="false">
      <van-grid-item v-for="(item,index) in brandList" :key="index">
          <div>
            <van-image
                width="100%"
                height="100"
                fit="fill"
                :src="item.app_list_pic_url"
            />
            <span class="name">{{ item.name }}</span>
            <span class="money">￥{{ item.floor_price }}</span>
          </div>
      </van-grid-item>
    </van-grid>
  </div>
  <div class="blank"></div>
  <div class="newGoodsList">
    <div class="Head">周一周四·新品首发</div>
    <van-grid :column-num="2" class="current" :border="false">
 <van-grid-item v-for="(item) in this.newGoodsList" :key="item.id"
 @click="detailEnter(item.id)">
    <van-image :src="item.list_pic_url"/>
    <div>{{item.name}}</div>
    <p>￥{{ item.retail_price }}元</p>
  </van-grid-item>
</van-grid>
  </div>
  <div class="blank"></div>
  <div class="hotGoodsList">
    <div class="Head">人气推荐</div>
    <van-card v-for="value in this.hotGoodsList" :key="value.id"
  :price="value.retail_price+'元'"
  :desc="value.goods_brief"
  :title="value.name"
  :thumb="value.list_pic_url"
/>
  </div>
  <div class="topicList">
    <div class="Head">专题精选</div>
    <van-swipe :loop="false" :width="300" >
  <van-swipe-item class="topicList-item" v-for="value in this.topicList" :key="value.id">
    <img :src="value.item_pic_url">
    <b>{{value.title}} {{value.read_count}}</b>
    <p>{{value.subtitle}}</p> 
    </van-swipe-item>
</van-swipe>
  </div>
  </div>

</template>

<script>
import uri from "@/config/uri"
import Vue from 'vue';
import { Search ,Swipe,SwipeItem,Lazyload,Grid, GridItem,Image,Card} from 'vant';

Vue.use(Search);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Image);
Vue.use(Card);
export default {
  data() {
    return {
      value: '',
      banner:[],
      channel:[],
      brandList:[],
      newGoodsList:[],
      catgoryList:[],
      hotGoodsList:[],
      topicList:[],
      
    };
  },
  created(){
    this.$http.get(uri.getHome).then(res=>{
      if(res.errno==0){
        console.log(res.data);
        res.data.banner.forEach(el => {
          this.banner.push(el.image_url)
        });
      this.channel=res.data.channel
      this.brandList=res.data.brandList
      this.newGoodsList=res.data.newGoodsList
      this.hotGoodsList=res.data.hotGoodsList
      this.topicList=res.data.topicList

      }
    })
      },
      methods:{
        channelEnter(pid){
          this.$router.push({path:"/category",query:{id:pid}})
          // this.$router.push({path:"/channel",params:{id:pid}})
        },
        detailEnter(pid){
          this.$router.push({path:"/detail",query:{id:pid}})
        }
      }
}
</script>

<style scoped>
.body{
  background-color: #F5F5F5;

}
  .banner-img{
    height: 220px;
    width: 100%;
  }
  .Head{
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #333;
    font-size: 20px;
    background-color: #fff;
  }
  .blank{
    height: 20px;
  }
  .name {
    position: absolute;
    top: 20%;
    left: 10%;
    color: red;
  }

  .money {
    position: absolute;
    top: 40%;
    left: 10%;
    color: red;
  }

 .van-grid-item__content {
  padding: .02rem .02rem;
}
.hotGoodsList{
  background-color: #fff;
}
.topicList{
  background-color: #fff;
}
.topicList img{
  height: 200px;
}
.topicList p{
  font-size: 14px;
  line-height: 14px;
}
.topicList b{
  font-size: 16px;
}
.topicList-item{
  padding:0 0 0 30px;
}
</style>>
