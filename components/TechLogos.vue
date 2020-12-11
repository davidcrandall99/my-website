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
					name: 'creativecloud.png',
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