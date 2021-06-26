<template>
  <div>
    <slanted-section class="hero has-background-dark has-text-white">
      <div class="overlay"></div>
		<div class="container is-flex">
			<div class="columns is-mobile is-vcentered is-centered is-full">
				<div class="column has-text-centered is-full">
					<h1 class="title is-1 has-text-white has-text-centered">Blog</h1>
				</div>
			</div>
		</div>
    </slanted-section>
    <section>
      <AllPosts />
    </section>
  </div>
</template>
<style lang="scss" scoped>
.hero {
  background-image: url('/images/bloghero.jpeg');
  background-size: cover;
  background-position: center;
  position: relative;
  height: 75vh;
  .overlay {
    width: 100vw;
    height: 100%;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
  }
}
</style>
<script>

export default {
  head() {
    return{
      title: 'Blog | David Crandall',
      script:[
        { 
          type: 'application/ld+json', 
          json: {
            "@context"  : "http://schema.org",
            "@type"     : "Blog",
            "headline"  : "David Crandall's Blog",
            "author"    : "David Crandall",
            "mainEntityOfPage": `https://davidcrandall.com/blog/`
          } 
        },
        { 
        type: 'application/ld+json', 
        json: {
          "@context"  : "http://schema.org",
          "@type"     : "Person",
          "name"      : "David Crandall",
          "mainEntityOfPage": `https://davidcrandall.com`
        } 
      },{ 
        type: 'application/ld+json', 
        json: {
          "@context"  : "http://schema.org",
          "@type"     : "Brand",
          "name"      : "David Crandall",
          "mainEntityOfPage": `https://davidcrandall.com`
        } 
      }
      ]
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
