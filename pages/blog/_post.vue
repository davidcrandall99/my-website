<template>
  <div id="single">
    <section class="hero has-background-dark has-text-white">
      <div>
        <div class="container is-fullhd">
          <div class="column meta">
            <h1 class="title is-1 has-text-white" :if="attributes.title">{{ attributes.title }}</h1>
            <p>
              <span :if="attributes.date">Published {{ attributes.date }}</span>
              <br :if="attributes.date" />
              Author: David Crandall
            </p>
            <nuxt-link class="button is-primary" to="/">Back home</nuxt-link>
          </div>
       </div>
      </div>
    </section>
    <section id="post">
      <div>
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-8">
              <component :is="selectedArticle" />
            </div>
          </div>
       </div>
      </div>
    </section>
    <section id="comments" class="bg-dark">
      <div>
        <div class="container">
          <div class="column text-light">
            <h2>Leave a comment</h2>
            <hr class="border-primary"/>
          </div>
       </div>
        <div class="container">
          <div class="column">
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
import VueMeta from 'vue-meta'
Vue.use(VueDisqus);
Vue.use(VueMeta);

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
    title: `${this.attributes.title ? this.attributes.title + ' | ' : ''}David Crandall`,
    meta: [
      {
        hid: 'og:image',
        property: 'og:image',
        content: this.attributes.image
      },
      {
        hid: 'description',
        name: 'description',
        content: this.attributes.summary
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: this.attributes.summary
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: this.attributes.title
      }
    ]
    }
  }
};
</script>
<style lang="scss">

    #single {
    .hero {
      padding: 40px 0;
      margin-bottom:40px;
      position: relative;
    }
    h1,h2,h3{
      margin: 40px 0 10px 0;
    }
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 2rem;
    }
    h3 {
      font-size: 1.7rem;
    }
    p {
      margin-bottom: 24px;
    }
    img {
      max-width: 100%;
      margin: 10px 0;
    }
    padding-bottom: 40px;
  
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
  .button {
    margin-top: 20px;
  }
}
</style>