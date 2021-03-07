<template>
  <div>
    <client-only>
    <div v-if="bannerOpen" class="cookie has-background-dark">
      <p class="has-text-white is-size-7" v-html="message"></p>
      <br />
      <a class="button is-primary" @click="accept">{{ buttonTextAccept }}</a>
      <a class="button is-link is-outlined" @click="deny">{{  buttonTextDeny  }}</a>
    </div>
    <div v-if="!accepted && !bannerOpen" class="cookie-settings">
      <a class="button is-primary" @click="clearGDPR">Change Cookie Settings</a>
    </div>
    </client-only>
  </div>
</template>

<script>
export default {
  name: "CookieMessage",
  props: {
    buttonTextAccept: {
      type: String,
      default: "Accept",
    },
    buttonTextDeny: {
      type: String,
      default: "Deny",
    },
    message: {
      type: String,
      default:
        'My website uses cookies for anonymous <a class="has-text-info" href="https://www.google.com/about/company/user-consent-policy/" target="_blank">Google Analytics</a> and <a class="has-text-info" href="https://help.disqus.com/en/articles/1717103-disqus-privacy-policy" target="_blank">Disqus</a> blog comments. If you\'re OK with that, please click the "Accept" button.',
    },
  },
  data() {
    return {
      bannerOpen: false,
      accepted: false,
    };
  },
  computed: {
    containerPosition() {
      return `cookie--${this.position}`;
    },
  },
  afterCreated() {
    if (!this.isGDPR() === true) {
      this.bannerOpen = true;
    } else {
      this.accepted = true;
    }
  },
  methods: {
    clearGDPR() {
      if (process.browser) {
        localStorage.removeItem("GDPR:accepted");
        this.bannerOpen = true;
        this.accepted = false;
      }
    },
    isGDPR() {
      if (process.browser) {
        return localStorage.getItem("GDPR:accepted", true);
      }
    },
    accept() {
      if (process.browser) {
        this.bannerOpen = false;
        this.accepted = true;
        localStorage.setItem("GDPR:accepted", true);
      }
    },
    deny() {
      if (process.browser) {
        this.bannerOpen = false;
        localStorage.setItem("GDPR:accepted", false);
      }
    },
  },
};

</script>

<style lang="scss" scoped>
.cookie {
  z-index: 100;
  position: fixed;
  bottom: 0px;
  padding: 20px;
  @media (min-width: 768px) {
    padding: 20px;
    right: 0;
    width: 400px;
    border-radius: 5px;
    bottom: -5px;
  }
}
.cookie-settings {
  position: fixed;
  padding: 20px;
  z-index: 200;
  bottom: 0;
  right: 0;
}
</style>
