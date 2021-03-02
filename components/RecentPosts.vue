<template>
  <div id="posts">
    <div class="container is-fullhd">
      <div class="columns is-multiline is-vcentered is-centered">
        <div class="column is-one-fifth-desktop is-4-tablet" :key="index" v-for="(item, index) in manifest">
        <nuxt-link :to="item.uri" class="text-dark" :aria-label="item.title">
          <div class="card">
            <div class="card-content">
              <div class="card-image" v-if="item.image !== false" :style="`background: url(${ item.image }); background-position: center center; background-size: cover;`">
              </div>
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
.card-image{
  height: 120px;
  width: calc(100% + 80px);
  margin-left: -40px;
  margin-top: -40px;
  margin-bottom: 15px;
  display: block;
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
