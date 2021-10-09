<template>
  <div id="album">
    <div class="titlecard" v-on:click="toggleActive">
      <img v-if="albumData.albumArt" :src="albumData.albumArt" :alt="albumData.title" />
      <div class="overlay">
        <p>{{ albumData.title }}</p>
      </div>
    </div>
    <div v-if="overlayActive" id="overlay" class="has-background-dark">
      <div class="closebtn" v-on:click="makeInactive">
      </div>
      <div class="bgimg" :style="`background-image: url('${albumData.albumArt}')`">
      </div>
      <div class="content">
        <img class="albumcover" v-if="albumData.albumArt" :src="albumData.albumArt" :alt="albumData.title" />

        <div class="intro has-background-black has-text-white">
          <p>Listen to {{ albumData.title }} on your favorite streaming platform!</p>
        </div>

        <div class="itemlink has-background-white" v-if="albumData.spotifyUrl">
          <img class="icon" src="/images/music/spotify.png" />
          <a :href="albumData.spotifyUrl" target="_blank">Listen on Spotify</a>
        </div>

        <div class="itemlink has-background-white" v-if="albumData.appleMusicUrl">
          <img class="icon" src="/images/music/itunes.svg" />
          <a :href="albumData.spotifyUrl" target="_blank">Listen on Apple Music</a>
        </div>

        <div class="itemlink has-background-white" v-if="albumData.youtubeMusicUrl">
          <img class="icon" src="/images/music/youtube.png" />
          <a :href="albumData.spotifyUrl" target="_blank">Listen on YouTube Music</a>
        </div>

        <div class="itemlink has-background-white" v-if="albumData.pandoraUrl">
          <img class="icon" src="/images/music/pandora.png" />
          <a :href="albumData.spotifyUrl" target="_blank">Listen on Pandora</a>
        </div>

      </div>
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
    },
    makeActive: function() {
      this.overlayActive = true;
    },
    makeInactive: function() {
      this.overlayActive = false;
    }
  },
};
</script>

<style lang="scss" scoped>
  #overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    padding: 20px;
    padding-top: 100px;
    width: 100%;
    height: 100%;
    text-align: center;
    .closebtn {
      background-color: black;
      position: absolute;
      right: 0;
      top: 0;
      height: 50px;
      width: 50px;
      cursor: pointer;
    }
    .bgimg {
      filter: blur(30px);
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      z-index: -1;
      text-align: center;
      position:fixed;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
    }
    .content {
      width: 320px;
      margin: 0 auto;
    }
    .intro {
      padding: 30px;
      font-size: .9rem;
      width: 100%;
      p {
        margin: 0;
      }
    }
    .itemlink {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 20px;
      border-bottom: 1px solid rgba(0,0,0,0.2);
      .icon {
        width: 45px;
        height: auto;
      }
      a {
        padding: 10px;
        border: 1px solid rgba(0,0,0,0.2);
        border-radius: 4px;
        font-size: .8rem;
      }
    }
    .albumcover {
      width: 100%;
      margin-bottom: -10px;
    }
  }
  .titlecard  {
    position: relative;
    cursor: pointer;
    padding: 2%;
    box-sizing: border-box;
    img {
      width: 99%;
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