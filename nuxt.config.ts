// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-02-11',
  devtools: { enabled: true },
  srcDir: '.',
  dir: {
    app: 'app',
  },
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
  modules: ['@nuxt/content', '@nuxt/a11y', '@nuxt/hints'],
  content: {
    // documentDriven removed in v3 - using catch-all routes instead
    renderer: {
      anchorLinks: false
    }
  },
  css: [
    '@/assets/scss/styles.scss' // Needed to install sass and bootstrap to make this work.
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: [
            'color-functions',
            'import',
            'if-function',
            'global-builtin',
            'abs-percent'
          ]
        }
      }
    }
  }
})