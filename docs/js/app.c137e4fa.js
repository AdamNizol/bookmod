(function(t){function e(e){for(var o,u,i=e[0],c=e[1],s=e[2],f=0,p=[];f<i.length;f++)u=i[f],r[u]&&p.push(r[u][0]),r[u]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);l&&l(e);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(a.splice(e--,1),t=u(u.s=n[0]))}return t}var o={},r={app:0},a=[];function u(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=o,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)u.d(n,o,function(e){return t[e]}.bind(null,o));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Book")],1)},a=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style["bookContainer"]},[n("div",{class:t.$style["book"]},[n("div",{class:t.$style["topMenu"]},[n("img",{class:t.$style["turnPgRight"],attrs:{src:"https://i.imgur.com/6lD73vx.png"},on:{click:function(e){return t.turnPage("right")}}}),n("img",{class:t.$style["turnPgLeft"],attrs:{src:"https://i.imgur.com/43ePFH7.png"},on:{click:function(e){return t.turnPage("left")}}})]),n("div",{class:t.$style["pages"]},[t._l(t.pages,function(e,o){return[n("div",{ref:"pageRef",refInFor:!0,class:t.$style["page"]})]})],2)])])},i=[],c={components:{},data:function(){var t=[1,2,3];return{pages:t}},methods:{turnPage:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"left";console.log("turning the page "+t);var e=this.$refs.pageRef[0];switch(t){case"left":Velocity(e,"stop"),Velocity(e,{rotateY:"-180deg"},500);break;case"right":Velocity(e,"stop"),Velocity(e,{rotateY:"0deg"},500);break}}},mounted:function(){}},s=c,l=n("60df"),f=n("2877");function p(t){this["$style"]=l["default"].locals||l["default"]}var d=Object(f["a"])(s,u,i,!1,p,null,null),g=d.exports,v={name:"app",components:{Book:g}},b=v,h=(n("7c55"),Object(f["a"])(b,r,a,!1,null,null,null)),y=h.exports,m=n("2f62");o["a"].use(m["a"]);var _=new m["a"].Store({state:{},mutations:{},actions:{}});n("589d");o["a"].config.productionTip=!1,new o["a"]({store:_,render:function(t){return t(y)}}).$mount("#app")},"5c48":function(t,e,n){},"60df":function(t,e,n){"use strict";var o=n("9b60"),r=n.n(o);e["default"]=r.a},"7c55":function(t,e,n){"use strict";var o=n("5c48"),r=n.n(o);r.a},"9b60":function(t,e,n){t.exports={bookContainer:"Book_bookContainer_JZCNs",book:"Book_book_yQVqO",pages:"Book_pages_2D9UU",page:"Book_page_2Xq7D",topMenu:"Book_topMenu_2vadj"}}});
//# sourceMappingURL=app.c137e4fa.js.map