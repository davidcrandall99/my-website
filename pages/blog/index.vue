<template>
  <div>
    <section class="hero has-background-dark has-text-white is-halfheight">
		<div class="container is-flex">
			<div class="columns is-mobile is-vcentered is-centered is-full">
				<div class="column has-text-centered is-full">
					<h1 class="title is-1 has-text-white has-text-centered">Blog</h1>
				</div>
			</div>
		</div>
    </section>
    <AllPosts />
  </div>
</template>

<script>
import AllPosts from "~/components/AllPosts";

export default {
  components: {
    AllPosts
  }
};
</script>

<style lang="scss" scoped>

</style>
