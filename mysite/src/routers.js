import Vue from 'vue'
import VueRouter from "vue-router";
import login from './components/login'

Vue.use(VueRouter)

var router = new VueRouter({
  routes:[
    //重定向
    {path:'/', redirect:'/login'},
    {path:'/login', component: login}
  ]
})
export default router;
