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
			products: state => state.product.list,
		}),
	},
	created() {
		const { shop: shopDomain } = this.$route.params
		const shop = this.$store.getters['shop/byDomain'](shopDomain)
		if (!shop) {
			this.$store.dispatch('shop/findByDomain', shopDomain).then(shop => {
				this.$store.dispatch('product/fetch', shop.uuid)
			})
		} else {
			this.$store.dispatch('product/fetch', shop.uuid)
		}

	},
}
</script>
