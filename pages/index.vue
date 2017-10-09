<template>
	<section class="page-home">
		<el-row class="banner" type="flex" justify="space-between">
			<el-col :span="12">
				<el-carousel class="banner-left">
					<el-carousel-item v-for="(item, index) in bannerList" :key="index">
						<img :src="item" alt="">
					</el-carousel-item>
				</el-carousel>
			</el-col>
			<el-col :span="12">
				<div class="banner-right" :style="bannerRightStyle">
					<p class="banner-right-text">
						毕竟不是作家，写不出那么好的文章。--因为没有丰富阅历和经验！
					</p>
				</div>
			</el-col>
		</el-row>

		<el-row class="main-content" :gutter="20">
			<el-col :span="17">
				<h2 class="title-h2">文章推荐 <span>Article</span></h2>
				<Article></Article>
				<Article></Article>
				<Article></Article>
				<Article></Article>
			</el-col>
			<el-col :span="7">
				<h2 class="title-h2">关于我 <span>About</span></h2>
				<div class="about">
					暂留
				</div>
			</el-col>
		</el-row>

	</section>
</template>

<script>
import Article from '~/components/home/Article.vue'

import banner1 from '~/assets/images/banner/s-banner1.jpg'
import banner2 from '~/assets/images/banner/s-banner2.jpg'
import banner3 from '~/assets/images/banner/s-banner3.jpg'
import banner4 from '~/assets/images/banner/s-banner4.jpg'
import blackboard from '~/assets/images/home/blackboard.jpg'

export default {
	components: {
		Article
	},
	data() {
		return {
			bannerList: [banner1, banner2, banner3, banner4],
			bannerRightStyle: {
				background: `url(${blackboard}) no-repeat center center`
			}
		}
	},
	created() {
	}
}
</script>
