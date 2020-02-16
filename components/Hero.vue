<template>
  <div>
    <div
      id="hero"
      :style="
        `background-image:url(${backgroundImg}); 
        background-color: ${backgroundColor};`
      "
    >
      <div class="cover">
        <b-container>
          <b-row>
            <b-col>
              <h1 v-html="title">David Crandall</h1>
              <p v-html="subtitle">i drink, and i make things</p>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "backgroundImg", "backgroundColor", "subtitle"]
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
  filter: grayscale(100%);
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
    background: rgba(0, 0, 0, 0.4);
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    left:0;
    top:0;
  }
}
</style>
