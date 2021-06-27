<template>
  <div>
    <Hero
      title="I drink, and I make things"
      subtitle="Welcome to my website and blog, where I write about music, gardening, web development, and everything inbetween."
      backgroundImg="/images/side-pic.webp"
      backgroundColor="black"
      cta="Check out my blog"
      ctatarget="_self"
      ctavariant="is-primary"
      nuxtlink="/blog/"
    />

    <!--Intro section -->
    <slanted-section id="intro" class="text-section has-background-black has-text-white">
      <div>
        <div class="container is-fullhd">
          <div class="column">
            <h2 class="title has-text-white">well hello there</h2>
            <p>
              My name is David Crandall, and I am a software engineer, web
              developer, engineering manager, photographer, drummer, bassist,
              anime fan, film lover, and a whole bunch of things you probably
              don't care about.
            </p>
            <p>
              I'm constantly working and updating this website as I have time, and its entire codebase is <a href="https://github.com/davidcrandall99/my-website/" target="_blank" rel="noopener">available on Github.</a>
              If you discover a bug, go ahead and <a
                href="https://github.com/davidcrandall99/my-website/issues"
                target="_blank"
                rel="noopener"
              >let me know.</a>
            </p>
          </div>
       </div>
      </div>
    </slanted-section>
    <section id="posts-section">
      <div>
        <div class="container is-fluid">
          <div class="column has-text-centered">
            <h2 class="title">Recent posts</h2>
          </div>
       </div>
        <RecentPosts />
      </div>
    </section>

    <section id="tech" class="has-background-dark text-light text-section">
      <div >
        <TechLogos />
      </div>
    </section>
  </div>
</template>

<script>
import Hero from "~/components/Hero.vue";
import RecentPosts from "~/components/RecentPosts";
import TechLogos from "~/components/TechLogos";
export default {
  components: {
    Hero,
    RecentPosts,
    TechLogos
  },
  head() {
    return {
      title: 'David Crandall | Official Website and Blog',
      script: [
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
  },
};
</script>

<style lang="scss" scoped>
#posts-section {
  background: white;
}
#intro {
  padding-bottom: 150px;
}
</style>
