<template>
  <div id="footer" class="has-background-black has-text-white">
    <div id="footnav">
      <p class="title has-text-white">Navigate</p>
      <p><nuxt-link to="/">Home ></nuxt-link></p>
      <p><nuxt-link to="/photography/">Photography ></nuxt-link></p>
      <p><nuxt-link to="/music/">Music ></nuxt-link></p>
      <p><nuxt-link to="/blog/">Blog ></nuxt-link></p>
    </div>

    <div id="form">
      <p class="title has-text-white">Contact</p>
	  <p class="error" v-if="!complete && error">{{ error }}</p>
      <div v-if="!complete" id="fields">
        <input
          class="input"
          v-model="form.email"
          name="email"
          type="email"
          required
          placeholder="email"
        />
        <input
          class="input"
          v-model="form.subject"
          name="subject"
          type="text"
          required
          placeholder="what do you want to talk about?"
        />
        <textarea
          class="textarea"
          v-model="form.message"
          name="message"
          required
          placeholder="message"
        />
        <button class="button is-primary" id="submit" v-on:click="getToken()">
          Submit
        </button>
      </div>
      <div v-else id="thankyoumessage">
        <p>Thank you for submitting your message!</p>
        <p>I'll try to reach out as soon as I can!</p>
        <p>Below is a receipt of your message:</p>
        <p class="receipt">
          Your email: {{ form.email }}<br />
          Your subject: {{ form.subject }}<br />
          Your message: {{ form.message }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      form: {
        token: "",
        email: "",
        subject: "",
        message: "",
      },
      complete: false,
	  error: false,
    };
  },
  methods: {
	 getToken: async function(e) {

		 var assign = (n) => { 
			 this.form.token = n;
			 this.submit();
		 }
		
		await grecaptcha.ready(async function() {
		var token = grecaptcha.execute('6LcXi14bAAAAAFuw_c4xQ6LbhKRcrYhvpxOaSDEE', { action: 'submit'
			}).then(function(token) {
				assign(token);
			});    	
		})

		
   },
    async submit() {
		if(this.form.email === "" || this.form.subject === "" || !this.form.message === "") {
			this.error = "Please complete all the fields"
		} else {
       	 	await this.$http
				.post("https://davidcrandall.com/api/contactform/", this.form, {
					emulateJSON: true,
				})
				.then((response) => {
					return response.json();
				})
				.then((data) => {
					if (data.status === "success") {
						this.complete = true;
						this.error = false;
					} else {
						this.error = data.status;
					}
				}).catch(err => {
					this.error = err.message
				})
      	} 
	  } 
    },
};
</script>

<style lang="scss" scoped>
#footer {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 20px 80px;
  font-size: 1.5em;
  #footnav {
    width: 65%;
    min-width: 200px;
    a {
      color: #fff;
    }
  }
  #form {
    input,
    textarea {
      margin-bottom: 20px;
    }
    .button {
      width: 100%;
    }
    @media (min-width: 700px) {
      width: 35%;
    }
  }
  #thankyoumessage {
    p {
      font-size: 0.7em;
      &.receipt {
        margin-top: 20px;
      }
    }
  }
  @media (max-width: 1167px) {
    .title {
      font-size: 2em;
    }
  }
  @media (max-width: 830px) {
    .title {
      font-size: 1.7em;
    }
  }
}
</style>