(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{13:function(t,e,a){},34:function(t,e,a){},58:function(t,e,a){"use strict";a.r(e);var c=a(1),n=a(0),i=a.n(n),s=a(27),r=a.n(s),j=(a(34),a(11)),l=a(10),d=a.n(l),h=a(8),o=(a(13),a.p+"static/media/man.6d2ad1b9.jpg");var b=function(){var t=Object(n.useState)([]),e=Object(j.a)(t,2),a=e[0],i=e[1];return Object(n.useEffect)((function(){d.a.get("http://localhost/api/front/title").then((function(t){null!=t.data.result&&i(t.data.result)}))}),[]),Object(c.jsxs)("header",{className:"page-header wrapper",children:[Object(c.jsx)("h1",{children:Object(c.jsx)("a",{href:"/",children:Object(c.jsx)("figure",{children:Object(c.jsx)("img",{className:"logo",src:o,alt:"\ub098\ub9cc\uc758 \ud648 \ud398\uc774\uc9c0"})})})}),Object(c.jsx)("nav",{className:"header-nav",children:Object(c.jsx)("ul",{className:"main-nav",children:a.map((function(t){return Object(c.jsx)("li",{children:Object(c.jsx)(h.b,{to:"/find"+t.targetPath,children:t.targetName})},t.targetPath)}))})})]})},f=function(t){var e=t.match,a=Object(n.useState)([]),i=Object(j.a)(a,2),s=i[0],r=i[1];return console.log(e.params.name),Object(n.useEffect)((function(){d.a.get("http://localhost/api/front/title").then((function(t){null!=t.data.result&&r(t.data.result)}))}),[]),console.log(e.params.name),Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"home-find",children:[Object(c.jsx)("h1",{children:e.params.name}),Object(c.jsxs)("div",{className:"home-menu",children:[Object(c.jsxs)("select",{name:"pets",id:"pet-select",children:[Object(c.jsx)("option",{value:"",children:"\uc804\uccb4"}),s.map((function(t){return Object(c.jsx)("option",{value:t.targetName,children:t.targetName})}))]}),Object(c.jsx)("input",{type:"text"}),Object(c.jsx)("button",{})]})]})})},O=a(2),m=a.p+"static/media/gopher.a7f408a7.gif",u=a.p+"static/media/javascript.342cba1c.gif",g=a.p+"static/media/database.59304a56.gif",x=a.p+"static/media/html.2f90921d.gif",p=a.p+"static/media/server.fab77e1d.gif",v=function(){var t=Object(n.useState)([]),e=Object(j.a)(t,2),a=e[0],i=e[1];return Object(n.useEffect)((function(){d.a.get("http://localhost/api/front/title").then((function(t){null!=t.data.result&&i(t.data.result)}))}),[]),Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("nav",{children:Object(c.jsx)("ul",{className:"home-nav",children:a.map((function(t){return"GOLANG"===t.targetName?Object(c.jsx)("li",{children:Object(c.jsx)(h.b,{to:"/find"+t.targetPath,children:Object(c.jsx)("img",{className:"gif-contain",src:m,alt:"profile"})})},t.targetPath):"JavaScript"===t.targetName?Object(c.jsx)("li",{children:Object(c.jsx)(h.b,{to:"/find"+t.targetPath,children:Object(c.jsx)("img",{className:"gif-contain",src:u,alt:"profile"})})},t.targetPath):"DataBase"===t.targetName?Object(c.jsx)("li",{children:Object(c.jsx)(h.b,{to:"/find"+t.targetPath,children:Object(c.jsx)("img",{className:"gif-contain",src:g,alt:"profile"})})},t.targetPath):"HTML&CSS"===t.targetName?Object(c.jsx)("li",{children:Object(c.jsx)(h.b,{to:"/find"+t.targetPath,children:Object(c.jsx)("img",{className:"gif-contain",src:x,alt:"profile"})})},t.targetPath):Object(c.jsx)("li",{children:Object(c.jsx)(h.b,{to:"/find"+t.targetPath,children:Object(c.jsx)("img",{className:"gif-contain",src:p,alt:"profile"})})},t.targetPath)}))})})})};var N=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(b,{}),Object(c.jsxs)("div",{className:"news-contents wrapper",children:[Object(c.jsx)("aside",{}),Object(c.jsxs)("article",{children:[Object(c.jsx)(O.a,{exact:!0,path:"/",component:v}),Object(c.jsx)(O.a,{path:"/find",exact:!0,render:function(){return Object(c.jsx)("div",{children:"\uc720\uc800\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694."})}}),Object(c.jsx)(O.a,{path:"/find/:name",component:f})]})]})]})},P=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,59)).then((function(e){var a=e.getCLS,c=e.getFID,n=e.getFCP,i=e.getLCP,s=e.getTTFB;a(t),c(t),n(t),i(t),s(t)}))};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(h.a,{children:Object(c.jsx)(N,{})})}),document.getElementById("root")),P()}},[[58,1,2]]]);
//# sourceMappingURL=main.08a6ce60.chunk.js.map