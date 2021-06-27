<template>
    <div id="footer">
        <!-- <form method="POST" action="https://davidcrandall.com/api/contactform/"> -->
        <div id="form">
            <div v-if="!complete" id="fields">
                <input v-model="form.email" name="email" type="email" required placeholder="email" />
                <input v-model="form.subject" name="subject" type="text" required placeholder="what do you want to talk about?" />
                <textarea v-model="form.message" name="message" required placeholder="message" />
                <button id="submit" v-on:click="submit()">Submit</button>
            </div>
            <div v-else id="thankyoumessage">
                <p>Thank you for submitting your message!</p>
                <p>Your email: {{ form.email }}<br>
                    Your subject: {{ form.subject }}
                    Your message: {{ form.message }}
                </p>
            </div>
        </div>
        <!-- </form> -->
    </div>
</template>

<script>
    export default {
        name: "Footer",
        data() {
            return { 
                    form: {
                    email: "test@test.com",
                    subject: "This is a test subject",
                    message: "This is a test message. Lookie there"
                },
                complete: false
            }
        },
        methods: {
            submit() {
               this.$http.post('https://davidcrandall.com/api/contactform/', this.form, {emulateJSON: true})
                .then(response => { 
                    return response.json()
                }).then(data => {
                    if(data.status === "success") {
                        this.complete = true;
                    }
                })
               
                .catch(e => {
                   alert('ERROR: ' + e);
               })
            }
        }
    }
</script>

<style lang="scss" scoped>
 #footer {
     min-height: 100vh;
 }
</style>