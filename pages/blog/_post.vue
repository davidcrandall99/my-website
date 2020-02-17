<template>
  <div>
    <section class="bg-dark hero text-light">
      <b-container>
        <b-row>
          <b-col>
            <h1 :if="attributes.title">{{ attributes.title }}</h1>
            <p>
              <span :if="attributes.date">Published {{ attributes.date }}</span>
              <br :if="attributes.date" />
              Author: David Crandall
            </p>
            <hr />
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section id="post">
      <b-container>
        <b-row>
          <b-col md="8" xs="12" offset-md="2">
            <component :is="selectedArticle" />
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import { manifest } from "@/assets/manifest.js";
let data = [];
for (var i = 0; i in manifest; i++) {
  let num = i.toString;
  data.push(manifest[i].uri.split('/blog/')[1]);
}
console.log(data);
export default {
  validate({ params }) {
    /*
      The validate method allows us to stop the rendering of a page if
      the request does not match a certain criteria. In this case,
      The criteria is if the params.post object value is contained 
      within our manifest of pages. If the pages don't exist, a
      generic 404 error will return.

      Without this, a 404 error would still be returned, however, nuxt
      will return an error explaining it cannot find a specified 
      markdown file. Further, this helps avoid XSS by validating
      the request coming in before rendering anything out on the page.
      */
    var uris = [];
    for (var i = 0; i in data; i++) {
      uris.push(data[i]);
    }
    return uris.includes(params.post);
  },
  data() {
    return {
      attributes: {},
      selectedArticle: null
    };
  },

  created() {
    const markdown = require(`~/posts/${this.$route.params.post}.md`);
    this.attributes = markdown.attributes;
    this.selectedArticle = markdown.vue.component;
  }
};
</script>
<style lang="scss">
  .hero {
    padding: 40px 0;
    margin-bottom:40px;
  }
  #post {
    img {
      max-width: 100%;
    }
  }
</style>