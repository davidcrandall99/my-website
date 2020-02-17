<template>
  <div>
    <h1>Recent Posts</h1>
    <div :key="i" v-for="i in manifest">
    <nuxt-link :to="`/blog/${i.url}`">Click this</nuxt-link>
    </div>
  </div>
</template>

<script>
import { manifest } from "@/assets/manifest.js";
console.log(manifest)
let postURI = [];
for (var i = 0; i in manifest; i++) {
  let num = i.toString;
  postURI.push(`/blog/${manifest[i].url}`);
}

export default {
    data() {
        return {
            uris: postURI,
            manifest: manifest
        }
    }
};
</script>

<style lang="scss" scoped></style>
