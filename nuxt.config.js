import FMMode from 'frontmatter-markdown-loader/mode'
import path from 'path'
import manifestGenerator from './plugins/manifest';

//generate the blog post data before anything else
manifestGenerator();


//Once the data is available, generate the array of static routes we'll want in our build, dynanically
import {manifest} from './assets/manifest.js';
let urls = [];
for(var i = 0; i in manifest; i++) {
  urls.push('blog/' + manifest[i].url);
}


//now the nuxt config can begin
export default {
  mode: 'spa',
  /*
  ** Headers of the page.
  */
  head: {
    title: 'David Crandall',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#020202' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/global.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '~/plugins/manifest'
  ],
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
 generate: {
  routes: urls
 },
 build: {
  extend (config, _ctx) {
    //update manifest, only works on server build
    manifestGenerator();
    config.module.rules.push(
      {
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        include: path.resolve(__dirname),
        options: {
          mode: [FMMode.VUE_COMPONENT],
          vue: {
            root: 'markdown-body'
          }
        }
      }
    )
  }
}
}
