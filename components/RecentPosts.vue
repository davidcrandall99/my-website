<template>
  <div id="posts">

      <div class="columns is-multiline is-vcentered is-centered">
        <div class="column is-4-desktop is-4-tablet" :key="index" v-for="(item, index) in manifest">
        <nuxt-link :to="item.uri + '/'" class="text-dark" :aria-label="item.title">
          <div class="card">
            <div class="card-content">
              <div class="card-image" v-if="item.image !== false" :style="`background: url(${ item.image }); background-position: center center; background-size: cover;`">
              </div>
              <h3>{{item.title}}</h3>
              <hr/>
              <p class="has-text-black">{{ item.summary }}</p>
            </div>
          </div>
        </nuxt-link>
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
  }, beforeMount() {
    if(this.manifest.length === 10) {
      this.manifest.pop(this.manifest.length)
    }
  }
};
</script>

<style lang="scss" scoped>

#posts {
  padding: 35px;
}
.card-image{
  height: 30vh;
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
