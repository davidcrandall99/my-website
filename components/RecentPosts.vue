<template>
  <div id="posts">
    <b-row align-v="center">
      <b-card-group columns>
        <nuxt-link :key="index" v-for="(item, index) in manifest" :to="item.uri" class="text-dark" :aria-label="item.title">
          <b-card :title="item.title" tag="article">
            <p>{{ item.summary }}</p>
          </b-card>
        </nuxt-link>
      </b-card-group>
    </b-row>
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
