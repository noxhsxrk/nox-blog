!function(e,t,n,o,r){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s="function"==typeof i[o]&&i[o],l=s.cache||{},a="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function u(t,n){if(!l[t]){if(!e[t]){var r="function"==typeof i[o]&&i[o];if(!n&&r)return r(t,!0);if(s)return s(t,!0);if(a&&"string"==typeof t)return a(t);var p=new Error("Cannot find module '"+t+"'");throw p.code="MODULE_NOT_FOUND",p}f.resolve=function(n){var o=e[t][1][n];return null!=o?o:n},f.cache={};var d=l[t]=new u.Module(t);e[t][0].call(d.exports,f,d,d.exports,this)}return l[t].exports;function f(e){var t=f.resolve(e);return!1===t?{}:u(t)}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=l,u.parent=s,u.register=function(t,n){e[t]=[function(e,t){t.exports=n},{}]},Object.defineProperty(u,"root",{get:function(){return i[o]}}),i[o]=u;for(var p=0;p<t.length;p++)u(t[p]);if(n){var d=u(n);"object"==typeof exports&&"undefined"!=typeof module?module.exports=d:"function"==typeof define&&define.amd&&define((function(){return d}))}}({jYWDk:[function(e,t,n){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(n);e("dotenv/config");var o=e("d1606f50d8a53f16").resolve(__dirname,"../..");const r={siteMetadata:{siteTitle:"Nox's Personal Dev Blog",siteTitleAlt:"Nox's Personal Dev Blog",siteHeadline:"Nox's Personal Dev Blog",siteImage:"/banner.jpg",siteLanguage:"th",author:"@noxhsxrk"},trailingSlash:"always",plugins:["gatsby-plugin-pnpm",{resolve:"@lekoarts/gatsby-theme-minimal-blog",options:{navigation:[{title:"Blog",slug:"/blog"},{title:"About",slug:"/about"}]}},{resolve:"gatsby-plugin-sitemap",options:{output:"/"}},{resolve:"gatsby-plugin-manifest",options:{name:"Nox's Personal Dev Blog",short_name:"Nox's Personal Dev Blog",description:"Nox's Personal Dev Blog",start_url:"/",background_color:"#fff",display:"standalone",icons:[{src:"/android-chrome-192x192.png",sizes:"192x192",type:"image/png"},{src:"/android-chrome-512x512.png",sizes:"512x512",type:"image/png"}]}},{resolve:"gatsby-plugin-feed",options:{query:"\n          {\n            site {\n              siteMetadata {\n                title: siteTitle\n                description: siteDescription\n                siteUrl\n                site_url: siteUrl\n              }\n            }\n          }\n        ",feeds:[{serialize:({query:{site:e,allPost:t}})=>t.nodes.map((t=>{const n=e.siteMetadata.siteUrl+t.slug,o=`<p>${t.excerpt}</p><div style="margin-top: 50px; font-style: italic;"><strong><a href="${n}">Keep reading</a>.</strong></div><br /> <br />`;return{title:t.title,date:t.date,excerpt:t.excerpt,url:n,guid:n,custom_elements:[{"content:encoded":o}]}})),query:'{\n  allPost(sort: {date: DESC}) {\n    nodes {\n      title\n      date(formatString: "MMMM D, YYYY")\n      excerpt\n      slug\n    }\n  }\n}',output:"rss.xml",title:"Minimal Blog - @lekoarts/gatsby-theme-minimal-blog"}]}},process.env.ANALYSE_BUNDLE&&{resolve:"gatsby-plugin-webpack-statoscope",options:{saveReportTo:`${o}/public/.statoscope/_bundle.html`,saveStatsTo:`${o}/public/.statoscope/_stats.json`,open:!1}}].filter(Boolean)};n.default=r},{d1606f50d8a53f16:"path","dotenv/config":"dotenv/config",path:"path","@parcel/transformer-js/src/esmodule-helpers.js":"8Yakm"}],"8Yakm":[function(e,t,n){n.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},n.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.exportAll=function(e,t){return Object.keys(e).forEach((function(n){"default"===n||"__esModule"===n||t.hasOwnProperty(n)||Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[n]}})})),t},n.export=function(e,t,n){Object.defineProperty(e,t,{enumerable:!0,get:n})}},{}]},["jYWDk"],"jYWDk","parcelRequirea2a1");
//# sourceMappingURL=gatsby-config.js.map