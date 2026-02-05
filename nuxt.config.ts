// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  app: {
    head: {
      htmlAttrs: {
          lang: 'en',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
    pageTransition: {
      name: 'fade',
      mode: 'default',
      duration: 200
    }
  },
  modules: ['@nuxt/content'],
  content: {
    // documentDriven removed in v3 - using catch-all routes instead
    markdown: {
      anchorLinks: false
    }
  },
  css: [
    '@/assets/scss/styles.scss' // Needed to install sass and bootstrap to make this work.
  ]
})
