var plugins = [{
      name: 'gatsby-plugin-theme-ui',
      plugin: require('/Users/noxhsxrk/playground/nox-blog/node_modules/.pnpm/gatsby-plugin-theme-ui@0.15.7_@emotion+react@11.11.4_@types+react@18.3.3_react@18.3.1__@mdx-j_bsqo2fhh5ew22ta6yjy5pp7npq/node_modules/gatsby-plugin-theme-ui/gatsby-ssr.js'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-sitemap',
      plugin: require('/Users/noxhsxrk/playground/nox-blog/node_modules/.pnpm/gatsby-plugin-sitemap@6.13.1_gatsby@5.13.6_@types+webpack@5.28.5_babel-eslint@10.1.0_eslint@7_i7h5unovpvkymn72oliq6sl3sq/node_modules/gatsby-plugin-sitemap/gatsby-ssr.js'),
      options: {"plugins":[],"output":"/","createLinkInHead":true,"entryLimit":45000,"query":"{ site { siteMetadata { siteUrl } } allSitePage { nodes { path } } }","excludes":[]},
    },{
      name: 'gatsby-plugin-manifest',
      plugin: require('/Users/noxhsxrk/playground/nox-blog/node_modules/.pnpm/gatsby-plugin-manifest@5.13.1_gatsby@5.13.6_@types+webpack@5.28.5_babel-eslint@10.1.0_eslint@_r54papxovyw5fwjqofi345neza/node_modules/gatsby-plugin-manifest/gatsby-ssr.js'),
      options: {"plugins":[],"name":"Nox's Personal Dev Blog","short_name":"Nox's Personal Dev Blog","description":"Nox's Personal Dev Blog","start_url":"/","background_color":"#fff","display":"standalone","icons":[{"src":"/android-chrome-192x192.png","sizes":"192x192","type":"image/png"},{"src":"/android-chrome-512x512.png","sizes":"512x512","type":"image/png"}],"legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":null},
    },{
      name: 'gatsby-plugin-feed',
      plugin: require('/Users/noxhsxrk/playground/nox-blog/node_modules/.pnpm/gatsby-plugin-feed@5.13.1_gatsby@5.13.6_@types+webpack@5.28.5_babel-eslint@10.1.0_eslint@7.32_rzgeridpc3m75f2mdbnf4hxnai/node_modules/gatsby-plugin-feed/gatsby-ssr.js'),
      options: {"plugins":[],"query":"\n          {\n            site {\n              siteMetadata {\n                title: siteTitle\n                description: siteDescription\n                siteUrl\n                site_url: siteUrl\n              }\n            }\n          }\n        ","feeds":[{"query":"{\n  allPost(sort: {date: DESC}) {\n    nodes {\n      title\n      date(formatString: \"MMMM D, YYYY\")\n      excerpt\n      slug\n    }\n  }\n}","output":"rss.xml","title":"Minimal Blog - @lekoarts/gatsby-theme-minimal-blog"}]},
    },{
      name: 'partytown',
      plugin: require('/Users/noxhsxrk/playground/nox-blog/node_modules/.pnpm/gatsby@5.13.6_@types+webpack@5.28.5_babel-eslint@10.1.0_eslint@7.32.0__react-dom@18.3.1_react_5zuxzdpefhnx3jlgdhjb6ajuti/node_modules/gatsby/dist/internal-plugins/partytown/gatsby-ssr.js'),
      options: {"plugins":[]},
    }]
/* global plugins */
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

function augmentErrorWithPlugin(plugin, err) {
  if (plugin.name !== `default-site-plugin`) {
    // default-site-plugin is user code and will print proper stack trace,
    // so no point in annotating error message pointing out which plugin is root of the problem
    err.message += ` (from plugin: ${plugin.name})`
  }

  throw err
}

export function apiRunner(api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  const results = []
  plugins.forEach(plugin => {
    const apiFn = plugin.plugin[api]
    if (!apiFn) {
      return
    }

    try {
      const result = apiFn(args, plugin.options)

      if (result && argTransform) {
        args = argTransform({ args, result })
      }

      // This if case keeps behaviour as before, we should allow undefined here as the api is defined
      // TODO V4
      if (typeof result !== `undefined`) {
        results.push(result)
      }
    } catch (e) {
      augmentErrorWithPlugin(plugin, e)
    }
  })

  return results.length ? results : [defaultReturn]
}

export async function apiRunnerAsync(api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  const results = []
  for (const plugin of plugins) {
    const apiFn = plugin.plugin[api]
    if (!apiFn) {
      continue
    }

    try {
      const result = await apiFn(args, plugin.options)

      if (result && argTransform) {
        args = argTransform({ args, result })
      }

      // This if case keeps behaviour as before, we should allow undefined here as the api is defined
      // TODO V4
      if (typeof result !== `undefined`) {
        results.push(result)
      }
    } catch (e) {
      augmentErrorWithPlugin(plugin, e)
    }
  }

  return results.length ? results : [defaultReturn]
}
