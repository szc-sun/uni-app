<template>
	<view class="content">
		<uni-nav-bar left-icon="back()" left-text="返回" right-text="菜单" @click-left="back" title="导航栏组件"></uni-nav-bar>
		<view>
			{{title}}
		</view>
	</view>
</template>

<script>
import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	export default {
		components: {uniNavBar},
		data(){
			return {
				title: 'test-sun'
			}
		},
		methods:{
			back(){
				 uni.navigateBack({  
                    delta: 0
                });  
			}
		}
	}
</script>

<style>
</style>
