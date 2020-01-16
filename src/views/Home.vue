<template>
	<div class="home">
		<ul class="list-group">
			<router-link
				v-for="shop in shops"
				:key="shop.uuid"
				:to="`/${shop.domain}/products`"
				class="list-group-item list-group-item-action"
			>
				{{ shop.name }}
			</router-link>
		</ul>

	</div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex'

export default {
	name: 'home',
		components: {
	},
	computed: {
		...mapState({
			shops: state => state.shop.list
		}),
	},
	created() {
		this.$store.dispatch('shop/fetch')
	}
}
</script>
