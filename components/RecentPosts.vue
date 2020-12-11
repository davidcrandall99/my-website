<template>
  <div id="posts">
    <div class="row">
      <div class="card-group">
        <nuxt-link :key="index" v-for="(item, index) in manifest" :to="item.uri" class="text-dark" :aria-label="item.title">
          <div class="card" tag="article">
            <h3>{{item.title}}</h3>
            <p>{{ item.summary }}</p>
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
  }
};
</script>

<style lang="scss" scoped>

#posts {
  padding: 40px 0;
}

</style>
