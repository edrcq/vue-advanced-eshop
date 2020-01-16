class Order {
	constructor(userId, shopUuid, cart = []) {
		this.user = userId
		this.shop = shopUuid
		this.cart = cart
		this.status = 'created' // created, paid, send
		this.createdAt = +new Date()
	}
}

export default Order
