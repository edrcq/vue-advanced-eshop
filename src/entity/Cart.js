
class Cart {
	constructor({ user, shop, items } = {}) {
		this.user = user || ''
		this.shop = shop || ''
		this.items = items || {}
	}

	get total() {
		let _total = 0
		for (let item of this.items) {
			_total += item.price
		}
		return _total
	}

	get count() {
		return Object.keys(this.items).length
	}

	add(product) {
		console.log(product)
		const already = this.items[product.id]
		if (!already) {
			this.items[product.id] = { ...product, quantity: 1 }
		}
		else {
			this.items[product.id].quantity++
		}
	}
}

module.exports = Cart
