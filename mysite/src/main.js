// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
//全局注册组件
// Vue.component("users", Users);
/* eslint-disable no-new */
// 配置路由
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
