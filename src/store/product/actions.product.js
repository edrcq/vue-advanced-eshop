import { Product } from '@/entity'

export default {
	async fetch({ commit }, shopUuid) {
		const products = []
		const { data: items } = await Product.fetch(shopUuid)

		for (let item of items) {
			products.push(new Product(item))
		}
		commit('list', products)
		return products
	}
}
