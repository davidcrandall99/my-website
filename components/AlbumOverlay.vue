<template>
  <div id="overlay" class="has-background-dark">
    <div v-if="closeMethod" class="closebtn" v-on:click="closeMethod"><p>CLOSE</p></div>
    <div
      class="bgimg"
      :style="`background-image: url('${albumData.albumArt}')`"
    ></div>
    <div class="content">
      <img class="albumcover" v-if="albumData.albumArt" :src="albumData.albumArt" :alt="albumData.title" />

      <div class="intro has-background-black has-text-white">
        <p>
          Listen to {{ albumData.title }} on your favorite streaming platform!
        </p>
      </div>

      <div class="itemlink has-background-white" v-if="albumData.spotifyUrl">
        <img class="icon" src="/images/music/spotify.png" />
        <a :href="albumData.spotifyUrl" target="_blank">Listen on Spotify</a>
      </div>

      <div class="itemlink has-background-white" v-if="albumData.appleMusicUrl">
        <img class="icon" src="/images/music/itunes.svg" />
        <a :href="albumData.spotifyUrl" target="_blank"
          >Listen on Apple Music</a
        >
      </div>

      <div
        class="itemlink has-background-white"
        v-if="albumData.youtubeMusicUrl"
      >
        <img class="icon" src="/images/music/youtube.png" />
        <a :href="albumData.spotifyUrl" target="_blank"
          >Listen on YouTube Music</a
        >
      </div>

      <div class="itemlink has-background-white" v-if="albumData.pandoraUrl">
        <img class="icon" src="/images/music/pandora.png" />
        <a :href="albumData.spotifyUrl" target="_blank">Listen on Pandora</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ["albumData", "closeMethod"]
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
    overflow: scroll;
    .closebtn {
      background-color: black;
      position: absolute;
      right: 0;
      top: 0;
      height: 70px;
      width: 70px;
      cursor: pointer;
      color: white;
      display: flex;
      align-items: center;
      p {
        font-size: .8rem;
        text-align: center;
        margin: 0;
        width: 100%;
        font-weight: bold;
      }
      &:hover p {
          text-decoration: underline;
      }
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
</style>