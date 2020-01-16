import { httpClient } from '@/app/index'

class Shop {
	constructor({ name, domain, uuid, user }) {
		this.name = name || ''
		this.domain = domain || ''
		this.uuid = uuid || ''
		this.user = user || ''
	}

	static fetch(page = 0, limit = 20) {
		return httpClient.get(`/shops?_page=${page}&_limit=${limit}`)
	}
}

export default Shop
