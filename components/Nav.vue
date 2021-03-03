<template>
    <div>
        <nav class="navbar is-dark">
            <div class="container is-fluid is-flex">
                <div class="level is-vcentered">
                    <div class="level-left">
                        <p class="level-item title is-4 has-text-white hidden-mobile" v-on:click="navOpen">David Crandall</p>
                    </div>
                    <div :class="['level-right', 'link-container', isOpen ? 'open' : 'closed']">
                        <nuxt-link to="/" class="level-item has-text-white">Home</nuxt-link>
                        <nuxt-link to="/blog/" class="level-item has-text-white">Blog</nuxt-link>
                    </div>
                </div>
                <Hamburger v-on:click.native="navOpen" :open="[isOpen ? 'open' : 'closed']" class="is-hidden-tablet" />
            </div>
        </nav>
    </div>
</template>

<script>
import Hamburger from '~/components/Hamburger'
    export default {
        components: {
            Hamburger
        },
        data() {
            return {
                isOpen: false
            }

        },
        methods: {
            navOpen: function() {
                this.isOpen = !this.isOpen;
                if(this.isOpen === true) {

                }
            }
        }
    }
</script>

<style lang="scss" scoped>
nav {
    position: fixed;
    width: 100%;
    height: 80px;
    display: flex;
    box-shadow: 0 -5px 14px #000;
    z-index: 100;
    p {
        margin-bottom: 0 !important;
        padding-bottom: 5px;
    }
    .level {
        width: 100%;
        margin-bottom: 0;
    }
    .title {
        font-size: 3em;
    }
    a {
        font-size: 1.5em; padding: 5px 20px;
    }
    @media screen and (max-width: 768px) {
        .link-container {
            text-align: center;
            justify-content: center;
            overflow: hidden;
            height: 0;
            transition: all 0.25s ease-in-out;
            background: #242424;
            width: 100vw;
            margin-left: -32px;
            margin-top: 5px;
        }
        & .open {
            height: 100vh;
        }
        p {
            justify-content: left;
            margin-top: 11px;
        }
    }
}
</style>