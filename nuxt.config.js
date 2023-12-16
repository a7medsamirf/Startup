const appUrl = 'https://nuxt-i18n-demo.netlify.app';
import languages from './static/lang/languages'
import { theme } from './config/vuetify.options'
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: false,
  target: 'static',
  head: {
    htmlAttrs: {
      lang: 'en',
    },
/*     titleTemplate: '%s - Startup', */
    title: 'Startup',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name : 'theme-color', content: '#356DFF'},
      {rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon.ico' }
    ]
  },

/*   router: {
    base: '/Startup/'
  },

  loadingIndicator: {
    name: 'chasing-dots',
    color: '#356DFF',
    background: '#fff'
  },
 */
  transition: 'slide-bottom',


  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
/*    '~/assets/transition.scss',*/
    '~/assets/vuetify-overrides.scss',
    '~/assets/vendors/slick-carousel/slick-theme.css',
    '~/assets/vendors/slick-carousel/slick.css',
    '~/assets/vendors/animate.css',

  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/fontawesome.js', ssr: false},
    {src: '~/plugins/i18n-config.js' },
    {src: '~/plugins/wow.js', ssr: false},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    ['@nuxtjs/vuetify',{rtl:true}]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://i18n.nuxtjs.org/
    "@nuxtjs/i18n",
    // https://sitemap.nuxtjs.org/
    "@nuxtjs/sitemap",
    // https://resources.com/
    "@nuxtjs/style-resources",
  ],

        /* ** i18n config   */
        i18n: {
          // Options
          //to make it seo friendly remove below line and add baseUrl option to production domain
          seo: true,
          // baseUrl: 'https://my-nuxt-app.com',
          lazy: true,
          locales: languages,
          defaultLocale: 'ar',
          vueI18n: {
            fallbackLocale: 'ar'
          },
          detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            alwaysRedirect: true
          },
          langDir: 'static/lang/'
        },

  /*
 ** Sitemap config
 */
  sitemap: {
    hostname: appUrl,
    trailingSlash: true,
    i18n: true
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    },
    nestedProperties: ['author.name']
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/styles.scss'],
    optionsPath: './config/vuetify.options.js'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build:{
    loaders: {
      vus: { cacheBusting: true },
      scss: { sourceMap: false }
    }
  }
}
