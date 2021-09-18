import Vue from 'vue'
import VueRouter from 'vue-router'
import detailRoutes from './modules/detail'
import homeRoutes from './modules/home'
// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import homeRoutes from './modules/home'
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
...homeRoutes,
...detailRoutes,
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
