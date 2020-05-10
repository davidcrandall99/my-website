import FMMode from "frontmatter-markdown-loader/mode";
import path from "path";
// import manifestGenerator from './plugins/manifest';

// //generate the blog post data before anything else
// manifestGenerator();

//Once the data is available, generate the array of static routes we'll want in our build, dynanically
import { manifest } from "./assets/manifest.js";
let urls = [];
for (var i = 0; i in manifest; i++) {
  urls.push(manifest[i].uri);
}

//now the nuxt config can begin
export default {
  mode: "spa",
  /*
   ** Headers of the page.
   */
  head: {
    title: "David Crandall",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "My name is David Crandall - and I make things."
      },
      { name: 'keywords', content: 'david crandall, david gene crandall, dave crandall, david crandall photography, david crandall blog, tech blog'},
      { hid: 'title', name: 'og:title', content: 'David Crandall' },
      { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: 'David Crandall'},
      { name: 'og:description', content: 'My name is David. I make things.' },
      { name: 'og:type', content: 'website' },
      { name: 'og:site_name', hid: 'og:site_name', content: 'David Crandall'}
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#020202" },
  /*
   ** Global CSS
   */
  css: ["@/assets/scss/global.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  // plugins: ["~/plugins/registerComponents.js"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    "bootstrap-vue/nuxt",
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    // Doc: https://www.npmjs.com/package/@nuxtjs/sitemap
    "@nuxtjs/sitemap"
  ],
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  generate: {
    routes: urls
  },
  build: {
    extend(config, _ctx) {
      //update manifest, only works on server build
      //manifestGenerator();
      config.module.rules.push({
        test: /\.md$/,
        loader: "frontmatter-markdown-loader",
        include: path.resolve(__dirname),
        options: {
          mode: [FMMode.VUE_COMPONENT],
          vue: {
            root: "markdown-body"
          }
        }
      });
    }
  },
  sitemap: {
    hostname: "https://www.davidcrandall.com",
    gzip: true,
    exclude: ["/blog"] //for now
  }
};
