<template>
  <div>
    <h1>Recent Posts</h1>
    <div :key="index" v-for="(item, index) in manifest">
    <nuxt-link :to="item.uri">{{ item.meta.data.title }}</nuxt-link>
    </div>
  </div>
</template>

<script>
import { manifest } from "@/assets/manifest.js";


export default {
    data() {
        return {
            manifest: manifest
        }
    }
};
</script>

<style lang="scss" scoped></style>
