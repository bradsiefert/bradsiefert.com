// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Brad Siefert / Designer & Photographer',
  siteDescription: "Personal design portfolio and blog of Chicago based UI/UX Designer Brad Siefert.",
  siteUrl: 'https://bradsiefert.com',
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
    },
    {
      use: '@gridsome/source-airtable',
      options: {
        apiKey: process.env.AIRTABLE_KEY, // required
        base: process.env.AIRTABLE_BASE, // required
        tables: [
          {
            name: 'My Gear', // required
            typeName: 'Gear', // required
            select: {
              sort: [{field: "Sorting Order ID", direction: "asc"}],
            },
          },
        ],
      },
    },
    {
      use: '@microflash/gridsome-plugin-feed',
      options: {
        contentTypes: ['Blog'],
        feedOptions: {
          title: 'Brad Siefert / Designer & Photographer',
          description: 'Personal blog of Chicago based UI/UX Designer Brad Siefert.'
        },
        rss: {
          enabled: true,
          output: '/blog/feed.xml'
        },
        atom: {
          enabled: true,
          output: '/blog/feed.atom'
        },
        json: {
          enabled: true,
          output: '/blog/feed.json'
        },
        maxItems: 100,

        // (optional) an array of properties to be parsed as HTML
        // Converts relative URLs to absolute URLs
        // You can disable this by omitting the option
        htmlFields: ['content'],

        // (optional) appends a trailing slash to the URLs
        enforceTrailingSlashes: false,

        // (optional) a function to filter out the nodes
        // e.g., filter out all outdated posts, filterNodes: (node) => !!node.outdated
        filterNodes: (node) => true,

        // (optional) sets the properties on each feed item
        // See https://github.com/jpmonette/feed#example for all options
        nodeToFeedItem: (node) => ({
          title: node.title,
          date: node.date,
          content: node.content
        })
      },
    },
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
