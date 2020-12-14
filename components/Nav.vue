<template>
    <div>
        <nav class="navbar is-dark">
            <div class="container is-fluid is-flex">
                <!--desktop nav -->
                <div class="level is-hidden-mobile">
                    <nuxt-link to="/" class="level-item level-right has-text-white">Home</nuxt-link>
                    <p class="level-item title has-text-white has-text-center hidden-mobile">David Crandall</p>
                    <nuxt-link to="/blog/" class="level-item level-left has-text-white">Blog</nuxt-link>
                </div>

                <!--mobile nav-->
                <div class="level is-mobile is-hidden-tablet is-vcentered">
                    <div class="level-left">
                        <p class="level-item title is-4 has-text-white hidden-mobile">David Crandall</p>
                    </div>
                    <div class="level-right">
                    <nuxt-link to="/" class="level-item level-right has-text-white">Home</nuxt-link>
                    <nuxt-link to="/blog/" class="level-item level-right has-text-white">Blog</nuxt-link>
                    </div>
                </div>

            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
nav {
    position: fixed;
    width: 100%;
    box-shadow: 0 -5px 14px #000;
    z-index: 9;
    p {
        margin-bottom: 0 !important;
        padding-bottom: 5px;
    }
    .level {
        width: 100%;
        margin-bottom: 0;
    }
}
</style>