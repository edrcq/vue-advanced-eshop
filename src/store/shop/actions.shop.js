import { Shop } from '@/entity'

export default {
	async fetch({ state, commit }) {
		const shops = []
		const { limit, page } = state
		const { data: items } = await Shop.fetch(page, limit)

		for (let item of items) {
			shops.push(new Shop(item))
		}
		commit('list', shops)
		return shops
	}
}
