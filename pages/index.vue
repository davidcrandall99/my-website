<template>
  <div>
    <Hero
      title="David Crandall"
      subtitle="i drink and i make things work"
      backgroundImg="/images/side-pic.webp"
      backgroundColor="black"
      cta="Connect On LinkedIn"
      ctaurl="https://www.linkedin.com/in/david-crandall-a3235033/"
      ctatarget="_blank"
      ctavariant="primary"
    />

    <!--Intro section -->
    <section id="intro" class="text-section bg-black text-white">
      <div>
        <div class="row">
          <div class="column" md="8" xs="12" offset-md="2" offset-xs="0">
            <h2>well hello there</h2>
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
    </section>
    <section id="posts-section">
      <div>
        <div class="row" align-v="center">
          <div class="column" cols="12" class="text-center">
            <h2>Recent posts</h2>
          </div>
       </div>
        <RecentPosts />
      </div>
    </section>

    <section id="tech" class="bg-dark text-light text-section">
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
  }
};
</script>

<style lang="scss" scoped>
section {
  position: relative;
  padding: 40px 0;
  &.text-section {
    padding: 80px 0;
  }
  &.bg-black {
    background-color: #010101;
  }
}
#tech {
  * {
    z-index: 99;
  }
}
#posts-section {
  z-index: 99;
  background: white;
}
#intro {
  z-index: 99;
}
</style>
