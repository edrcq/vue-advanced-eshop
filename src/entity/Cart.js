class Cart {
	constructor({ user, shop, items } = {}) {
		this.user = user || ''
		this.shop = shop || ''
		this.items = items || []
	}

	get total() {
		let _total = 0
		for (let item of this.items) {
			_total += item.price
		}
		return _total
	}
}

module.exports = Cart
