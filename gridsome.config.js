// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'brad.si + gridsome',
  siteDescription: "brad's website.",
  pathPrefix: '/efert',
  titleTemplate: `Brad Siefert / %s`,
  icon: 'src/favicon.png',
  plugins: [
    {
      use: '@gridsome/plugin-sitemap',
      options: {
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Blog',
        path: './content/blog/**/*.md',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          },
          category: {
            typeName: 'Category',
            create: true
          }
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Portfolio',
        path: './content/portfolio/**/*.md',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'SiriShortcuts',
        path: './content/siri-shortcuts/**/*.md',
      }
    }
  ],

  templates: {
    Blog: [{
      path: '/blog/:title',
      component: './src/templates/BlogPost.vue'
    }],
    Category: [{
      path: '/category/:title',
      component: './src/templates/Category.vue'
    }],
    Tag: [{
      path: '/tag/:title',
      component: './src/templates/Tag.vue'
    }],
    SiriShortcuts: [{
      path: '/siri-shortcuts/:title',
      component: './src/templates/SiriShortcutsPost.vue'
    }],
    Portfolio: [{
      path: '/portfolio/:title',
      component: './src/templates/PortfolioPost.vue'
    }]
  }
}
