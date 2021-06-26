<template>
  <div id="single">
    <slanted-section class="hero is-fullheight has-background-dark has-text-white" :style="`background: url(${attributes.image}) center no-repeat; background-size: cover; background-blend-mode: soft-light;`">

        <div class="container is-fluid is-flex">
          <div class="columns is-mobile is-vcentered is-centered is-full">
            <div class="column is-full has-text-centered">
              <h1 class="title has-text-white" :if="attributes.title">{{ attributes.title }}</h1>
              <p>
                <span :if="attributes.date">Published {{ attributes.date }}</span>
                <br :if="attributes.date" />
                Author: David Crandall
              </p>
            </div>
          </div>
       </div>
    </slanted-section>
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
    <slanted-section id="comments">
      <div>
        <div class="container">
          <div class="column text-light">
            <h2>Leave a comment</h2>
            <hr class="border-primary"/>
          </div>
       </div>
        <div class="container">
          <div class="column">
            <vue-disqus shortname="davidcrandall" v-if="showComments" />
          </div>
       </div>
      </div>
    </slanted-section>
    <section id="bottom" class="has-background-dark hero is-halfheight has-text-white">
       <div class="container is-fluid is-flex">
         <div class="columns is-vcentered is-desktop is-mobile">
          <div class="column has-text-centered is-full">
            <h2 class="">Why stop there?</h2>
            <p>If you enjoyed this post, click the button below to read more from my blog!</p>
            <nuxt-link class="button is-primary" to="/blog/">See more posts</nuxt-link>
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
import { ISO_8601 } from 'moment';
var moment = require('moment'); // require
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
      selectedArticle: null,
      showComments: false
    };
  },
  methods: {
    handleScroll: function(event) {
      if(process.client) {
          if (localStorage.getItem("GDPR:accepted", true) === "true") {
          var comments = document.getElementById("comments");
          if(window.pageYOffset > comments.offsetTop - 1000) {
            this.showComments = true;
          }
        }
      }
    }
  },
  created() {
    const markdown = require(`~/posts/posts/${this.$route.params.post}.md`);
    this.attributes = markdown.attributes;
    this.selectedArticle = markdown.vue.component;
    // window.addEventListener('scroll', this.handleScroll);

  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll);
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
        property: 'og:description',
        content: this.attributes.summary
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: this.attributes.title
      }
    ],
    script:[
      { 
        type: 'application/ld+json', 
        json: {
          "@context"  : "http://schema.org",
          "@type"     : "Article",
          "headline"  : this.attributes.title,
          "author"    : "David Crandall",
          "datePublished": moment(this.attributes.date).format("YYYY-MM-DD"),
          "image": this.attributes.image,
          "mainEntityOfPage": `https://davidcrandall.com${this.$route.path}`
        } 
      },{ 
        type: 'application/ld+json', 
        json: {
          "@context"  : "http://schema.org",
          "@type"     : "Person",
          "name"      : "David Crandall",
          "mainEntityOfPage": `https://davidcrandall.com`
        } 
      },{ 
        type: 'application/ld+json', 
        json: {
          "@context"  : "http://schema.org",
          "@type"     : "Brand",
          "name"      : "David Crandall",
          "mainEntityOfPage": `https://davidcrandall.com`
        } 
      },{ 
          type: 'application/ld+json', 
          json: {
            "@context"  : "http://schema.org",
            "@type"     : "Blog",
            "headline"  : "David Crandall's Blog",
            "author"    : "David Crandall",
            "mainEntityOfPage": `https://davidcrandall.com/blog/`
          } 
        }
    ]
    }
  }
};
</script>
<style lang="scss">
    #bottom {
      margin-top: -100px;
      padding-top: 100px;
    }
    .markdown-body {
      padding: 35px;
    }
    #single {
    .hero {
      padding: 0 0 50px 0;
      position: relative;
      .columns {
        width: 100%;
      }
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
    z-index:1;
    background: #fff;
    h2 {
      margin-bottom: 20px;
    }
  }
  .button {
    margin-top: 20px;
  }
}
</style>