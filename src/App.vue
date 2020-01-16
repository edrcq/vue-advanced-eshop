<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">List des boutiques</router-link> |
      <router-link to="/cart">Panier ({{ cart.count }})</router-link> |
    </div>
    <router-view/>r
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
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
