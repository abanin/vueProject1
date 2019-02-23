import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import * as fb from 'firebase'
import store from './store/store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
	render: h => h(App),
	
	created() {
		const config = {
			apiKey: "AIzaSyAeXx6WUtu8Ho1lbeFgBKXOXgVO9Zta5mE",
			authDomain: "abanin-test2.firebaseapp.com",
			databaseURL: "https://abanin-test2.firebaseio.com",
			projectId: "abanin-test2",
			storageBucket: "abanin-test2.appspot.com",
			messagingSenderId: "211215395338"
		};
		fb.initializeApp(config);

		fb.auth().onAuthStateChanged(user => {
			if(user) {
				this.$store.dispatch('autoLoginUser', user);
			}
		});
	}
}).$mount('#app')
