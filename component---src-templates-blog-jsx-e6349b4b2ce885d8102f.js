(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{135:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return u});var a=n(0),r=n.n(a),i=n(142),c=n(149),l=n(152);t.default=function(e){var t=e.data.markdownRemark;return r.a.createElement(c.a,{title:t.frontmatter.title},r.a.createElement("h3",null,"By ",t.frontmatter.author," on ",t.frontmatter.date),r.a.createElement(l.a,{html:t.html}),r.a.createElement(i.Link,{to:"/blog"},"⬅ Back to Blog"))};var u="1153215342"},142:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(4),c=n.n(i),l=n(141),u=n.n(l);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var o=n(143),s=n.n(o);n.d(t,"PageRenderer",function(){return s.a});var d=n(35);n.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),f=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},143:function(e,t,n){var a;e.exports=(a=n(147))&&a.default||a},144:function(e,t,n){"use strict";n(34);var a=n(146),r=n.n(a),i=n(0),c=n.n(i);t.a=function(e){var t=e.children,n=r()(e,["children"]);return c.a.createElement("a",Object.assign({target:"_blank",rel:"noopener noreferrer"},n),t)}},145:function(e,t,n){},147:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),i=n(4),c=n.n(i),l=n(49),u=n(2),o=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};o.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=o},148:function(e,t,n){e.exports=n.p+"static/logo-df13ca95024f318881e91721d9086a33.png"},149:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(150),c=n.n(i),l=(n(151),n(145),n(142)),u=(n(48),n(144)),o=["about","blog","projects","team"],s=function(){return r.a.createElement("ul",{id:"main-menu"},o.map(function(e,t){return r.a.createElement("li",{key:e},r.a.createElement(l.Link,{to:t?e:"/"},e))}),r.a.createElement("li",null,r.a.createElement(u.a,{href:"https://github.com/lncm"},"github")))},d=n(148),m=n.n(d),f=function(){return r.a.createElement("header",{id:"main-header"},r.a.createElement(l.Link,{to:"/"},r.a.createElement("img",{src:m.a,alt:"LNCM Logo",className:"logo"})),r.a.createElement("h1",null,"LNCM",r.a.createElement("br",null),r.a.createElement("small",null,"Lightning Network Chiang Mai")),r.a.createElement(s,null))};t.a=function(e){var t=e.children,n=e.title;return r.a.createElement("div",{id:"layout-container"},r.a.createElement(c.a,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,"LNCM"),r.a.createElement("link",{rel:"description",href:"Lightning Network Chiang Mai"})),r.a.createElement(f,null),n&&r.a.createElement("h2",null,n),r.a.createElement("div",{className:"content"},t))}},152:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.html;return r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}})}}}]);
//# sourceMappingURL=component---src-templates-blog-jsx-e6349b4b2ce885d8102f.js.map