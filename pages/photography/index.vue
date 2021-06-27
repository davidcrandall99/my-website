<template>
<div>
    <simple-hero bgImage="https://live.staticflickr.com/65535/48650271863_2f267b8055_k_d.jpg" title="Photography" />
    <slanted-section>
        <div class="container">
            <div class="grid">
                <div class="item" :key="index" v-for="set, index in photosets" :style="`background-image:url(${set.thumbnail})`">
                    <nuxt-link class="link" :to="`/photography/gallery/${set.id}/`"></nuxt-link>
                    <nuxt-link class="text" :to="`/photography/gallery/${set.id}/`">{{ set.title }}</nuxt-link>
                </div>
            </div>
        </div>
    </slanted-section>
</div>
</template>

<script>
import SimpleHero from '~/components/SimpleHero.vue';
    export default {
  components: { SimpleHero },
        data() {
            return {
                photosets: []
            }
        },
        mounted() {
            this.getPhotoSets();
        },
        methods: {
            getPhotoSets() {
                fetch('https://davidcrandall.com/api/getsets')
                    .then(response => response.json())
                    .then(data => { this.photosets = data })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .grid {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        .item {
            width: 25%;
            height: 300px;
            display: flex;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: top center;
            position: relative;
            box-sizing: border-box;
            padding: 20px;
            overflow: hidden;
            @media (max-width: 800px) {
                width: 50%;
            }
            @media (max-width: 600px) {
                width: 100%;
            }
            .link {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0,0,0,0.2);
                transition: all 0.5s ease;
            }
            .text {
                position:absolute;
                color: white;
                bottom: 20px;
                left: 20px;
                font-size: 2rem;
            }
            &:hover {
                .link {
                    background-color: rgba(0,0,0,0.8)
                }
            }
        }
    }
</style>