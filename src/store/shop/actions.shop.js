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
	},
	async findByDomain({ commit }, domain) {
		const { data } = await Shop.findByDomain(domain)
		if (Array.isArray(data) && data[0] && data[0].uuid) {
			commit('push', data[0])
			return data[0]
		}
	}
}
