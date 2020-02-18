<template>
	<div>
		<b-row>
			<b-col class="text-center title">
				<h2>Tech I use</h2>
				<hr class="white" />
			</b-col>
		</b-row>
		<b-row class="text-center d-flex justify-content-center">
			<b-col cols="2" align-self="center" :key="i.name" v-for="i in images">
				<b-img-lazy fluid-grow :src="'/images/logos/' + i.name" class="bg-dark borderless"></b-img-lazy>
				<p>{{ i.alt }}</p>
			</b-col>
			<b-col cols="2" align-self="center">
				<p>and more...</p>
			</b-col>
		</b-row>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
			images: [
				{
					name: 'vue-9.svg',
					alt: 'VueJS'
				},
				{
					name: 'react.png',
					alt: 'React'
				},
				{
					name: 'sass.png',
					alt: 'SASS, SCSS'
				},
				{
					name: 'es6.png',
					alt: 'ES6'
				},
				{
					name: 'github.png',
					alt: 'git & github'
				},
				{
					name: 'html.webp',
					alt: 'HTML, HTML5',
				},
				{
					name: 'lambda.png',
					alt: 'AWS Lambda'
				},
				{
					name: 'php.png',
					alt: 'PHP',
				},
				{ 
					name: 'aws.png',
					alt: 'AWS'
				},
				{
					name: 'creativecloud.jpg',
					alt: 'Creative Cloud'
				},
				{
					name:'css.png',
					alt: 'CSS'
				},
				{
					name: 'dynamodb.png',
					alt: 'DynamoDB'
				},
				{
					name: 'serverless.png',
					alt: 'Serverless Framework'
				},
				{
					name: 'wordpress.png',
					alt: 'Wordpress'
				}
			]
		}
		}
	}
</script>

<style lang="scss" scoped>

</style>