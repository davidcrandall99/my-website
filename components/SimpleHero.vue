<template>
  <div>
    <slanted-section class="hero has-background-dark has-text-white" :style="`background-image: url(${ bgImage });`">
      <div class="overlay"></div>
      
      <div v-if="title" class="container is-flex">
        <div class="columns is-mobile is-vcentered is-centered is-full">
          <div class="column has-text-centered is-full">
            <h1 class="title is-1 has-text-white has-text-centered">{{ title }}</h1>
          </div>
        </div>
      </div>
      <div class="o" v-else>
        <slot></slot>
      </div>
    </slanted-section>
  </div>
</template>

<script>
import { gsap } from "gsap";
export default {
    props: ['title','bgImage'],
    mounted() {
      let tl = gsap.timeline();
  
      tl.from('.hero .columns *, .hero h1', {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: .25,
        ease: "power3.out"
      })
    },
};
</script>

<style lang="scss" scoped>
.hero {
  background-size: cover;
  background-position: top center;
  background-attachment: fixed;
  position: relative;
  height: 100vh;
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
.o {
  z-index: 2;
}
</style>