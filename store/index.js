import Vue from 'vue'
import Vuex from 'vuex'
import footer_store from "./modules/footer_store.js"
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		a:0
	},
	mutations: {},
	action:{},
	modules:{
		footer_store
	}
})
export default store