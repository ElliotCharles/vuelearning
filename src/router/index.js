import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from "@/Layout"

import categoryRoutes from "./category/category"
Vue.use(VueRouter)

const routes = [
 {
   path:"/",
   component:Layout,
   children:[
    ...categoryRoutes
   ]
},

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
