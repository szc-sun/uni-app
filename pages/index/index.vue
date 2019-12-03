<template>
	<view class="content">
		<Header :leftWords = 'leftWords' :input='input' :rightIcon='rightIcon' :rightWords='rightWords' ></Header>
		<!-- <image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}123</text>
			<button @click="scan">扫码</button>
			<span v-show="code">{{code}}</span>
			<span>{{now_page_index}}</span>
		</view> -->
		<component :is='nowPage' class="tab-page"></component>
		<footerNav></footerNav>
	</view>
</template>

<script>
	import Home from './pages/home/home.vue'
	import Message from './pages/message/message.vue'
	import Cart from './pages/cart/cart.vue'
	import Center from './pages/center/center.vue'
	import Header from "../../components/header/header.vue";
	import footerNav from "../../components/footer/footer_nav.vue";
	export default {
		components:{
			Header,
			footerNav,
			Home,
			Message,
			Cart,
			Center
		},
		data() {
			return {
				title: 'Hello',
				code:'',
				leftWords:'aaa',
				input:'bbb',
				rightIcon:'ccc',
				rightWords:'ddd'
			}
		},
		onLoad() {

		},
		computed: {  
		    // ...mapState(['now_page_index'])  
			now_page_index() {
				
			    return this.$store.state.footer_store.now_page_index
			},
			nowPage(){
				var page = ['Home','Message','Cart','Center']
				return page[this.now_page_index]
			}
		},
		methods: {
			scan(){
				var _this = this
				console.log(123,this.now_page_index)
				// 允许从相机和相册扫码
				uni.scanCode({
					success: function (res) {
						_this.code = res.result
						console.log(_this.title,res)
						console.log('条码类型：' + res.scanType);
						console.log('条码内容：' + res.result);
					}
				});
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.tab-page{
		margin-bottom:120upx
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50upx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
