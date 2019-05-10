(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function b(a,b){return j(a)||c(a,b)||f()}function c(a,b){var c=[];var d=!0;var e=!1;var f=undefined;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{!d&&h["return"]!=null&&h["return"]()}finally{if(e)throw f}}return c}function e(a){return j(a)||g(a)||f()}function f(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function g(a){if(Symbol.iterator in Object(a)||Object.prototype.toString.call(a)==="[object Arguments]")return Array.from(a)}function j(a){if(Array.isArray(a))return a}function k(a){for(var b=1;b<arguments.length;b++){var c=arguments[b]==null?{}:arguments[b];var d=Object.keys(c);typeof Object.getOwnPropertySymbols==="function"&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){l(a,b,c[b])})}return a}function l(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function m(a,b){if(a==null)return{};var c=n(a,b);var d,e;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(e=0;e<f.length;e++)d=f[e],!(b.indexOf(d)>=0)&&Object.prototype.propertyIsEnumerable.call(a,d)&&(c[d]=a[d])}return c}function n(a,b){if(a==null)return{};var c={};var d=Object.keys(a);var e,f;for(f=0;f<d.length;f++)e=d[f],!(b.indexOf(e)>=0)&&(c[e]=a[e]);return c}function o(a){return o=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function o(a){return typeof a}:function o(a){return a&&typeof Symbol==="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},o(a)}var q=require("hyperapp"),r=q.app,s=q.h;var h=function(a){return function(){var b=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var d=!!(arguments.length>1&&arguments[1]!==undefined)&&arguments[1];var e=function is(a){for(var b=arguments.length,c=Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===o(a)})};return!d&&(e(b,"string","number","function")||Array.isArray(b)?(d=b,b={}):e(b.View,"function")&&(d=b.View,b={})),s(a,b,d)}};var t=h("div");var u=h("p");var v=function Link(a,b){var c=a.to,d=m(a,["to"]);return function(a,f){var g=d.href,h=d.text,i=d.nofollow,j=d.noreferrer,k=d.onclick,l=m(d,["href","text","nofollow","noreferrer","onclick"]);return c=c||g||"",l.href=c,c&&c.startsWith("/")&&!c.startsWith("//")?l.onclick=function(a){k&&k({e:a,to:c}),f.go({e:a,to:c})}:(l.target="_blank",l.rel="noopener",i&&(l.rel+=" nofollow"),j&&(l.rel+=" noreferrer")),N(l,[h,b])}};var w=h("span");var x=h("li");var p=function Header(a){return(a.logo||a.menu||a.tagline)&&y({"class":"Header"},[(a.logo||a.logotext)&&v({to:"/docs/","class":"LogoWrapper"},[a.logo&&z({"class":"Logo",src:a.logo}),a.logotext&&w({"class":"LogoText"},a.logotext)]),a.menu&&A])};var y=h("header");var z=function Img(a){return function(){if(typeof a==="string"&&(a={src:a}),!!a.src)return!a.alt&&(a.title?a.alt=a.title:(a.role="presentation",a.alt="")),B(a)}};var A=function Menu(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"menu";return function(b){typeof a==="string"&&(a={name:a});var c=a,d=c.name,e=d===void 0?"menu":d,f=c["class"],g=f===void 0?"Menu":f,h=c.items,i=h===void 0?[]:h,j=c.collapse;var m=b.url,n=b[e],o=n===void 0?[]:n;if(i=i.length?i:o,!!i.length)return b.hash&&(m+="#".concat(b.hash)),J({"class":g},H(i.map(function(a){return A.Item(k({},a,{url:m,collapse:j===void 0||j}))})))}};A.Item=function(a){var b=a.url,c=a.text,d=a.items,e=d===void 0?[]:d,f=a.parentTo,g=f===void 0?undefined:f,h=a.collapse,j=m(a,["url","text","items","parentTo","collapse"]);return function(a){if(j.to||c){var d={"class":"MenuItem"};if(g){var n=j.to.includes("://");var o=j.to.startsWith("/");var p=!g||j.to.startsWith(g);!p&&!o&&!n&&(!g.endsWith("/")&&!j.to.startsWith("-")&&(g="".concat(g,"/")),j.to=g+j.to)}var f=j.to.startsWith(a.root)?j.to:"".concat(a.root).concat(j.to.substr(1));var i=b.startsWith(f);b===f&&(d["class"]+=" active");var m=[];return(e.length&&i||!h)&&(m=H(e.map(function(a){return A.Item(k({parentTo:j.to,url:b,collapse:h},a))}))),x(d,[j.to?v(j,c):w(j,c),m])}}};var B=h("img");var C=h("text");var D=h("button");var E=h("h2");var F=h("pre");var G=h("i");var i=h("code");var H=h("ul");var I=h("h1");var J=h("nav");var K=h("h3");var L=function Footer(){return O({"class":"Footer"},[t({"class":"wrapper"},["made with a few bits of ",v({to:"https://github.com/magic/core",target:"_blank",rel:"noopener"},"magic")])])};var M=function Pre(a){var b=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"";return function(c,d){return t({"class":"Pre ".concat(b||c.pre.theme)},[t({"class":"menu"},[!b&&D({onclick:d.pre.changeTheme},c.pre.theme==="dark"?"light":"dark"),D({onclick:function onclick(){return d.pre.clip(a)}},"copy")]),F(LIB.PRE.format(a))])}};var N=h("a");var a=function Page(a){return function(b,c){return t({"class":"Wrapper",oncreate:function oncreate(){typeof window!=="undefined"&&c.go&&window.addEventListener("popstate",c.go)}},[p,t({"class":"Page"},a?a(b,c):"404 - not found"),L])}};var O=h("footer");var P={};(function(){var a="\nlet this long package float\ngoto private class if short\nwhile protected with debugger case\ncontinue volatile interface\n\ninstanceof super synchronized throw\nextends final export throws\ntry import double enum\n\nboolean abstract function\nimplements typeof transient break\ndefault do static void\n\nint new async native switch\nelse delete null public var\nawait byte finally catch\nin return for get const char\nmodule exports require\n".trim().split(/\b/g).map(function(a){return a.trim()});var b="\nArray Object String Number RegExp Null Symbol\nSet WeakSet Map WeakMap\nsetInterval setTimeout\nPromise\nJSON\nInt8Array Uint8Array Uint8ClampedArray\nInt16Array Uint16Array\nInt32Array Uint32Array\nFloat32Array Float64Array\n".trim().split(/\b/g).map(function(a){return a.trim()});var c=["true","false"];var d=function wrapWords(d){if(typeof d!=="string")return d;var e=d.split(/\b/);return d=e.map(function(d,f){if(d!==""){var g="";return d==="state"?g="state":d==="actions"?g="actions":e[f+1]&&e[f+1].includes(":")?g="colon":a.includes(d)?g="keyword":b.includes(d)?g="builtin":c.includes(d)?g="boolean":e[f-1]==="."?g="property":e[f+1]==="."&&(g="object"),g&&(d=w({"class":g},d)),d}}),d};var f=/([a-zA-Z0-9:+._-]+@[a-zA-Z0-9._-]+)/g;var g=function wrapEmails(a){return a.split(f).map(function(a){if(f.test(a)){var b=a.startsWith("mailto:")?a:"mailto:".concat(a);var c=a.replace("mailto:","");return v({"class":"email",to:b},c)}return d(a)})};var h=function wrapComments(a,b){return[m(a.substring(0,b)),m(a.substring(b))]};var j=function wrapLinks(a){return a.split(/(?= )/).map(function(a){return a.includes("://")?v({to:a},a):m(a)})};var k=function wrapUrls(a){return a.includes("://")&&!a.includes("@")?j(a):g(a)};var l=function wrapStrings(a){var b=a.replace(/"/g,"'");var c=b.split("'"),f=e(c),g=f[0],h=f[1],i=f.slice(2);var j=i;j.length===1?j=m(j[0]):j.length>1&&(j=m(j.join("'")));var l=[];return l=typeof h==="undefined"?d(a):[d(g),w({"class":"string"},["'",k(h),"'"]),j],l};var m=function wordsByLine(a){var b=a.indexOf("//");var c=a.trim();if(c.startsWith("//")){var d=a.search(/\S|$/);var e="";for(var f=0;f<d;f++)e+=" ";return!c.startsWith("// ")&&(a="".concat(e,"// ").concat(c.substr(2))),w({"class":"comment"},[e,"// ",m(c.substring(3))])}return b>-1&&a[b-1]!==":"?h(a,b):a.indexOf("://")>2?j(a):a.indexOf("@")&&a.includes(".")&&!a.trim().includes(" ")?g(a):l(a)};var n=function wrapLine(a){return i({"class":"line"},m(a))};P.PRE={keywords:a,builtins:b,format:function format(a){return a.trim().split("\n").map(n)},wordsByLine:m,wrapWords:d}})(),window.LIB=P;var Q={"/docs/":function docs(){return t([I("@magic-themes/docs"),u(["this is the ",v({to:"https://github.com/magic-themes"},"@magic-themes")," docs theme. It is being used as the documentation theme for most @magic packages."]),K({id:"installation"},"installation"),M("npm install magic-themes/docs"),E({id:"usage"},"usage"),K({id:"usage-require"},"require in config.js:"),M("\n// config.js\n\nmodule.exports = {\n  // ... other config\n  THEME: 'docs',\n}"),K({id:"usage-customize"},"customize / overwrite"),u("you can customize and add any kind of style"),u("create /assets/themes/docs/index.js, any css there will overwrite the theme css"),M("\n// /assets/themes/docs/index.js\n\nmodule.exports = {\n  body: {\n    color: 'orange',\n  },\n}"),u("magic will then find and merge the themes automatically, just as it did on this page")])},"/docs/404/":function docs404(){return t("404 - not found")}};var R={"url":"/docs/","root":"/docs/","logotext":"@magic-themes/docs","menu":[{to:"/docs/#installation","text":"installation"},{to:"/docs/#usage","text":"usage","items":[{"to":"-require","text":"require"},{"to":"-customize","text":"customize"}]}],"pre":{"theme":"light"}};R.url=window.location.pathname,R.root="/docs/";var S={"go":function go(a){return function(c){if(typeof window==="undefined"||!window.history)return!0;var d=a.to;var f=a.e?a.e:a;f.preventDefault();var e=c.url;var g=e.split("#"),h=b(g,2),i=h[0],j=h[1],k=j===void 0?"":j;if(d){e=d.replace(window.location.origin,"");var l=e.split("#"),m=b(l,2),n=m[0],o=m[1],p=o===void 0?"":o;i=n,k=p&&p!=="/"?p:"";var q=c.hash?"#".concat(c.hash):window.location.hash;var r=c.url+q;(e!==r||k!==q)&&(window.history&&window.history.pushState({uri:i},"",e),!k&&window.scrollTo(0,0))}else i=f.state?f.state.uri:"/";if(window.location&&k){var s=document.getElementById(k);if(s){var t=s.offsetTop;window.scrollTo(0,t),window.location.hash=k}}return{url:i,hash:k,prev:c.url}}},"pre":{"changeTheme":function changeTheme(){return function(a){return{theme:a.theme==="dark"?"light":"dark"}}},"clip":function clip(a){if(typeof document!=="undefined"&&typeof document.execCommand==="function"){var b=document.createElement("textarea");b.id="copy",b.innerHTML=a,document.body.appendChild(b);var c=document.getElementById("copy");c.select(),document.execCommand("copy"),document.body.removeChild(c)}}}};var T=function view(b,c){var d=Q[b.url]?b.url:"/404/";var e=Q[d];if(b.pages){var f=b.pages[d];for(var g in f)b[g]=f[g]}if(c.pages){var h=c.pages[d];for(var i in h)c[i]=h[i]}return a(e)(b,c)};var U=document;var d=U.getElementById("Magic");!d&&(d=U.createElement("div"),d.id="magic",U.body.appendChild(d)),r(R,S,T,d);
},{"hyperapp":2}],2:[function(require,module,exports){
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(e.hyperapp={})}(this,function(e){"use strict";e.h=function(e,n){for(var t=[],r=[],o=arguments.length;2<o--;)t.push(arguments[o]);for(;t.length;){var l=t.pop();if(l&&l.pop)for(o=l.length;o--;)t.push(l[o]);else null!=l&&!0!==l&&!1!==l&&r.push(l)}return"function"==typeof e?e(n||{},r):{nodeName:e,attributes:n||{},children:r,key:n&&n.key}},e.app=function(e,n,t,r){var o,l=[].map,u=r&&r.children[0]||null,i=u&&function n(e){return{nodeName:e.nodeName.toLowerCase(),attributes:{},children:l.call(e.childNodes,function(e){return 3===e.nodeType?e.nodeValue:n(e)})}}(u),f=[],m=!0,a=v(e),c=function e(r,o,l){for(var n in l)"function"==typeof l[n]?function(e,t){l[e]=function(e){var n=t(e);return"function"==typeof n&&(n=n(h(r,a),l)),n&&n!==(o=h(r,a))&&!n.then&&d(a=p(r,v(o,n),a)),n}}(n,l[n]):e(r.concat(n),o[n]=v(o[n]),l[n]=v(l[n]));return l}([],a,v(n));return d(),c;function g(e){return"function"==typeof e?g(e(a,c)):null!=e?e:""}function s(){o=!o;var e=g(t);for(r&&!o&&(u=function e(n,t,r,o,l){if(o===r);else if(null==r||r.nodeName!==o.nodeName){var u=k(o,l);n.insertBefore(u,t),null!=r&&T(n,t,r),t=u}else if(null==r.nodeName)t.nodeValue=o;else{x(t,r.attributes,o.attributes,l=l||"svg"===o.nodeName);for(var i={},f={},a=[],c=r.children,s=o.children,d=0;d<c.length;d++){a[d]=t.childNodes[d];var v=N(c[d]);null!=v&&(i[v]=[a[d],c[d]])}for(var d=0,p=0;p<s.length;){var v=N(c[d]),h=N(s[p]=g(s[p]));if(f[v])d++;else if(null==h||h!==N(c[d+1]))if(null==h||m)null==v&&(e(t,a[d],c[d],s[p],l),p++),d++;else{var y=i[h]||[];v===h?(e(t,y[0],y[1],s[p],l),d++):y[0]?e(t,t.insertBefore(y[0],a[d]),y[1],s[p],l):e(t,a[d],null,s[p],l),f[h]=s[p],p++}else null==v&&T(t,a[d],c[d]),d++}for(;d<c.length;)null==N(c[d])&&T(t,a[d],c[d]),d++;for(var d in i)f[d]||T(t,i[d][0],i[d][1])}return t}(r,u,i,i=e)),m=!1;f.length;)f.pop()()}function d(){o||(o=!0,setTimeout(s))}function v(e,n){var t={};for(var r in e)t[r]=e[r];for(var r in n)t[r]=n[r];return t}function p(e,n,t){var r={};return e.length?(r[e[0]]=1<e.length?p(e.slice(1),n,t[e[0]]):n,v(t,r)):n}function h(e,n){for(var t=0;t<e.length;)n=n[e[t++]];return n}function N(e){return e?e.key:null}function y(e){return e.currentTarget.events[e.type](e)}function b(e,n,t,r,o){if("key"===n);else if("style"===n)if("string"==typeof t)e.style.cssText=t;else for(var l in"string"==typeof r&&(r=e.style.cssText=""),v(r,t)){var u=null==t||null==t[l]?"":t[l];"-"===l[0]?e.style.setProperty(l,u):e.style[l]=u}else"o"===n[0]&&"n"===n[1]?(n=n.slice(2),e.events?r||(r=e.events[n]):e.events={},(e.events[n]=t)?r||e.addEventListener(n,y):e.removeEventListener(n,y)):n in e&&"list"!==n&&"type"!==n&&"draggable"!==n&&"spellcheck"!==n&&"translate"!==n&&!o?e[n]=null==t?"":t:null!=t&&!1!==t&&e.setAttribute(n,t),null!=t&&!1!==t||e.removeAttribute(n)}function k(e,n){var t="string"==typeof e||"number"==typeof e?document.createTextNode(e):(n=n||"svg"===e.nodeName)?document.createElementNS("http://www.w3.org/2000/svg",e.nodeName):document.createElement(e.nodeName),r=e.attributes;if(r){r.oncreate&&f.push(function(){r.oncreate(t)});for(var o=0;o<e.children.length;o++)t.appendChild(k(e.children[o]=g(e.children[o]),n));for(var l in r)b(t,l,r[l],null,n)}return t}function x(e,n,t,r){for(var o in v(n,t))t[o]!==("value"===o||"checked"===o?e[o]:n[o])&&b(e,o,t[o],n[o],r);var l=m?t.oncreate:t.onupdate;l&&f.push(function(){l(e,n)})}function T(e,n,t){function r(){e.removeChild(function e(n,t){var r=t.attributes;if(r){for(var o=0;o<t.children.length;o++)e(n.childNodes[o],t.children[o]);r.ondestroy&&r.ondestroy(n)}return n}(n,t))}var o=t.attributes&&t.attributes.onremove;o?o(n,r):r()}}});

},{}]},{},[1]);
