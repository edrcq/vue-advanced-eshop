import { httpClient } from '@/app/index'

class Product {
	constructor({ name, product, dep, color, material, price, shop } = {}) {
		this.name = name || ''
		this.product = product || ''
		this.dep = dep || ''
		this.color = color || ''
		this.material = material || ''
		this.price = price || 0
		this.shop = shop || ''
	}

	static fetch(shop) {
		return httpClient.get(`/products?shop=${shop}`)
	}
}

export default Product
