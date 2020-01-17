<template>
	<div>

	</div>
</template>

<script>

export default {
	mounted() {
		this.$socket.emit('is it good', { message: 'may be not' })
	}
}
</script>
