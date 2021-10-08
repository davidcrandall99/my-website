<template>
  <div id="album">
    <div class="titlecard" v-on:click="toggleActive">
      <img v-if="albumData.albumArt" :src="albumData.albumArt" :alt="albumData.title" />
      <div class="overlay">
        <p>{{ albumData.title }}</p>
      </div>
    </div>
    <div v-if="overlayActive" id="overlay" class="has-background-dark has-text-white">
        <h2>{{ albumData.title }}</h2>
        <img class="albumcover" v-if="albumData.albumArt" :src="albumData.albumArt" :alt="albumData.title" />
        <p v-if="albumData.spotifyUrl">
          <a :href="albumData.spotifyUrl" target="_blank">
          <img class="icon" src="/images/music/spotify.png" /><br/>
          Listen on Spotify
          </a>
        </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["albumData"],
  data() {
    return {
      overlayActive: false
    }
  },
  methods: {
    toggleActive: function() {
      this.overlayActive = !this.overlayActive
    }
  },
};
</script>

<style lang="scss" scoped>
  #overlay {
    position: fixed;
    top: 10vh;
    left: 0;
    z-index: 99;
    padding: 20px;
    padding-top: 100px;
    width: auto;
    height: 80vh;
    .albumcover {
      margin: 20px auto;
      width: 35vw;
      max-width: 200px;
    }
    .icon {
      width: 75px;
      height: auto;
    }
  }
  .titlecard  {
    position: relative;
    cursor: pointer;
    img {
      width: 100%;
    }
    .overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: rgba(255,255,255,0.0);
      transition: all 0.25s ease-in-out;
    }
    p {
      font-family: "Nixie One", sans-serif;
      position: absolute;
      text-align: center;
      width: 100%;
      top: 50%;
      opacity: 0;
      font-weight: bold;
      text-transform: uppercase;
      transition: all 0.25s ease-in-out;
    } 
    &:hover {
      .overlay{
        background: rgba(255,255,255,0.7);
      }
      p {
        opacity: 1;
        top: 45%;
      }
    }
  }
</style>