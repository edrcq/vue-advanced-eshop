import { socket } from '@/socket'

function install(Vue) {
	Vue.prototype.$socket = socket
}

export default {
	install,
}
