<template>
  <div id="posts">
    <b-row>
      <b-col :key="index" v-for="(item, index) in manifest">
        <nuxt-link :to="item.uri" class="text-dark">
          <b-card :title="item.meta.data.title" tag="article">
            <p>{{ item.meta.data.summary }}</p>
          </b-card>
        </nuxt-link>
      </b-col>
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
