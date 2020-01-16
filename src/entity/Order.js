class Order {
	constructor({ userId, shopUuid, cart, status, createdAt }) {
		this.user = userId || ''
		this.shop = shopUuid || ''
		this.cart = cart || []
		this.status = status || 'created' // created, paid, send
		this.createdAt = createdAt || +new Date()
	}
}

export default Order
