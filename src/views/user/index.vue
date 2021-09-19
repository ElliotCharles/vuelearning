<template>
  <div>
    <div v-if="!login">立即登录</div>
    <div v-if="login">
      用户8904021
    </div>
    <van-overlay :show="show" @click="show = false">
      <div class="wrapper" @click.stop>
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="username"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field
          v-model="captcha"
          type="text"
          name="captcha"
          label="验证码"
          placeholder="验证码"
          :rules="[{ required: true, message: '请填写验证码' }]"
        />
        <img :src="imgsrc" alt="点击刷新">
        <div style="margin:16px;">
          <van-button round block type="info" native-type="submit">提交</van-button>
        </div>
      </van-form>
      </div>
    </van-overlay>
  </div>
</template>

<script>
import uri from "@/config/uri"
import Vue from 'vue';
import { Overlay,Field,Button,Form } from 'vant';
Vue.use(Overlay);
Vue.use(Field);
Vue.use(Button);
Vue.use(Form);
export default {
  data(){
    return{
      captcha:"",
      img:"",
      username:"",
      password:"",
      imgsrc:"",
      login:true,
      show:true
    }
  },

  created(){
    this.$http.get("/bpi/captcha/api/mini").then(res=>{
       this.img = res.img
        this.$store.commit("setCapKey",res.key)
    })
  },
  methods:{
     onSubmit(values) {
      this.$http.post("/bpi/api/common/auth/login",{captcha:this.captcha,key:this.$store.state.capKey,username:this.username,password:this.password}).then(res=>{
        console.log(res)
      })
    },
  } 
} 
</script>

<style scoped>
.wrapper{
  width: 70%;
  height: 200px;
  margin: 300px auto;
}
</style>
