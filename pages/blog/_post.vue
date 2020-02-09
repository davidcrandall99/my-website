
<template>
  <div>
    <b-container>
      <h1>{{ attributes.title }}</h1>
      <component :is="selectedArticle" />
    </b-container>
  </div>
</template>

<script>
  import {manifest} from '@/assets/manifest.js';
  let data = [];
  for(var i = 0; i in manifest; i++) {
    let num = i.toString
    data.push(manifest[i].url);
  }
  export default {
    validate ({ params }) {
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
      var uris = []
      for (var i = 0; i in data; i++) {
        uris.push(data[i]);
      }
      return uris.includes(params.post);
    },
    data () {
      return {
        attributes: {},
        selectedArticle: null
      }
    },
    
    created () {
      const markdown = require(`~/posts/${this.$route.params.post}.md`);
      this.attributes = markdown.attributes;
      this.selectedArticle = markdown.vue.component;
    }
  }
</script>