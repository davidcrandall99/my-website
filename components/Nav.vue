<template>
    <div>
        <nav class="navbar is-dark">
            <div class="container is-fluid">
                    <div class="left logo-container">
                        
                            <nuxt-link to="/" class="has-text-white logo">David Crandall</nuxt-link>
                        
                    </div>
                    <div :class="['right', 'link-container', isOpen ? 'open' : 'closed']">
                        <nuxt-link to="/" class="has-text-white" v-on:click.native="navClose">Home</nuxt-link>
                        <nuxt-link to="/photography/" class="has-text-white" v-on:click.native="navClose">Photography</nuxt-link>
                        <nuxt-link to="/blog/" class="has-text-white" v-on:click.native="navClose">Blog</nuxt-link>
                        <nuxt-link to="/music/" class="has-text-white" v-on:click.native="navClose">Music</nuxt-link>
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
        data() {
            return {
                isOpen: false,
                size: "mobile"
            }

        },
        mounted() {
            gsap.from('.navbar', {
                y: -100,
                duration: 1,
                ease: "power3.out",
                delay: 1,
            });
            this.resizer();
            if(this.size === 'desktop') {
                this.animateIn()
            }
            window.addEventListener('resize', this.resizer)
        },
        methods: {
            resizer: function () {
                if(window.innerWidth > 768) {
                    this.size = 'desktop';
                }
                else {
                    this.size = 'mobile';
                }
            },
            navToggle: function() {
                this.isOpen = !this.isOpen;
                if(this.isOpen) {
                    this.animateIn();
                } else {
                    this.animateOut();
                }
            },
            navClose: function() {
                if(this.size === 'mobile') {
                this.animateOut(process.client, this.isOpen)
                    .then(() => { this.isOpen = false; })
                    .then(() => { this.animateIn() })
                }
            },
            animateIn: function () {
                if(process.client) {
                    gsap.fromTo('.link-container a', {
                        opacity: 0,
                        x: -50
                    }, {
                        opacity: 1,
                        x: 0,
                        delay: .5,
                        stagger: .1,
                    });
                }
            },
            animateOut: async function() {
                if (process.client === true && this.isOpen === true)  {
                    if (window.innerWidth < 769) {
                        await gsap.fromTo('.link-container a', {
                            opacity: 1,
                            x: 0
                        }, {
                            opacity: 0,
                            x: -50,
                            delay: .5,
                            stagger: .1,
                        });
                    }
                }
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
    display: flex;
    align-items: center;
    justify-content: center;
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
        align-items: center;
    }

    .logo {
        text-transform: uppercase;
        font-size: 4vmin;
    }
    a {
        font-size: 16px; 
        padding: 5px 10px;
        transition: letter-spacing .2s ease-in-out;
        opacity: 1;
        &:hover {
            letter-spacing: 2px;
        }
        
    }
    .logo-container {
        min-width: 320px;
    }
    .container {
        display: flex;
        align-items: center;
        flex-basis:content;
        justify-content: space-between;
    }
    .link-container {
        display: flex;
        align-self: right;
        justify-content: right;
        a.nuxt-link-active.nuxt-link-exact-active {
            color: rgb(89, 185, 202) !important; //this is exclusively for the nav
        }
    }
    @media screen and (max-width: 768px) {
        .link-container {
            text-align: center;
            flex-flow: column;
            justify-content: center;
            overflow: hidden;
            height: 0;
            transition: all 0.25s ease-in-out;
            background: rgba(25,25,25,1);
            width: 100vw;
            padding-top: 0;
            box-sizing: border-box;
            position: fixed;
            top: 0;
            left: 0;
            overflow: hidden;
            a {
                width: 100%;
                position: relative;
                height: auto;
                font-size: 10vmin;
            }
        }
        & .open {
            padding-top: 10px;
            height: 100vh;
            max-height: none;
        }
        p {
            justify-content: left;
            margin-top: 11px;
        }
    }
}
</style>