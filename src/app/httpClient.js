import axios from 'axios'

const httpClient = axios.create({
	baseURL: 'http://v-api.devloprs.com'
})

export {
	httpClient
}
