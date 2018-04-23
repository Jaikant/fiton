var plugins = [{
      plugin: require('/Users/jai/work/guides/consulting/tech47/node_modules/gatsby-plugin-typography/gatsby-ssr.js'),
      options: {"plugins":[],"pathToConfigModule":"src/utils/typography.js"},
    },{
      plugin: require('/Users/jai/work/guides/consulting/tech47/node_modules/gatsby-plugin-google-analytics/gatsby-ssr.js'),
      options: {"plugins":[],"trackingId":""},
    },{
      plugin: require('/Users/jai/work/guides/consulting/tech47/node_modules/gatsby-remark-autolink-headers/gatsby-ssr.js'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/jai/work/guides/consulting/tech47/node_modules/gatsby-plugin-emotion/gatsby-ssr.js'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/jai/work/guides/consulting/tech47/node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/jai/work/guides/consulting/tech47/node_modules/gatsby-plugin-sitemap/gatsby-ssr.js'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  let results = plugins.map(plugin => {
    if (plugin.plugin[api]) {
      const result = plugin.plugin[api](args, plugin.options)
      return result
    }
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
