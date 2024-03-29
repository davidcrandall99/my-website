import FMMode from "frontmatter-markdown-loader/mode";
import path from "path";
const fetch = require('node-fetch');


//Once the data is available, generate the array of static routes we'll want in our build, dynanically
import { manifest } from "./assets/manifest.js";
let urls = [];
for (var i = 0; i in manifest; i++) {
  urls.push(manifest[i].uri);
}
console.log('captured blog urls');
console.log('fetching photo galleries');



//fetch the photosets to build uri's
(async function () { 
  await fetch('https://davidcrandall.com/api/getsets')
    .then(async response => await response.json())
    .then(async data => { 

      await data.forEach((item) =>{
        var uri = `/photography/gallery/${item.id}/`
        urls.push(uri)
      })
      console.log(urls)
      return urls;
  });
  return urls
})();



console.log('galleries fetched. nuxt can begin doing its thing')
console.log(urls)
//now the nuxt config can begin
export default {
  ssr: true,
  target: 'static',
  /*
   ** Headers of the page.
   */
  head: {
    title: "David Crandall",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "My name is David Crandall - and I make things."
      },
      { name: 'keywords', content: 'david crandall, david gene crandall, dave crandall, david crandall photography, david crandall blog, tech blog'},
      { hid: 'og:title', property: 'og:title', content: 'David Crandall' },
      { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: 'David Crandall'},
      { hid: 'og:description', property: 'og:description', content: 'My name is David. I make things.' },
      { property: 'og:type', content: 'website' },
      { name: "msapplication-TileColor", content: "#0A0A0A" },
      { name: "msapplication-TileImage", content : "/ms-icon-144x144.png"},
      { name: "theme-color", content: "#ffffff"},
      { property: 'og:site_name', hid: 'og:site_name', content: 'David Crandall'}
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "apple-touch-icon", sizes: "57x57", href: "/apple-icon-57x57.png" },
      { rel: "apple-touch-icon", sizes: "60x60", href: "/apple-icon-60x60.png" },
      { rel: "apple-touch-icon", sizes: "72x72", href: "/apple-icon-72x72.png" },
      { rel: "apple-touch-icon", sizes: "76x76", href: "/apple-icon-76x76.png" },
      { rel: "apple-touch-icon", sizes: "114x114", href: "/apple-icon-114x114.png" },
      { rel: "apple-touch-icon", sizes: "120x120", href: "/apple-icon-120x120.png" },
      { rel: "apple-touch-icon", sizes: "144x144", href: "/apple-icon-144x144.png" },
      { rel: "apple-touch-icon", sizes: "152x152", href: "/apple-icon-152x152.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-icon-180x180.png" },
      { rel: "icon", type: "image/png", sizes: "192x192",  href: "/android-icon-192x192.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "96x96", href: "/favicon-96x96.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
      { rel: "manifest", href: "/manifest.json" },
    
    ],
    script: [
      {
        src: 'https://www.google.com/recaptcha/api.js?render=6LcXi14bAAAAAFuw_c4xQ6LbhKRcrYhvpxOaSDEE'
      }
    ]

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
  //  plugins: ["~/plugins/disqus.js"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    // Doc: https://www.npmjs.com/package/@nuxtjs/sitemap
    "@nuxtjs/sitemap",
    ["@nuxtjs/amp", {
      removeInlineStyles: false,
      origin: 'https://davidcrandall.com'
    }],
    "@nuxtjs/redirect-module",
    '@nuxt/http',
    '@nuxtjs/apollo'
  ],
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.CONTENTFUL_ENDPOINT,
        authenticationType: 'Bearer',
        httpLinkOptions: {
          headers: {
            'Authorization': 'Bearer ' + process.env.CONTENTFULKEY
          }
        }
      }
    }
  },
  redirect: [
      {
          from: '^.*(?<!\/|.jpg|.png|.svg)$',
          to: (from, req) => req.url + '/'
      }
  ],
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
  router: {
    trailingSlash: true
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
  //auto loads components as they are used in a template without having to import them
  components: true,

  //generates sitemap
  sitemap: {
    hostname: "https://davidcrandall.com",
    gzip: true,
    path: 'sitemap.xml',
    filter ({ routes }) {
      return routes.map(route => {
        route.url = `${route.url}/`
        route.changefreq = 'daily'
        route.priority = 1
        return route
      })
    }
  },
  env: {
    CONTENTFULKEY: process.env.CONTENTFULKEY
  }
};
