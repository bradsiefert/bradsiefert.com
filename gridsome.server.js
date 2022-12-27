// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

// All of this shit is for the SearchBar.vue which is currently not in use! Idk why, but the code below breaks whenever the SearchBar.vue is included into the layouts (Default, FrontPage, and StuffIUse). I commented it out because, idk might make things faster 🤷‍♂️

// const fs = require('fs');
// const path = require('path');
// const pick = require('lodash.pick');
// const flatten = require('lodash.flatten');

module.exports = function (api, options) {
  api.loadSource(store => {
    // Use the Data store API here: https://gridsome.org/docs/data-store-api
  })

//   api.beforeBuild(({ config, store }) => {
//     const searchContents = contentType => {
//       const { collection } = store.getCollection(contentType);
//       const searchResultsJSON = collection.data.map(post => {
//         return pick(post, ['title', 'path', 'description', 'category']);
//       });
//       return searchResultsJSON
//     }
//     
//     const searchResultsJSON = flatten(['Blog', 'SiriShortcuts', 'Portfolio'].map(searchContents))
//     
//     const output = {
//       dir: './static',
//       name: 'search.json',
//       ...options.output
//     }
// 
//     const outputPath = path.resolve(process.cwd(), output.dir)
//     const outputPathExists = fs.existsSync(outputPath)
//     const fileName = output.name.endsWith('.json')
//       ? output.name
//       : `${output.name}.json`
// 
//     if (outputPathExists) {
//       fs.writeFileSync(path.resolve(process.cwd(), output.dir, fileName), JSON.stringify(searchResultsJSON))
//     } else {
//       fs.mkdirSync(outputPath)
//       fs.writeFileSync(path.resolve(process.cwd(), output.dir, fileName), JSON.stringify(searchResultsJSON))
//     }
//   })
  
  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}

