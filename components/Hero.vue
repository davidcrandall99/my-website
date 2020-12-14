<template>
  <div>
    <div id="hero">
      <div
        :style="
        `background-image:url(${backgroundImg}); 
        background-color: ${backgroundColor};`"
        id="bg"
      ></div>
      <div class="cover"></div>
      <div class="content container">
          <div class="columns is-vcentered is-mobile">
            <div class="column is-full">
              <h1 :if="title" v-html="title"></h1>
              <p :if="subtitle" v-html="subtitle"></p>
              <a :class="'button ' + ctavariant" :if="cta"
                :href="ctaurl"
                :target="ctatarget"
              >{{cta}}</a>
            </div>
         </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "backgroundImg", "backgroundColor", "subtitle", "cta", "ctaurl","ctatarget","ctavariant"]
};
</script>

<style lang="scss" scoped>
#hero {
  height: 100vh;
  width: 100vw;
  background: black;
  padding: 20px;
  background-size: cover;
  background-position: right top;
  background-repeat: no-repeat;
  background-color: black;
  position: relative;
  .columns {
    height: 100%;
  }
  #bg {
    filter: grayscale(100%);
    background: black;
    background-size: cover;
    background-position: right top;
    background-repeat: no-repeat;
    background-color: black;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index:0;
  }
  h1 {
    text-transform: lowercase;
    color: white;
    letter-spacing: 0.5px;
    max-width: 50%;
    flex: none;
  }
  p {
    color: rgba(255, 255, 255, 0.8);
  }
  .cover {
    background: rgba(0, 0, 0, 0.3);
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    left: 0;
    top: 0;
    z-index:1;
  }
}
.content {
  height: 100%;
  z-index: 3;
}
section * {
  z-index: 99;
}
</style>
