<template>
  <div id="album">
    <div class="titlecard" v-on:click="toggleActive">
      <img v-if="albumData.albumArt" :src="albumData.albumArt" :alt="albumData.title" />
      <div class="overlay">
        <p>{{ albumData.title }}</p>
      </div>
    </div>
    <AlbumOverlay :albumData="albumData" v-if="overlayActive" :closeMethod="makeInactive" />
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