<template>
	<div class="has-background-dark">
		<div class="container is-fullhd">
			<div class="column text-center title has-text-white">
				<h2>Tech I use</h2>
				<hr class="white" />
			</div>
		</div>
		<div class="container is-fullhd">
			<div class="columns is-multiline is-vcentered has-text-centered">
				<div class="column is-one-fifth has-text-white" :key="i.name" v-for="i in images">
					<img :alt="i.alt" :src="'/images/logos/' + i.name" class="bg-dark"/>
					<p>{{ i.alt }}</p>
				</div>
				<div class="column is-one-fifth has-text-white">
					<p>and more...</p>
				</div>
			</div>
		</div>
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
					name: 'react.webp',
					alt: 'React'
				},
				{
					name: 'sass.webp',
					alt: 'SASS, SCSS'
				},
				{
					name: 'es6.webp',
					alt: 'ES6'
				},
				{
					name: 'github.webp',
					alt: 'git & github'
				},
				{
					name: 'html.webp',
					alt: 'HTML, HTML5',
				},
				{
					name: 'lambda.webp',
					alt: 'AWS Lambda'
				},
				{
					name: 'php.webp',
					alt: 'PHP',
				},
				{ 
					name: 'aws.webp',
					alt: 'AWS'
				},
				{
					name: 'creativecloud.webp',
					alt: 'Creative Cloud'
				},
				{
					name:'css.webp',
					alt: 'CSS'
				},
				{
					name: 'dynamodb.webp',
					alt: 'DynamoDB'
				},
				{
					name: 'serverless.webp',
					alt: 'Serverless Framework'
				},
				{
					name: 'wordpress.webp',
					alt: 'Wordpress'
				}
			]
		}
		}
	}
</script>

<style lang="scss" scoped>
.img {
 margin-bottom: 10px;
}
.column {
	margin-bottom: 20px;
	padding: 40px;
	p {
		margin-bottom: 40px;
	}
}
</style>