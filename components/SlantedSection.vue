<template>
  <section :style="bgImage ? `background-image: url(${bgImage}` : ''">
    <slot></slot>
  </section>
</template>

<script>
export default {
    props: ['bgColor', 'bgImage']
};
</script>

<style lang="scss" scoped>
section {
  padding-bottom: 100px;
  margin-bottom: -50px;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 100px));
}
</style>