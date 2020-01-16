import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    // liste des shops
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/:shop/products',
    name: 'shop.products',
    component: () => import(/* webpackChunkName: "shop" */ '../views/Shop.vue')
  },
  {
    path: '/:shop/cart',
    name: 'shop.cart',
    component: () => import(/* webpackChunkName: "shop" */ '../views/ShopCart.vue')
  },
  {
    path: '/:shop/admin/orders',
    name: 'shop.admin.orders',
    component: () => import(/* webpackChunkName: "shop" */ '../views/ShopAdminOrders.vue')
  },
  {
    path: '/user/:user/orders',
    name: 'user.orders',
    component: () => import(/* webpackChunkName: "shop" */ '../views/UserOrders.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
