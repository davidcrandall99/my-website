<template>
    <div>
        <nav class="navbar is-dark">
            <div class="container is-fluid is-flex">
                <div class="level is-vcentered">
                    <div class="level-left">
                        <p class="level-item title is-4 has-text-white hidden-mobile" v-on:click="navToggle">David Crandall</p>
                    </div>
                    <div :class="['level-right', 'link-container', isOpen ? 'open' : 'closed']">
                        <nuxt-link to="/" class="level-item has-text-white" v-on:click.native="navClose">Home</nuxt-link>
                        <nuxt-link to="/photography/" class="level-item has-text-white" v-on:click.native="navClose">Photography</nuxt-link>
                        <nuxt-link to="/blog/" class="level-item has-text-white" v-on:click.native="navClose">Blog</nuxt-link>
                        <nuxt-link to="/music/" class="level-item has-text-white" v-on:click.native="navClose">Music</nuxt-link>
                    </div>
                </div>
                <Hamburger v-on:click.native="navToggle" :open="[isOpen ? 'open' : 'closed']" class="is-hidden-tablet" />
            </div>
        </nav>
    </div>
</template>

<script>
import { gsap } from 'gsap';
import Hamburger from '~/components/Hamburger'
    export default {
        components: {
            Hamburger
        },
        mounted() {
            gsap.from('.navbar', {
                y: -100,
                duration: 1,
                ease: "power3.out",
                delay: 1
            })
        },
        data() {
            return {
                isOpen: false
            }

        },
        methods: {
            navToggle: function() {
                this.isOpen = !this.isOpen;
            },
            navClose: function() {
                this.isOpen = false;
            }
        }
    }
</script>

<style lang="scss" scoped>
nav {
    top: 0;
    position: fixed;
    width: 100%;
    height: 80px;
    display: flex;
    box-shadow: 0 -5px 14px #000;
    z-index: 100;
    &.is-dark {
        background: rgba(25,25,25,0.85);
    }
    p {
        margin-bottom: 0;
        padding-bottom: 5px;
    }
    .level {
        width: 100%;
        margin-bottom: 0;
    }
    .title {
        // font-size: 1em;
        position: relative;
        top: 5px;
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
            background: #121212;
            width: 100vw;
            margin-left: -32px;
            margin-top: 25px;
            padding-top: 0;
            box-sizing: border-box;
        }
        & .open {
            padding-top: 10px;
            height: 100vh;
        }
        p {
            justify-content: left;
            margin-top: 11px;
        }
        .title {
            top: 12px
        }
    }
}
</style>