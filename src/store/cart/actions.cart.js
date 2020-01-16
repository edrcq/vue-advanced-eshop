// import { Cart } from '@/entity'

export default {
	async add({ state, commit }, product) {
		const { cart } = state
		cart.add(product)
		commit('cart', cart)
	},
/*	async empty({ commit }) {

	}*/

}
