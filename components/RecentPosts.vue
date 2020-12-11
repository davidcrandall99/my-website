<template>
  <div id="posts">
    <div class="container is-fullhd">
      <div class="columns is-multiline is-vcentered is-centered">
        <div class="column is-one-fifth-desktop is-4-tablet" :key="index" v-for="(item, index) in manifest">
        <nuxt-link :to="item.uri" class="text-dark" :aria-label="item.title">
          <div class="card">
            <div class="card-content">
              <h3 class="title is-5">{{item.title}}</h3>
              <hr/>
              <p class="has-text-black">{{ item.summary }}</p>
            </div>
          </div>
        </nuxt-link>
        </div>
      </div>
   </div>
  </div>
</template>

<script>
import { manifest } from "@/assets/manifest-0.js";

export default {
  data() {
    return {
      manifest: manifest
    };
  }
};
</script>

<style lang="scss" scoped>

#posts {
  padding: 40px 0;
}
@media (min-width: 1024px) {
  .card {
    opacity: 0.6;
    transition: opacity 0.25s ease-in-out;
  }
  .card:hover {
    opacity: 1;
  }
}
</style>
