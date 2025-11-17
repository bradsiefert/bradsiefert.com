// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
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
    documentDriven: true,
    markdown: {
      anchorLinks: false
    }
  },
  css: [
    '@/assets/scss/styles.scss' // Needed to install sass and bootstrap to make this work.
  ]
})
