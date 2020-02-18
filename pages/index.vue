<template>
  <div>
    <Hero
      title="David Crandall"
      subtitle="i drink and i make things work"
      backgroundImg="/images/side-pic.jpg"
      backgroundColor="black"
      cta="Connect On LinkedIn"
      ctaurl="https://www.linkedin.com/in/david-crandall-a3235033/"
      ctatarget="_blank"
      ctavariant="primary"
    />

    <!--Intro section -->
    <section id="intro" class="text-section bg-black text-white">
      <b-container>
        <b-row>
          <b-col md="8" xs="12" offset-md="2" offset-xs="0" align-self="center">
            <h2>well hello there</h2>
            <p>
              My name is David Crandall, and I am a software engineer, web
              developer, engineering manager, photographer, drummer, bassist,
              anime fan, film lover, and a whole bunch of things you probably
              don't care about.
            </p>
            <p>
              Just so ya know, this site is actively under construction.
              <a
                href="https://github.com/davidcrandall99/my-website/issues"
                target="_blank"
                rel="noopener"
              >Click here</a>
              to report any bugs or issues you may have on Github.
            </p>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section id="posts">
      <b-container fluid>
        <b-row>
          <b-col cols="12" class="text-center">
            <h2>Recent posts</h2>
          </b-col>
        </b-row>
        <RecentPosts />
      </b-container>
    </section>

    <section id="tech" class="bg-dark text-light">
      <b-container >
        <TechLogos />
      </b-container>
    </section>

    <!-- tech stack -->
    <!-- <section class="bg-dark text-light text-section">
      <b-container>
        <b-row>
          <b-col md="4" xs="12" offset-md="2" offset-xs="0">
            <b-list-group class="text-dark">
              <b-list-group-item>React</b-list-group-item>
              <b-list-group-item variant="success">VueJS</b-list-group-item>
              <b-list-group-item>TypeScript</b-list-group-item>
              <b-list-group-item variant="success">AWS</b-list-group-item>
              <b-list-group-item variant="success">CI/CD</b-list-group-item>
              <b-list-group-item variant="success">ExpressJS</b-list-group-item>
              <b-list-group-item>Electron</b-list-group-item>
              <b-list-group-item variant="success">ES6</b-list-group-item>
              <b-list-group-item variant="success">SASS/SCSS/CSS</b-list-group-item>
              <b-list-group-item>Serverless</b-list-group-item>
              <b-list-group-item>PHP gets no luv :(</b-list-group-item>
              <b-list-group-item variant="success">Jest</b-list-group-item>
              <b-list-group-item>More and more every day...</b-list-group-item>
            </b-list-group>
          </b-col>
          <b-col align-self="center" md="6" xs="12">
            <h2>my stack</h2>
            <p>
              I have worked with many technologies, applications, frameworks,
              and architectures. Every day, I make it a point to learn something
              new.
            </p>
            <p>
              These are just
              <em>some</em> of the things I've worked with.
            </p>
            <hr class="border-light" />
            <p>
              This website alone uses the highlighted technologies. Be sure to
              checkout the
              <a
                href="https://github.com/davidcrandall99/my-website"
                target="_blank"
                rel="noopener"
              >github repo</a>
              to see how it all works.
            </p>
          </b-col>
        </b-row>
      </b-container>
    </section> -->
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
#posts {
  z-index: 99;
  background: white;
}
#intro {
  z-index: 99;
}
</style>
