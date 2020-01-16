import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { loadLanguageAsync } from '@/lang'

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
    setLang(ctx, lang) {
      loadLanguageAsync(lang)
    }
  }
})
