export default {
	page(state, page) {
		state.page = page
	},
	limit(state, limit) {
		state.limit = limit
	},
	list(state, list) {
		state.list = list
	},
	push(state, item) {
		state.list.push(item)
	}
}
