import Vue from 'vue'
import Vuex from 'vuex'
import LiveStore from './LiveStore'
import NewsStore from './NewsStore'

Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
    LiveStore,
    NewsStore
  }
})