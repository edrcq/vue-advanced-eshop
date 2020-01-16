<template>
	<div class="home">
		<div class="row">
			<div
				v-for="product in products"
				:key="product.name + product.dep"
				class="col-3"
			>
				{{ product.name }}
			</div>
		</div>
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
			products: state => state.products.list
		}),
	},
	created() {
		const { shop: shopDomain } = this.$route.params
		const shopx = this.$store.getters['shop/byDomain'](shopDomain)
		this.$store.dispatch('products/fetch', shopx.uuid)
	}
}
</script>
