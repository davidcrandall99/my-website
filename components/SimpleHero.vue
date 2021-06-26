<template>
  <div>
    <section class="hero has-background-dark has-text-white">
      <div class="overlay"></div>
      <div class="container is-flex">
        <div class="columns is-mobile is-vcentered is-centered is-full">
          <div class="column has-text-centered is-full">
            <h1 class="title is-1 has-text-white has-text-centered">{{ title }}</h1>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
    props: ['title']
};
</script>

<style lang="scss" scoped>
.hero {
  background-size: cover;
  background-position: center;
  position: relative;
  height: 75vh;
  .overlay {
    width: 100vw;
    height: 100%;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
  }
}
</style>