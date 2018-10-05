// Make sure to call Vue.use(Vuex) first if using a module system
import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import root from './modules/root'

Vue.use(Vuex)

const vuexPersist = new VuexPersist({
  key: 'my-app',
  storage: localStorage
})

const store = new Vuex.Store({
  plugins: [vuexPersist.plugin],
  modules: {
    root: root
  }
})

export default store
