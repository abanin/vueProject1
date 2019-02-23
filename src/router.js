import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from './components/Home'
import Ad from './components/Ads/Ad.vue'
import AdList from './components/Ads/AdList'
import NewAd from './components/Ads/NewAd'
import Login from './components/Auth/Login'
import Registration from './components/Auth/Registration'
import Orders from './components/User/Orders'
import AuthGuard from './router/auth-guard'


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
		{
			path: '/',
			component: Home,
			name: 'home'
		},
		{
			path: '/ad/:id',
			props: true,
			component: Ad,
			name: 'ad'
		},
		{
			path: '/list',
			component: AdList,
			name: 'list',
			beforeEnter: AuthGuard
		},
		{
			path: '/new',
			component: NewAd,
			name: 'newAd',
			beforeEnter: AuthGuard
		},
		{
			path: '/login',
			component: Login,
			name: 'login'
		},
		{
			path: '/registration',
			component: Registration,
			name: 'reg'
		},
		{
			path: '/orders',
			component: Orders,
			name: 'orders',
			beforeEnter: AuthGuard
		}
  ]
})
