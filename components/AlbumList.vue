<template>
  <div id="albums">
    <Album class="album" v-for="album, index in albums" :key="index" :albumData="album" />
  </div>
</template>

<script>
import gql from 'graphql-tag';

//the graphql query to contentful for all albums
var query = gql`
  {
    albumCollection(order: released_DESC) {
      items {
        title
        spotifyUrl
        youtubeMusicUrl
        appleMusicUrl
        pandoraUrl
        albumArt
        released
        songsCollection {
          items {
            title
            duration
          }
        }
      }
    }
  }
`;

export default {
  async fetch() {
    this.$apollo.query({ query }).then((data) => {
      this.albums = data.data.albumCollection.items;
    });
  },
  fetchOnServer: false,
  data() {
    return {
      albums: [],
    }
  },
};
</script>

<style lang="scss" scoped>
    #albums {
        display: flex;
        flex-direction: row;
        align-items: stretch;
        flex-wrap: wrap;
        width: 100vw;
        .album {
            flex: 0 0 25%;
        }
    }
</style>