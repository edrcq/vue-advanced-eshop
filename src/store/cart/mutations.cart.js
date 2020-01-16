import Vue from 'vue'
import { Cart } from '@/entity'

export default {
	/* Mutations for Cart direct in vuex */
	empty(state) {
		state.items = {}
	},
	add(state, product) {
		const already = state.items[product.id]
		if (!already) {
			Vue.set(state.items, product.id, { ...product, quantity: 1 })
		}
		else {
			already.quantity++
			Vue.set(state.items, product.id, already)
		}
	},
	/* Manage state.cart */
	cart(state, cart) {
		Vue.set(state, 'cart', new Cart({...cart}))
	}
}
