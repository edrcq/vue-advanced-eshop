
export default {
	countItems: (state) => {
		let quantity = 0
		for (let id in state.items) {
			let item = state.items[id]
			quantity += item.quantity
		}
		return quantity
	},
}
