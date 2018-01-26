import Vue from 'vue'
import Vuex from 'vuex'
import LiveStore from './live-store'
import NewsStore from './news-store'

Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
    LiveStore,
    NewsStore
  }
})