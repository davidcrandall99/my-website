<template>
  <p v-if="$fetchState.pending">Loading...</p>
  <p v-else-if="$fetchState.error">An error occurred :(</p>
  <div v-else>
    <simple-hero :title="photos.title" :bgImage="photos.photos[0].lg" />
    <slanted-section>
      <div class="gallery">
        <div class="photo" :key="index" v-for="(photo, index) in photos.photos">
          <img :src="photo.med" :alt="photo.title" />
        </div>
      </div>
    </slanted-section>
    <nuxt-link class="goback" to="/photography/" alt="go back"
      >Go back</nuxt-link
    >
    <section id="bottom" class="bg-dark">
      <div>
        <h2>That's all, folks!</h2>
        <p>
          If you're interested in booking a photoshoot, email me at
          <a class="link" href="mailto:david@davidcrandall.com"
            >david@davidcrandall.com</a
          >
        </p>
        <nuxt-link class="button is-primary" to="/photography/"
          >See more photos</nuxt-link
        >
      </div>
    </section>
  </div>
</template>

<script>
import SimpleHero from "~/components/SimpleHero.vue";
import SlantedSection from "~/components/SlantedSection.vue";
import { gsap } from "gsap";
export default {
  components: { SimpleHero, SlantedSection },
  head() {
      return {
          title: this.photos.title + ' | Photography by David Crandall',
          meta: [
            {
              hid: 'description',
              name: 'description',
              content: `Photo Album: ${this.photos.title}. All photography and editing by David Crandall.`
            },
            {
              hid: 'og:description',
              property: 'og:description',
              content: `Photo Album: ${this.photos.title}. All photography and editing by David Crandall.`
            },
            {
              hid: 'og:title',
              property: 'og:title',
              content: this.photos.title
            }
          ],
          script:[
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
              "name"      : "David Crandall Photography",
              "mainEntityOfPage": `https://davidcrandall.com`
              } 
          }
          ]
      }
    },
  data() {
    return {
      id: this.$route.params.id,
      photos: {},
    };
  },
  async fetch() {
    this.photos = await fetch(
      `https://davidcrandall.com/api/photoset/${this.id}`
    )
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
  },
  mounted(){
    this.$nextTick(() => {
      var interval = setInterval(() => {
      if (this.$fetchState.pending === false) {
        this.mountAnimation()
        clearInterval(interval)
      }
      }, 100);
    })
  },
  methods: {
    mountAnimation() {
      var ScrollTrigger = require("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      console.log('scrollTrigger')
      //animate photos in on scroll
      var photos = gsap.utils.toArray(".photo");
      photos.forEach((photo) => {
        var tl = gsap.timeline();
        tl.restart()
        tl.fromTo(
          photo,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            scrollTrigger: {
              trigger: photo,
              start: "top 670px",
              end: "top 100px",
              scrub: true,
            },
            stagger: 0.25,
          }
        );
      });

      //animate bottom stuff
      gsap.from("#bottom div *:not(a.link)", {
        opacity: 0,
        y: 100,
        stagger: 0.5,
        scrollTrigger: {
          trigger: "#bottom",
          start: "top 600px",
          end: "top top",
          scrub: true,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.goback {
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 100px;
  height: 100px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 50px;
  padding: 25px;
  color: white;
  text-align: center;
}
.gallery {
  column-count: 1;

  @media (min-width: 600px) {
    column-count: 2;
  }
  @media (min-width: 1000px) {
    column-count: 4;
  }

  .photo {
    display: grid;
    grid-template-rows: 1fr auto;
    margin-bottom: 10px;
    break-inside: avoid;
    img {
      width: 100%;
      display: block;
      grid-row: 1 / -1;
      grid-column: 1;
    }
  }
}
#bottom {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    text-align: center;
    * {
      margin: 20px 0;
    }
  }
}
</style>