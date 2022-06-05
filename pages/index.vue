<template>
  <div>
    <Hero
      title="Hello! My name is David"
      subtitle="I am a Bay Area creative specializing in photography, web development, and design. I am a huge fan of anime and cosplay, and enjoy making music."
      backgroundImg="/images/side-pic.webp"
      backgroundColor="black"
    />

    <!--Intro section -->
    <slanted-section id="intro" class="text-section has-background-black has-text-white">
      <div>
        <div class="container is-fullhd">
          <div class="column">
            <h2 class="title has-text-white">Photography</h2>
            <p>I am a photographer located in the San Jose Bay Area. I do all sorts of photography, <br/> from themed shoots, cosplay, model sets, to events.</p>
            <p>Check out some of my work below!</p>
          </div>
        <photo-album-list />
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
  </div>
</template>

<script>
import Hero from "~/components/Hero.vue";
import PhotoAlbumList from '~/components/PhotoAlbumList.vue';
import RecentPosts from "~/components/RecentPosts";
import TechLogos from "~/components/TechLogos";
export default {
  components: {
    Hero,
    RecentPosts,
    TechLogos,
    PhotoAlbumList
  },
  head() {
    return {
      title: 'David Crandall | Official Website and Blog',
      meta: [
        {
          hid: "og:image",
          property: "og:image",
          content: "https://davidcrandall.com/images/side-pic.webp",
        },
      ],
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
#tech {
  overflow-x: hidden;
}
</style>
