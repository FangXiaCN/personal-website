// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './routers.js'
import './plugins/element.js'
import './bmob.js'
//导入全局样式表
import './assets/css/global.css'


Vue.config.productionTip = false
//全局注册组件
// Vue.component("users", Users);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
