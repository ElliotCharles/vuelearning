import Vue from 'vue'
import VueRouter from 'vue-router'
import homeRoutes from './modules/home'
import categoryRoutes from "./modules/category"
import cartRoutes from "./modules/cart"
import userRoutes from "./modules/user"
import topicRoutes from "./modules/topic"
Vue.use(VueRouter)

const routes = [
 {
   path:"/",
   redirect:"/index",
},
// 电影模块
...homeRoutes,
...categoryRoutes,
...cartRoutes,
...topicRoutes,
...userRoutes,

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
