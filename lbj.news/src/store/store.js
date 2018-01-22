import Vue from 'vue'
import Vuex from 'vuex'
import LiveStore from './LiveStore'

Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
    LiveStore
  }
})