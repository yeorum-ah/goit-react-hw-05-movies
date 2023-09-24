/*! For license information please see 853.f0a3d224.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[853],{853:function(t,e,r){r.r(e),r.d(e,{default:function(){return E}});var n,o,i,a,c,u,s,l=r(683),h=r(439),f=r(689),p=r(87),d=r(26),v=r(791),g=r(168),y=r(867),m=y.ZP.h2(n||(n=(0,g.Z)(["\n  margin: 0;\n"]))),x=y.ZP.div(o||(o=(0,g.Z)(["\n  display: flex;\n  padding: 20px;\n  border-bottom: solid 1px grey;\n"]))),w=y.ZP.div(i||(i=(0,g.Z)(["\n  padding: 20px 40px;\n"]))),b=y.ZP.ul(a||(a=(0,g.Z)(["\n  list-style: none;\n  display: flex;\n  padding: 0;\n  gap: 16px;\n"]))),j=y.ZP.button(c||(c=(0,g.Z)(["\n  margin-top: 16px;\n  padding: 8px 16px;\n  border-radius: 4px;\n  border: none;\n  margin-bottom: 10px;\n  font-weight: 500;\n  color: white;\n  background-color:#e8f2e2;\n  &:hover {\n    background-color: #63c5da;\n  }\n"]))),L=(0,y.ZP)(p.rU)(u||(u=(0,g.Z)(["\n  display: flex;\n  font-size: 14px;\n  align-items: center;\n  column-gap: 10px;\n  color: black;\n  text-decoration:none;\n"]))),_=y.ZP.div(s||(s=(0,g.Z)(["\n  padding: 20px;\n  border-bottom: solid 1px grey;\n"]))),k=r(617),Z=r(184),E=function(){var t,e,r=(0,v.useState)({}),n=(0,h.Z)(r,2),o=n[0],i=n[1],a=(0,f.TH)(),c=(0,f.UO)().movieId;(0,v.useEffect)((function(){(0,d.TP)(c).then((function(t){return i(t)}))}),[c]);var u=o.original_title,s=o.overview,g=o.genres,y=o.poster_path,E=(10*o.vote_average).toFixed(2);return(0,Z.jsxs)("main",{children:[(0,Z.jsx)(j,{type:"button",children:(0,Z.jsxs)(L,{to:null!==(t=null===(e=a.state)||void 0===e?void 0:e.from)&&void 0!==t?t:"/",children:[(0,Z.jsx)(k.siY,{size:16}),"Go back"]})}),(0,Z.jsxs)(x,{children:[(0,Z.jsx)("img",{src:y?"https://image.tmdb.org/t/p/w300".concat(y):"http://www.suryalaya.org/images/no_image.jpg",width:320,height:380,loading:"lazy",alt:"poster"}),(0,Z.jsxs)(w,{children:[(0,Z.jsx)(m,{children:u}),(0,Z.jsxs)("h3",{children:["User score: ",E,"%"]}),(0,Z.jsx)("h3",{children:"Overview"}),(0,Z.jsxs)("p",{children:[s," "]}),(0,Z.jsx)("h3",{children:"Genres"}),(0,Z.jsx)(b,{children:g&&g.length&&g.map((function(t){var e=t.id,r=t.name;return(0,Z.jsx)("li",{children:r},e)}))})]})]}),(0,Z.jsxs)(_,{children:[(0,Z.jsx)("h4",{children:"Additional information"}),(0,Z.jsxs)("ul",{children:[(0,Z.jsx)("li",{children:(0,Z.jsx)(p.rU,{to:"cast",state:(0,l.Z)({},a.state),children:"Cast"})}),(0,Z.jsxs)("li",{children:[" ",(0,Z.jsx)(p.rU,{to:"reviews",state:(0,l.Z)({},a.state),children:"Reviews"})]})]})]}),(0,Z.jsx)(f.j3,{})]})}},26:function(t,e,r){r.d(e,{Hg:function(){return c},Jh:function(){return h},TP:function(){return s},z1:function(){return u},zv:function(){return l}});var n=r(861),o=r(243);function i(){i=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var i=e&&e.prototype instanceof y?e:y,a=Object.create(i.prototype),c=new S(n||[]);return o(a,"_invoke",{value:Z(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var p="suspendedStart",d="executing",v="completed",g={};function y(){}function m(){}function x(){}var w={};l(w,c,(function(){return this}));var b=Object.getPrototypeOf,j=b&&b(b(G([])));j&&j!==r&&n.call(j,c)&&(w=j);var L=x.prototype=y.prototype=Object.create(w);function _(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function Z(e,r,n){var o=p;return function(i,a){if(o===d)throw new Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=E(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var s=f(e,r,n);if("normal"===s.type){if(o=n.done?v:"suspendedYield",s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=v,n.method="throw",n.arg=s.arg)}}}function E(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,E(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=f(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function G(e){if(e||""===e){var r=e[c];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(typeof e+" is not iterable")}return m.prototype=x,o(L,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:m,configurable:!0}),m.displayName=l(x,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,l(t,s,"GeneratorFunction")),t.prototype=Object.create(L),t},e.awrap=function(t){return{__await:t}},_(k.prototype),l(k.prototype,u,(function(){return this})),e.AsyncIterator=k,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new k(h(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(L),l(L,s,"Generator"),l(L,c,(function(){return this})),l(L,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=G,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:G(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}var a="b5fb390ce807a99ec0c0f323ab9efe95";o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c=function(){var t=(0,n.Z)(i().mark((function t(){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("trending/movie/day?api_key=".concat(a));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),u=function(){var t=(0,n.Z)(i().mark((function t(e){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("search/movie?api_key=".concat(a,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),s=function(){var t=(0,n.Z)(i().mark((function t(e){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("movie/".concat(e,"?api_key=").concat(a,"&language=en-US"));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(i().mark((function t(e){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("movie/".concat(e,"/credits?api_key=").concat(a,"&language=en-US"));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,n.Z)(i().mark((function t(e){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("movie/".concat(e,"/reviews?api_key=").concat(a,"&language=en-US&page=1"));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=853.f0a3d224.chunk.js.map