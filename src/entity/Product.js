import crypto from 'crypto'
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

	get id() {
		const { shop, name, color } = this
		const hash = crypto.createHash('sha256')
		hash.update(`${shop}${name}${color}`)
		return hash.digest().toString('hex')
	}

	static fetch(shop) {
		return httpClient.get(`/products?shop=${shop}`)
	}
}

export default Product
