export default {
	state:{
		now_page_index:0,
	},
	mutations:{
		change_page(state,index){
			state.now_page_index = index;
		}
	},
	actions:{
		NowPage(index){
			index.commit("change_page",index)
		}
	},
}