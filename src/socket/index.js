
import io from 'socket.io-client'

export const socket = io('http://localhost:13455', {  })

/*
socket.on('hello', (data) => {
    console.log(data)
})

socket.on('signup', ({ success, pseudo }) => {
    console.log('socket pseudo', success, pseudo)

	store.commit('auth/pseudo', pseudo)
    router.push('/chat')
})

socket.on('rooms', ({ rooms }) => {
    store.commit('chat/rooms', rooms)
})

*/
