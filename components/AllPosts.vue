<template>
  <div id="posts">
    <div class="container is-fullhd">
      <div class="columns is-multiline is-vcentered is-centered">
        <div class="column is-one-third-desktop is-4-tablet" :key="index" v-for="(item, index) in manifest">
          <nuxt-link :to="item.uri" class="text-dark" :aria-label="item.title">
            <div class="card">
              <div class="card-content">
                <h3 class="title is-5">{{item.title}}</h3>
                <hr/>
                <p class="has-text-black">{{ item.summary }}</p>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="columns">
        <div class="column has-text-centered">
          <a href="#" class="button is-primary is-centered loadmore" v-on:click="loadMore" onclick="return false;">Load More</a>
        </div>
      </div>
   </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      manifestNum: 0,
      posts: new Array
    };
  },
  computed: {
    manifest() {  
      var data;
      var posts = this.posts;
      var newData;    
      try {
        data = require(`~/assets/manifest-${this.manifestNum}.js`);
        data = data.manifest;
        for(var i in data) {
          this.posts.push(data[i]);
        }

      } 
      catch(e) {
        this.manifestNum = this.manifestNum - 1;
      }
      return posts;
    }
  },
  methods: {
    loadMore: function() {
      this.manifestNum++
    }
  }
};
</script>

<style lang="scss" scoped>

#posts {
  padding: 40px 0;
}
@media (min-width: 1024px) {
  .card {
    opacity: 0.6;
    transition: opacity 0.25s ease-in-out;
  }
  .card:hover {
    opacity: 1;
  }
}
</style>
