<template>
  <div id="posts">
    <b-row align-v="center">
      <b-card-group columns>
        <nuxt-link :key="index" v-for="(item, index) in manifest" :to="item.uri" class="text-dark">
          <b-card :title="item.meta.data.title" tag="article">
            <p>{{ item.meta.data.summary }}</p>
          </b-card>
        </nuxt-link>
      </b-card-group>
    </b-row>
  </div>
</template>

<script>
import { manifest } from "@/assets/manifest.js";

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
