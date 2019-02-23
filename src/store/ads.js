import * as fb from 'firebase'

class Ad {
	constructor(title, description, ownerId, imageSrc = '', promo = false, id = null ) {
		this.title = title
		this.description = description
		this.ownerId = ownerId
		this.imageSrc = imageSrc
		this.promo = promo
		this.id = id
	}
}

export default {
	state: {
		ads: [
			{ 
				title: 'First ad',
				description: 'Hello i am description',
				promo: false,
				imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
				id: '123'
			},
			{ 
				title: 'Second ad',
				description: 'Hello i am description',
				promo: true,
				imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
				id: '1234'
			},
			{ 
				title: 'Third ad',
				description: 'Hello i am description',
				promo: true,
				imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
				id: '12345'
			}
		]
	},
	getters: {
		ads(state) {
			return state.ads
		},
		promoAds(state) {
			return state.ads.filter(ad => ad.promo)
		},
		myAds(state) {
			//потом отфильтровать
			return state.ads
		},
		adById(state) {
			return adId => {
				return state.ads.find(ad => ad.id === adId)
			}
		}
	},
	mutations: {
		createAd(state, payload) {
			state.ads.push(payload);
		}
	},
	actions: {
		async createAd(store, payload) {
			store.commit('clearError');
			store.commit('setLoading', true);
			try {
				const ownerUserId = store.getters.user.id;
				console.log(payload);
				const newAds = new Ad(
					payload.title,
					payload.description,
					ownerUserId,
					payload.imageSrc,
					payload.promo);
				const fbVal = await fb.database().ref('ads').push(newAds);
				console.log(fbVal);
			} catch(err) {
				store.commit('setError', err.message)
				store.commit('setLoading', false);
				throw err;
			}
		}
	}
}