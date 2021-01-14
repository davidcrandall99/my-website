<template>
    <div>
        <h1>{{title}}</h1>
        <p>{{releaseDate}}</p>
    </div>
</template>

<script>
    export default {
        props: {
            title: String, //name of the album
            tracks: Array, //an Array of key/value pairs that denote track name, length, and a URL to the audio file to stream
            releaseDate: Date, //the date the album was released
            artwork: String //url of album artwork
        }
    }
</script>

<style lang="scss" scoped>

</style>