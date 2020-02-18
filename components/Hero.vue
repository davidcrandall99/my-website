<template>
  <div>
    <vue-particles
      class="particles"
      color="#dddddd"
      :particlesNumber="100"
      :particle-opacity="0.5"
      shapeType="polygon"
      :lineLinked="true"
      :line-opacity="0.2"
      linesColor="#a3a3a3"
      :particleSize="1"
      :moveSpeed="2"
      hovermode="repulse"
      

      >
      </vue-particles>
    <div id="hero">
      <div
        :style="
        `background-image:url(${backgroundImg}); 
        background-color: ${backgroundColor};`
      "
        id="bg"
      ></div>
      <div class="cover"></div>
      <b-container class="content">
          <b-row>
            <b-col>
              <h1 :if="title" v-html="title"></h1>
              <p :if="subtitle" v-html="subtitle"></p>
              <b-button :if="cta"
                :variant="ctavariant"
                :href="ctaurl"
                :target="ctatarget"
              >{{cta}}</b-button>
            </b-col>
          </b-row>
        </b-container>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  background-size: cover;
  background-position: right top;
  background-repeat: no-repeat;
  background-color: black;
  position: relative;
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
.particles {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 2;
}
.content {
  z-index: 3;
}
section * {
  z-index: 99;
}
</style>
