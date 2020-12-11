<template>
  <div>
    <section class="bg-dark hero text-light">
      <div>
        <div class="row">
          <div class="column" class="meta">
            <h1 :if="attributes.title">{{ attributes.title }}</h1>
            <p>
              <span :if="attributes.date">Published {{ attributes.date }}</span>
              <br :if="attributes.date" />
              Author: David Crandall
            </p>
            <nuxt-link to="/"><b-button variant="primary">Back home</b-button></nuxt-link>
            <hr />
          </div>
       </div>
      </div>
    </section>
    <section id="post">
      <div>
        <div class="row">
          <div class="column" md="8" xs="12" offset-md="2">
            <component :is="selectedArticle" />
          </div>
       </div>
      </div>
    </section>
    <section id="comments" class="bg-dark">
      <div>
        <div class="row">
          <div class="column" md="8" xs="12" offset-md="2" class="text-light">
            <h2>Leave a comment</h2>
            <hr class="border-primary"/>
          </div>
       </div>
        <div class="row">
          <div class="column" md="8" xs="12" offset-md="2">
            <vue-disqus shortname="davidcrandall" />
          </div>
       </div>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from 'vue';
import { manifest } from "@/assets/manifest.js";
import VueDisqus from 'vue-disqus';
Vue.use(VueDisqus);

let data = [];
for (var i = 0; i in manifest; i++) {
  let num = i.toString;
  data.push(manifest[i].uri.split('/blog/')[1]);
}

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
    const markdown = require(`~/posts/posts/${this.$route.params.post}.md`);
    this.attributes = markdown.attributes;
    this.selectedArticle = markdown.vue.component;
  },
  head() {
    return {
    title: `${this.attributes.title ? this.attributes.title + ' | ' : ''}David Crandall`
    }
  }
};
</script>
<style lang="scss">

  .hero {
    padding: 40px 0;
    margin-bottom:40px;
    position: relative;
  }
  #post {
    img {
      max-width: 100%;
    }
    padding-bottom: 40px;
  }
  .particles {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  top: 0;
  left: 0;
}
.meta a {
  z-index: 99;
  position: relative;
}
#comments {
  padding-top: 40px;
  padding-bottom: 40px;
  h2 {
    margin-bottom: 20px;
  }
}
</style>