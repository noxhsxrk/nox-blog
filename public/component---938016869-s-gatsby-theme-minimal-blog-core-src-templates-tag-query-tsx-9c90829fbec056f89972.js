"use strict";(self.webpackChunknox_blog=self.webpackChunknox_blog||[]).push([[406],{668:function(e,t,n){n.r(t),n.d(t,{Head:function(){return u},default:function(){return d}});var a=n(758),r=n(9396),l=n(5373),i=n(8960),o=n(1345),s=n(4952),c=n(7893),m=n(7535),g=n(7894);var p=e=>{let{posts:t,pageContext:n}=e;const{tagsPath:a,basePath:g}=(0,s.A)();return(0,r.Y)(o.A,null,(0,r.Y)(l.so,{sx:{alignItems:"center",justifyContent:"space-between",flexFlow:"wrap"}},(0,r.Y)(l.DZ,{as:"h1",variant:"styles.h1",sx:{marginY:2}},n.name),(0,r.Y)(i.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a,variant:"links.secondary",marginY:2}},to:(0,m.A)(`/${g}/${a}`)},"View all tags")),(0,r.Y)(c.A,{posts:t,sx:{mt:[4,5]}}))};const u=e=>{let{pageContext:t}=e;return(0,r.Y)(g.A,{title:`Tag: ${t.name}`})};var d=function(e){let{...t}=e;const{data:{allPost:n}}=t;return a.createElement(p,Object.assign({posts:n.nodes},t))}},8944:function(e,t,n){var a=n(9396),r=n(758),l=n(8960),i=n(4952),o=n(7535);t.A=e=>{let{tags:t}=e;const{tagsPath:n,basePath:s}=(0,i.A)();return(0,a.Y)(r.Fragment,null,t.map(((e,t)=>(0,a.Y)(r.Fragment,{key:e.slug},!!t&&", ",(0,a.Y)(l.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,o.A)(`/${s}/${n}/${e.slug}`)},e.name)))))}},7893:function(e,t,n){n.d(t,{A:function(){return c}});var a=n(9396),r=n(758),l=n(5373),i=n(8960),o=n(8944);var s=e=>{let{post:t,showTags:n=!0}=e;return(0,a.Y)(l.az,{mb:4},(0,a.Y)(i.Link,{to:t.slug,sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a,fontSize:[1,2,3],color:"text"}}},t.title),(0,a.Y)("p",{sx:{color:"secondary",mt:1,a:{color:"secondary"},fontSize:[1,1,2]}},(0,a.Y)("time",null,t.date),t.tags&&n&&(0,a.Y)(r.Fragment,null," — ",(0,a.Y)(o.A,{tags:t.tags}))))};var c=e=>{let{posts:t,className:n="",showTags:r=!0}=e;return(0,a.Y)("section",{sx:{mb:[5,6,7]},className:n},t.map((e=>(0,a.Y)(s,{key:e.slug,post:e,showTags:r}))))}},7894:function(e,t,n){var a=n(758),r=n(8960),l=n(4824);t.A=e=>{let{title:t="",description:n="",pathname:i="",image:o="",children:s=null,canonicalUrl:c=""}=e;const m=(0,l.A)(),{siteTitle:g,siteTitleAlt:p,siteUrl:u,siteDescription:d,siteImage:h,author:f,siteLanguage:E}=m,x={title:t?`${t} | ${g}`:p,description:n||d,url:`${u}${i||""}`,image:`${u}${o||h}`};return a.createElement(a.Fragment,null,a.createElement("html",{lang:E}),a.createElement("title",null,x.title),a.createElement("meta",{name:"description",content:x.description}),a.createElement("meta",{name:"image",content:x.image}),a.createElement("meta",{property:"og:title",content:x.title}),a.createElement("meta",{property:"og:url",content:x.url}),a.createElement("meta",{property:"og:description",content:x.description}),a.createElement("meta",{property:"og:image",content:x.image}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:image:alt",content:x.description}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:title",content:x.title}),a.createElement("meta",{name:"twitter:url",content:x.url}),a.createElement("meta",{name:"twitter:description",content:x.description}),a.createElement("meta",{name:"twitter:image",content:x.image}),a.createElement("meta",{name:"twitter:image:alt",content:x.description}),a.createElement("meta",{name:"twitter:creator",content:f}),a.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,r.withPrefix)("/favicon-32x32.png")}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,r.withPrefix)("/favicon-16x16.png")}),a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,r.withPrefix)("/apple-touch-icon.png")}),c?a.createElement("link",{rel:"canonical",href:c}):null,s)}}}]);
//# sourceMappingURL=component---938016869-s-gatsby-theme-minimal-blog-core-src-templates-tag-query-tsx-9c90829fbec056f89972.js.map