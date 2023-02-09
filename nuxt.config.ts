// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1"',
      title: 'Brad Siefert / UX Designer & Photographer',
      meta: [
        { name: 'description', content: 'Design portfolio and personal blog of Chicago-based Design Technologist and photographer, Brad Siefert.' },
        { property: "og:image", content: 'https://bradsiefert.com/sharing.jpg' },
      ],
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
