const env = process.env;

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Home',
      titleTemplate: `%s - ${env.META_TITLE}`,

      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: env.META_DESCRIPTION,
        },
        { hid: 'keywords', name: 'keywords', content: env.META_KEYWORDS },

        { hid: 'og:title', property: 'og:title', content: env.META_TITLE },
        {
          hid: 'og:description',
          property: 'og:description',
          content: env.META_DESCRIPTION,
        },
        { hid: 'og:image', property: 'og:image', content: '/og-image.jpg' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: env.META_TITLE,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: env.META_DESCRIPTION,
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: '/og-image.jpg',
        },
      ],

      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  modules: ['@nuxt/image-edge', '@nuxtjs/i18n', 'nuxt-swiper'],

  swiper: {},

  css: ['~/assets/css/tailwind.css', '~/assets/css/main.css'],

  postcss: {
    plugins: {
      'postcss-import': {},
      'postcss-nested': {},
      'postcss-hexrgba': {},

      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // @nuxt/image-edge: https://v1.image.nuxtjs.org/get-started/
  image: {
    // The screen sizes predefined by `@nuxt/image`:
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536,
    },
  },

  // @nuxtjs/i18n: https://v8.i18n.nuxtjs.org/
  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en_US.json',
      },
      {
        code: 'th',
        file: 'th_TH.json',
      },
    ],

    defaultLocale: 'en',
    lazy: true,
    langDir: 'locales/',

    vueI18n: {
      fallbackLocale: 'en',
      legacy: false,
      locale: 'en',
      availableLocales: ['en', 'th'],

      numberFormats: {
        en: {
          currency: {
            style: 'currency',
            currency: 'USD',
          },
        },
        th: {
          currency: {
            style: 'currency',
            currency: 'THB',
          },
        },
      },
    },
  },

  runtimeConfig: {
    apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:8000',
  },
});
