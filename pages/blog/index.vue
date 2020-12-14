<template>
  <div>
    <section class="hero has-background-dark has-text-white">
		<div class="container is-fluid is-mobile">
			<div class="columns is-vcentered is-mobile">
				<div class="column meta is-full">
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
.hero {
  height: 340px;
}
.columns {
	height: 100%;
}
</style>
