import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import shop from './shop'
import product from './product'

export default new Vuex.Store({
  modules: {
    shop,
    product,
  },
  state: {
  },
  mutations: {
  },
  actions: {
  }
})
