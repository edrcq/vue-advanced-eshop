<template>
	<div class="home">
		<div class="row">
			<div
				v-for="product in products"
				:key="product.name + product.dep"
				class="col-3 my-3 py-3 border"
			>
				{{ product.name }}<br />
				<button class="btn btn-primary" @click="addToCart(product)">Add to cart</button>
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
			cart: state => state.cart.cart,
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
	methods: {
		addToCart(product) {
			//this.$store.commit('cart/add', product)
			console.log(product)
			this.$store.dispatch('cart/add', product)
		}
	}
}
</script>
