<template>
	<view>
		<view class="home">
			首页
			<button @click="toDetail">去详情页</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			toDetail(){
				uni.navigateTo({
					url:'/pages/detail/detail'
				})
			}
		}
	}
</script>

<style>
.home{
	/* height:2000upx */
}
</style>
