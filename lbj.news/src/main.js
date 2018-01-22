
import Vue from 'vue'
import App from './App'
import router from './router'
// 项目启动失败问题所在：已更正
import store from './store/store' 
import $ from 'jquery'
import VueAwesomeSwiper from 'vue-awesome-swiper';
import axios from 'axios'
import plugin from './plugins/plugin'

Vue.config.productionTip = false //关闭生产模式下给出的提示
Vue.use(VueAwesomeSwiper)
Vue.use(plugin)

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
