<template>
	<view>
		<view class="footer">
			<view :class="'footer_item ' + (item.size=='big'?'big_item':'')  " :style="'width:'+item_width" @click="change_nav(index)" v-for="(item,index) in footer_nav" :key="index">
				<image :src="index==now_index?item.select_icon:item.icon" mode=""></image>
				<view>{{item.name}}</view>
			</view>
		</view>
	</view>
</template>

<script> 
	export default{
		data(){
			return{
				footer_nav:[
					{
						name:'首页',
						name_code:'home',
						icon:'/static/footer_icon/a2.png',
						select_icon:'/static/footer_icon/a1.png',
						size:'small'
					},
					{
						name:'消息',
						name_code:'publish',
						icon:'/static/footer_icon/f2.png',
						select_icon:'/static/footer_icon/f1.png',
						size:'small'
					},
					{
						name:'购物车',
						name_code:'publish',
						icon:'/static/footer_icon/f2.png',
						select_icon:'/static/footer_icon/f1.png',
						size:'big'
					},
					{
						name:'我的',
						name_code:'my',
						icon:'/static/footer_icon/d1.png',
						select_icon:'/static/footer_icon/d2.png',
						size:'small'
					},
					
				],
				now_page_index:0,
			}
		},
		computed:{
			item_width(){
				let length = this.footer_nav.length;
				switch (length){
					case 1:
						return '100%'
						break;
					case 2:
						return '50%'
						break;
					case 3:
						return '33.3%'
						break;
					case 4:
						return '25%'
						break;
					case 5:
						return '20%'
						break;
					default:
						break;
				}
			},
			now_index(){
				return this.$store.state.footer_store.now_page_index;
			}
		},
		methods:{
			change_nav(index){
				this.$store.commit("change_page",index)
				// this.now_page_index = index
			}
		}
	}
</script>

<style>
	.footer{
		height: 120upx;
		
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		background-color: #181E30;
		color: #fff;
		
	}
	.footer_item{
		float: left;
		width: 33.3%;
		text-align: center;
		font-size: 28upx;
		height: 120upx;
	 
	}
	.footer_item image{
		width: 60upx;
		height: 60upx;
	}
	.footer_item.big_item{
		position: relative;
		top: -40upx;
	}
	.footer_item.big_item image{
		width: 100upx;
		height: 100upx;
	}
</style>
