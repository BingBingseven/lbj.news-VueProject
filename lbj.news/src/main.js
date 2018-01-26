
import Vue from 'vue'
import App from './App'
import router from './router'
// 项目启动失败问题所在：已更正
import store from './store/store' 
import $ from 'jquery'
import axios from 'axios'

Vue.config.productionTip = false //关闭生产模式下给出的提示

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

