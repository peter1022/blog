(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return s}));var n=a("q1tI"),l=a.n(n),o=a("Wbzz"),r=a("6Gk8"),i=a("Bl7J"),c=a("vrFN"),m=a("p3AD"),d=a("/zyf");t.default=function(e){var t=e.data,a=e.location,n=t.site.siteMetadata.title,s=t.allMarkdownRemark.edges,u=Object(d.useForm)({id:"blog-index-styles",label:"Blog Styles",initialValues:{backgroundColor:"",hideBio:!1,date:"2019 03 04",thumbnail:"https://images.unsplash.com/photo-1518259102261-b40117eabbc9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"},fields:[{name:"backgroundColor",label:"Heading Color",component:"color",colorFormat:"HeX"},{name:"hideBio",label:"Hide Bio",component:"toggle"},{name:"date",label:"Date",component:"date",dateFormat:"YYYY MM DD",timeFormat:null}],onSubmit:function(){alert("Saving doesn't do anything.")}}),b=(u[0],u[1]);return Object(d.useFormScreenPlugin)(b),l.a.createElement(i.a,{location:a,title:n},l.a.createElement(c.a,{title:"All posts"}),l.a.createElement(r.a,null),s.map((function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return l.a.createElement("article",{key:t.fields.slug},l.a.createElement("header",null,l.a.createElement("h3",{style:{marginBottom:Object(m.a)(1/4)}},l.a.createElement(o.Link,{style:{boxShadow:"none"},to:t.fields.slug},a)),l.a.createElement("small",null,t.frontmatter.date)),l.a.createElement("section",null,l.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}})))})))};var s="173509685"}}]);
//# sourceMappingURL=component---src-pages-index-js-031d95a9cecaa43c1330.js.map