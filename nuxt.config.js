import colors from 'vuetify/es5/util/colors'

export default {
  publicRuntimeConfig: {
    E_API_KEY: process.env.E_API_KEY,
    E_TEMPLATE_ID: process.env.E_TEMPLATE_ID,
    E_PUBLIC_USER_ID: process.env.E_PUBLIC_USER_ID,
    E_SERVICE_ID: process.env.E_SERVICE_ID,
    recaptcha: {
      /* reCAPTCHA options */
      hideBadge: 0, // Hide badge element (v3 & v2 via size=invisible)
      language: 'English', // Recaptcha language (v2)
      mode: 'base', // Mode: 'base', 'enterprise'
      siteKey: process.env.R_SITE_KEY,
      version: 2, // Version
      size: 'normal' // Size: 'compact', 'normal', 'invisible' (v2)
    }
  },
  
  // View your app on another device
  server: {
    port: 1440, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Home',
    title: 'Area-51',
    meta: [
      { charset: 'utf-8' },
      { hid: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'DESC HERE' },
      { hid: 'format-detection', name: 'format-detection', content: '' },
      { hid: 'theme-color', name: 'theme-color', content: '#00346A' },
      // Open Graph / Facebook
      { hid: 'og:site_name', name: 'og:site_name', content: 'IV-CODE.io' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:url', name: 'og:url', content: 'https://iv-code.io/' },
      { hid: 'og:title', name: 'og:title', content: 'IV-CODE.io' },
      { hid: 'og:description', name: 'og:description', content: 'DESC HERE' },
      { hid: 'og:image', name: 'og:image', content: 'https://ik.imagekit.io/invimgs0101/IV-CODE/logos/ivcode-logo/Wolf_WHITE_TQ9YPD0KD.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656026848531' },
      { hid: 'og:image:width', name: 'og:image:width', content: '1280' },
      { hid: 'og:image:height', name: 'og:image:height', content: '720' },
      // Twitter
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:url', name: 'twitter:url', content: 'https://iv-code.io/' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'IV-CODE' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'DESC HERE' },
      { hid: 'twitter:image', name: 'twitter:image', content: 'https://ik.imagekit.io/invimgs0101/IV-CODE/logos/ivcode-logo/Wolf_WHITE_TQ9YPD0KD.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656026848531' }
    ],
    link: [
      // Tab Icon
      { hid: '"apple-touch-icon', rel: 'apple-touch-icon', sizes: '180x180', href: 'https://ik.imagekit.io/invimgs0101/IV-CODE/logos/ivcode-logo/Wolf_WHITE_TQ9YPD0KD.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656026848531' },
      { hid: 'icon', rel: 'icon', type: 'image/x-icon', href: 'https://ik.imagekit.io/invimgs0101/IV-CODE/logos/ivcode-logo/Wolf_WHITE_TQ9YPD0KD.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656026848531' },
      // Fonts API
      // SEO Tags
      { hid: 'shortcut icon', rel: 'shortcut icon', type: 'image/x-icon', href: 'https://ik.imagekit.io/invimgs0101/IV-CODE/logos/ivcode-logo/Wolf_WHITE_TQ9YPD0KD.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656026848531' },
      { hid: 'canonical', rel: 'canonical', href: 'https://iv-code.io/' },
      // Load Speed
      { hid: 'canonical', rel: 'preconnect', href: 'https://ik.imagekit.io' }
    ],
    // Page Language
    htmlAttrs: {
      lang: 'en'
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/global.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // Auto Sitemap - /sitemap.xml - SEO
    '@nuxtjs/sitemap',
    // https://www.npmjs.com/package/@nuxtjs/recaptcha
    '@nuxtjs/recaptcha'
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: '#00346A',
          accent: '0D6EB7',
          secondary: 'CE1628',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: {
          primary: '#00346A',
          accent: '0D6EB7',
          secondary: 'CE1628',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      'three',
      'OrbitControls.js',
      'GLTFLoader.js'
    ],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
