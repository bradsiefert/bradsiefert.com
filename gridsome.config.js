// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Brad Siefert / Designer & Photographer',
  siteDescription: "Personal design portfolio and blog of Chicago based UI/UX Designer Brad Siefert.",
  siteUrl: 'https://brad.si',
  titleTemplate: `Brad Siefert / %s`,
  icon: 'src/favicon.png',
  plugins: [
    {
      use: '@gridsome/plugin-sitemap',
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Blog',
        path: './content/blog/**/*.md',
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
      path: '/blog/:path',
      component: './src/templates/BlogPost.vue'
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
