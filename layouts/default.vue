<template>
  <div>
      <Nav />
    <nuxt />
    <gdpr />
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>

<script>
import Gdpr from '~/components/Gdpr.vue';
import Nav from "~/components/Nav";

let path = (path) => {
  if (path.lastIndexOf('/') === path.length-1) {
    return path;
  }
  return path + '/';
}

export default {
  components: {
    Nav,
    Gdpr
  },
  transition: "default",
  head() {

    if(this.$route.path.indexOf('/amp') === -1) {
      return {
        link: [
          {
            "rel" : "canonical",
            "href": "https://davidcrandall.com" + path(this.$route.path)
          }
        ]
      }
    }
  }
}
</script>