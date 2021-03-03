<template>
    <div>
        <div :key="index" v-for="(album, index) in albums">
            <h3>{{ album.name }}</h3>
            <p>{{ album.release_date }}</p>
            <img :src="album.images[1].url" />
            <ol>
                <li :key="index" v-for="(track, index) in album.trackListing">{{ track.track_number }}. {{ track.name }}</li>
            </ol>
        </div>
    </div>
</template>

<script>
var qs = require('qs');
import Album from '~/components/Album.vue';

let artistID = "3XC3atB6PjVMCNFMdLy3Nt"; //the ID for my spotify artist data; allows me to fetch tracks/albums
let artistEndpoint = "https://api.spotify.com/v1/artists" //endpoint to fetch artist data, including albums
let albumsEndpoint = `${artistEndpoint}/${artistID}/albums`; //gets all albums by me

//this function returns a string for all track data from an album, where 'x' is the album ID, which can be taken from the albumsEndpoint data
let tracksEndpoint = (x) => {
    return `https://api.spotify.com/v1/albums/${x}/tracks?limit=50`;
}

export default {
    data() {
        return {
            albums: [],
            token: ''
        }
    },
    async fetch() {
        var data = qs.stringify({
            'grant_type': 'client_credentials',
            'client_secret': '15e8120194d14db5af2c371d736aa4f5',
            'client_id': '3c34ef601193450ca51ddc9a30bd0f14' 
        });
        var config = {
            method: 'post',
            url: 'https://accounts.spotify.com/api/token',
            headers: { 
                'Content-Type': 'application/x-www-form-urlencoded', 
            },
            data : data
        };

        //fetches a brand new auth token; use await to ensure a token is available
        this.token = await this.$axios(config).then(x => {return x.data.access_token});

        //fetches album using auth token
        this.albums = await this.$axios.$get(albumsEndpoint, {headers: {
            Authorization: `Bearer ${this.token}`
        }}).then(x => { return x.items })

        for (var i = 0; i in this.albums; i++) {
            var albumID = this.albums[i].id
            
            this.albums[i].trackListing = await this.$axios.$get(tracksEndpoint(albumID), {headers: {
                Authorization: `Bearer ${this.token}`
            }}).then(x => { return x.items })
        }
    },
    fetchOnServer: true,
    components: {
        Album
    }
}
</script>

<style lang="scss" scoped>

</style>