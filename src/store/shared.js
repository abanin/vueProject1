export default {
	state: {
		loading: false,
		error: null
	},
	getters: {
		loading(state) {
			return state.loading
		},
		error(state) {
			return state.error
		}
	},
	mutations: {
		setLoading (state, payload) {
			state.loading = payload
		},
		setError (state, payload) {
			state.error = payload
		},
		clearError (state) {
			state.error = null;
		}
	},
	actions: {
		setLoading(store, payload) {
			store.commit('setLoading', payload)
		},
		setError(store, payload) {
			store.commit('setError', payload)
		},
		clearError(store) {
			store.commit('clearError')
		}
	}
}