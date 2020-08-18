import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		loading: false,
		loginUer: {
			loginId:'00000000'
		}
	},
	mutations: {
		loading(state, isLoading) {
			state.loading = isLoading;
		}
	},
	actions: { 
	}
})

export default store
