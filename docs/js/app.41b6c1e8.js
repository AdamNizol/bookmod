(function(e){function n(n){for(var t,u,s=n[0],i=n[1],g=n[2],c=0,d=[];c<s.length;c++)u=s[c],r[u]&&d.push(r[u][0]),r[u]=0;for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t]);l&&l(n);while(d.length)d.shift()();return a.push.apply(a,g||[]),o()}function o(){for(var e,n=0;n<a.length;n++){for(var o=a[n],t=!0,s=1;s<o.length;s++){var i=o[s];0!==r[i]&&(t=!1)}t&&(a.splice(n--,1),e=u(u.s=o[0]))}return e}var t={},r={app:0},a=[];function u(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,u),o.l=!0,o.exports}u.m=e,u.c=t,u.d=function(e,n,o){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(u.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)u.d(o,t,function(n){return e[n]}.bind(null,t));return o},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=n,s=s.slice();for(var g=0;g<s.length;g++)n(s[g]);var l=i;a.push([0,"chunk-vendors"]),o()})({0:function(e,n,o){e.exports=o("56d7")},"56d7":function(e,n,o){"use strict";o.r(n);o("cadf"),o("551c"),o("f751"),o("097d");var t=o("2b0e"),r=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",{attrs:{id:"app"}},[o("Book")],1)},a=[],u=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",{class:e.$style["bookContainer"]},[o("div",{class:e.$style["book"]},[o("div",{class:e.$style["innerSpine"]}),o("div",{class:e.$style["topMenu"]},[o("img",{class:e.$style["turnPgRight"],attrs:{src:"https://i.imgur.com/9X5NVWj.png"},on:{click:function(n){return e.turnPage("right")}}}),o("div",{class:e.$style["pageCounter"]},[o("p",[e._v(e._s(e.currentPage+1)+"/"+e._s(e.pages.length+1))])]),o("img",{class:e.$style["turnPgLeft"],attrs:{src:"https://i.imgur.com/YdhV0NU.png"},on:{click:function(n){return e.turnPage("left")}}})]),o("div",{class:e.$style["pages"]},[e._l(e.pages.slice().reverse(),function(n,t){return[o("div",{ref:"pageRef",refInFor:!0,class:e.$style["page"],style:"z-index: "+t+";"},[o("div",{class:e.$style["pageFront"],style:"z-index: "+(e.pages.length+1)+";"},[o("p",[e._v(e._s(n.front))])]),o("div",{class:e.$style["pageBack"],style:"z-index: "+(e.pages.length-(t+1))+";"},[o("p",[e._v(e._s(n.back))])])])]})],2)])])},s=[],i={components:{},data:function(){var e=["We're no strangers to love\nYou know the rules and so do I\nA full commitment's what I'm thinking of\nYou wouldn't get this from any other guy\n\nI just wanna tell you how I'm feeling\nGotta make you understand","Never gonna give you up\nNever gonna let you down\nNever gonna run around and desert you\nNever gonna make you cry\nNever gonna say goodbye\nNever gonna tell a lie and hurt you","We've known each other for so long\nYour heart's been aching, but\nYou're too shy to say it\nInside, we both know what's been going on\nWe know the game and we're gonna play it\n\nAnd if you ask me how I'm feeling\nDon't tell me you're too blind to see","Never gonna give you up\nNever gonna let you down\nNever gonna run around and desert you\nNever gonna make you cry\nNever gonna say goodbye\nNever gonna tell a lie and hurt you","Never gonna give you up\nNever gonna let you down\nNever gonna run around and desert you\nNever gonna make you cry\nNever gonna say goodbye\nNever gonna tell a lie and hurt you","(Ooh, give you up)\n(Ooh, give you up)\nNever gonna give, never gonna give\n(Give you up)\nNever gonna give, never gonna give\n(Give you up)","We've known each other for so long\nYour heart's been aching, but\nYou're too shy to say it\nInside, we both know what's been going on\nWe know the game and we're gonna play it\n\nI just wanna tell you how I'm feeling\nGotta make you understand","Never gonna give you up\nNever gonna let you down\nNever gonna run around and desert you\nNever gonna make you cry\nNever gonna say goodbye\nNever gonna tell a lie and hurt you","Never gonna give you up\nNever gonna let you down\nNever gonna run around and desert you\nNever gonna make you cry\nNever gonna say goodbye\nNever gonna tell a lie and hurt you","Never gonna give you up\nNever gonna let you down\nNever gonna run around and desert you\nNever gonna make you cry\nNever gonna say goodbye\nNever gonna tell a lie and hurt you"],n=[];e.length%2!=0&&e.push("");for(var o=0;o<e.length/2;o++)n.push({front:e[2*o],back:e[2*o+1]});return{pages:n,currentPage:0}},methods:{boop:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"boop";console.log(e)},turnPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"left",n=this.$refs.pageRef.slice().reverse();switch(e){case"left":if(this.currentPage<this.pages.length){var o=n[this.currentPage];if(this.currentPage>0){var t=n[this.currentPage-1];t.style.zIndex=this.currentPage,Velocity(t,"finish")}Velocity(o,"stop"),Velocity(o,{rotateY:"-180deg"},800),this.currentPage++,o.style.zIndex=this.pages.length}break;case"right":if(this.currentPage>0){var r=n[this.currentPage-1];if(this.currentPage<this.pages.length){var a=n[this.currentPage];Velocity(a,"finish")}Velocity(r,"stop"),Velocity(r,{rotateY:"0deg"},800),this.currentPage--,r.style.zIndex=this.pages.length}break}}},mounted:function(){}},g=i,l=o("60df"),c=o("2877");function d(e){this["$style"]=l["default"].locals||l["default"]}var v=Object(c["a"])(g,u,s,!1,d,null,null),y=v.exports,p={name:"app",components:{Book:y}},h=p,f=(o("7c55"),Object(c["a"])(h,r,a,!1,null,null,null)),b=f.exports,k=o("2f62");t["a"].use(k["a"]);var m=new k["a"].Store({state:{},mutations:{},actions:{}});o("589d");t["a"].config.productionTip=!1,new t["a"]({store:m,render:function(e){return e(b)}}).$mount("#app")},"5c48":function(e,n,o){},"60df":function(e,n,o){"use strict";var t=o("9b60"),r=o.n(t);n["default"]=r.a},"7c55":function(e,n,o){"use strict";var t=o("5c48"),r=o.n(t);r.a},"9b60":function(e,n,o){e.exports={innerSpine:"Book_innerSpine_2sliX",bookContainer:"Book_bookContainer_JZCNs",book:"Book_book_yQVqO",pages:"Book_pages_2D9UU",page:"Book_page_2Xq7D",pageBack:"Book_pageBack_2Q5OI",pageFront:"Book_pageFront_1Rhd1",topMenu:"Book_topMenu_2vadj",pageCounter:"Book_pageCounter_1WkA6"}}});
//# sourceMappingURL=app.41b6c1e8.js.map