<template>
  <div>
    <div id="hero">
      <h1>David Crandall</h1>
      <p>i drink, and i make things</p>
    </div>
  </div>
</template>

<script>
	export default {
		
	}
</script>

<style lang="scss" scoped>
#hero {
  height: 100vh;
  width: 100vw;
  background: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    text-transform: lowercase;
    color: white;
    text-align: center;
    font-weight: 200;
    letter-spacing: 0.5px;
    max-width: 50%;
    flex:none;
  }
  p {
    color: rgba(255,255,255,0.8);
  }
}
</style>