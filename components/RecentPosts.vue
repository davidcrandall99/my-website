<template>
  <div>
    <h1>Recent Posts</h1>
    {{ uris[0] }}
  </div>
</template>

<script>
import { manifest } from "@/assets/manifest.js";
let postURI = [];
for (var i = 0; i in manifest; i++) {
  let num = i.toString;
  postURI.push(`/blog/${manifest[i].url}`);
}

export default {
    data() {
        return {
            uris: postURI
        }
    }
};
</script>

<style lang="scss" scoped></style>
