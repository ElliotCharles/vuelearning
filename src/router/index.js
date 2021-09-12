import Vue from 'vue'
import VueRouter from 'vue-router'
import homeRoutes from './modules/home'


import categoryRoutes from "./category/category"
Vue.use(VueRouter)

const routes = [
 {
   path:"/",
   redirect:"/index",
},
// 电影模块
...homeRoutes

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
