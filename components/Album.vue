<template>
  <div>
    <div class="titlecard">
      <p>{{ albumData.title }}</p>
      <img v-if="albumData.albumArt" :src="albumData.albumArt" :alt="albumData.title" />
      <p>{{ albumData.released }}</p>
    </div>
    <ol>
      <li v-for="(song, index) in albumData.songsCollection.items" :key="index">
        <span class="songtitle">{{ song.title }}</span>
        <span class="duration">{{ song.duration }}</span>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  props: ["albumData"],
};
</script>

<style lang="scss" scoped>
</style>