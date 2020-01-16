export default {
	byDomain: (state) => (domain) => {
		return state.list.find(shop => shop.domain === domain)
	}
}
