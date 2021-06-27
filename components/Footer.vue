<template>
    <div id="footer">
        <form method="POST" action="https://davidcrandall.com/api/contactform/">
            <input name="email" placeholder="email" />
            <input name="subject" placeholder="what do you want to talk about?" />
            <textarea name="message" placeholder="message" />
            <button id="submit" v-on:click="submit()">Submit</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Footer",
        methods: {
            submit() {
                alert('hi')
            }
        }
    }
</script>

<style lang="scss" scoped>
 #footer {
     min-height: 100vh;
 }
</style>