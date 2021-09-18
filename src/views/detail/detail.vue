<template>
  <div class="body">
    <div class="biaoti">
        <van-row >
        <van-col span="8"><van-icon color="red" name="checked" />30天无忧退换</van-col>
        <van-col span="8"><van-icon color="red" name="checked" />48小时快速退费</van-col>
        <van-col span="8"><van-icon color="red" name="checked" />满88元包邮</van-col>
    </van-row>
    </div>
    <div class="content">
        <h2>{{this.info.name}}</h2>
        <p>{{this.info.goods_brief}}</p>
        <span>￥{{this.info.retail_price}}元</span>
    </div>
    <div class="popup">
        <van-cell is-link @click="showPopup">展示弹出层</van-cell>
        <van-popup v-model="show" position="bottom" :style="{ height: '30%' }" />
    </div>
    
    <div class="param">商品参数</div>
    <div class="question">
        <h3>常见问题</h3>
       
                <h4>购买运费如何收取</h4>
                <p>单笔订单金额（不含运费）满88元免邮费；不满88元，每单收取10元运费。
(港澳台地区需满</p>
        <h4>购买运费如何收取</h4>
                <p>单笔订单金额（不含运费）满88元免邮费；不满88元，每单收取10元运费。
(港澳台地区需满</p>
        <h4>购买运费如何收取</h4>
                <p>单笔订单金额（不含运费）满88元免邮费；不满88元，每单收取10元运费。
(港澳台地区需满</p>
        <h4>购买运费如何收取</h4>
                <p>单笔订单金额（不含运费）满88元免邮费；不满88元，每单收取10元运费。
(港澳台地区需满</p>
    
    </div>
    <div>
        <van-goods-action>
  <van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" />
  <van-goods-action-icon icon="cart-o" text="购物车" />
  <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
  <van-goods-action-button type="warning" text="加入购物车" />
  <van-goods-action-button type="danger" text="立即购买" />
</van-goods-action>
    </div>
  </div>
</template>

<script>
import uri from '../../config/uri'
import Vue from 'vue';
import { Col, Row, Icon,Cell, Popup,GoodsAction, GoodsActionIcon, GoodsActionButton} from 'vant';
Vue.use(Row)
Vue.use(Col)
Vue.use(Icon)
Vue.use(Popup);
Vue.use(Cell);
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
export default {
    data(){
        return{
            info:{},
            show: false,
        }
    },
    created(){
    this.$store.commit("setIsShow",false)
    let detailID=this.$route.query.id
    this.$http.get(uri.getDetail+"?id="+detailID).then(res=>{
      if(res.errno==0){
          this.info=res.data.info
      console.log(this.info);
      
      }else{
        console.log("error");
      }
    })
    },
    beforeDestroy(){
        this.$store.commit("setIsShow",true)
    },
    methods: {
    showPopup() {
      this.show = true;
    },
  },
}
</script>

<style scoped>
.body{
  background-color: #F5F5F5;

}

.van-row{
    text-align: center;
    line-height:30px;
    font-size: 12px;
    color: #333;
}
.content{
    background-color: #fff;
    text-align: center;
    height: 161px;
    padding: 20px 0;
    line-height: 40px;
    border-bottom: 1px solid darkgray;
}
.content h2{
    font-weight: normal;
}
.content span{
    color: red;
}
.popup{
    color: #323233;
    font-size: 14px;
    line-height: 24px;
    background-color: #fff;
    padding: 0 16px;
}
.param{
    padding: 10px;
    font-size: 20px;
    margin: 20px 0 10px;
    background-color: #fff;
}
.question{
    background-color: #fff;
    padding: 10px 5px;
}
.question h3{
    text-align: center;
    font-weight: normal;
}
.question h4{
    font-weight: normal;
    line-height: 30px;
}
.question p{
    font-size: 14px;
}
</style>