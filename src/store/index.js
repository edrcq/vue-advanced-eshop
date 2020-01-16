import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import shop from './shop'
import product from './product'
import cart from './cart'

export default new Vuex.Store({
  modules: {
    shop,
    product,
    cart,
  },
  state: {
  },
  mutations: {
  },
  actions: {
  }
})
