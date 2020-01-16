<template>
	<div id="nav">
		<router-link to="/">{{ $t('menu_item_shops') }}</router-link> |
		<router-link to="/cart">{{ $t('menu_item_cart') }} ({{ cart.count }})</router-link> |
		<div class="dropdown">
			<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			Choose language
			</button>
			<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
				<a class="dropdown-item" href="#" @click.prevent="setLang('fr')">Francais</a>
				<a class="dropdown-item" href="#" @click.prevent="setLang('en')">English</a>
				<a class="dropdown-item" href="#" @click.prevent="setLang('ru')">Russian</a>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      cart: state => state.cart.cart
    }),
    ...mapGetters({
      cartCountItems: 'cart/countItems'
    })
	},
	methods: {
		setLang(lang) {
			this.$store.dispatch('setLang', lang)
		}
	}
}
</script>
