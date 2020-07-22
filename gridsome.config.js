// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'brad.si + gridsome',
  siteDescription: "brad's website.",
  pathPrefix: '/efert',
  titleTemplate: `brad.si / %s`,
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
    }
  ],
  templates: {
    Blog: [{
      path: '/blog/:title',
      component: './src/templates/BlogEntry.vue'
    }],
    Category: [{
      path: '/category/:title',
      component: './src/templates/Category.vue'
    }],
    Tag: [{
      path: '/tag/:title',
      component: './src/templates/Tag.vue'
    }]
  }
}
