"use strict";function b(a){return g(a)||c(a)||e()}function c(a){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a))return Array.from(a)}function d(a,b){return g(a)||f(a,b)||e()}function e(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function f(a,b){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a)){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}}function g(a){if(Array.isArray(a))return a}function j(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function k(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?j(Object(b),!0).forEach(function(c){l(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):j(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function l(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function m(a,b){if(null==a)return{};var c,d,e=n(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function n(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function o(a){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},o(a)}var q=function(){var a=2,b=3,c={},d=[],e=d.map,f=Array.isArray,g="undefined"==typeof requestAnimationFrame?setTimeout:requestAnimationFrame,h=function(a){var b="";if("string"==typeof a)return a;if(f(a)&&0<a.length)for(var c,d=0;d<a.length;d++)""!==(c=h(a[d]))&&(b+=(b&&" ")+c);else for(var d in a)a[d]&&(b+=(b&&" ")+d);return b},j=function(c,a){var b={};for(var d in c)b[d]=c[d];for(var d in a)b[d]=a[d];return b},k=function(a){return a.reduce(function(a,b){return a.concat(b&&!0!==b?"function"==typeof b[0]?[b]:k(b):0)},d)},l=function(c,a){return f(c)&&f(a)&&c[0]===a[0]&&"function"==typeof c[0]},m=function(c,a){if(c!==a)for(var b in j(c,a)){if(c[b]!==a[b]&&!l(c[b],a[b]))return!0;a[b]=c[b]}},n=function(a,b,c){for(var d,e,f=0,g=[];f<a.length||f<b.length;f++)d=a[f],e=b[f],g.push(e?!d||e[0]!==d[0]||m(e[1],d[1])?[e[0],e[1],e[0](c,e[1]),d&&d[2]()]:d:d&&d[2]());return g},p=function(a,b,c,d,e,f){if("key"===b);else if("style"===b)for(var g in j(c,d))c=null==d||null==d[g]?"":d[g],"-"===g[0]?a[b].setProperty(g,c):a[b][g]=c;else"o"===b[0]&&"n"===b[1]?((a.actions||(a.actions={}))[b=b.slice(2).toLowerCase()]=d)?!c&&a.addEventListener(b,e):a.removeEventListener(b,e):!f&&"list"!==b&&b in a?a[b]=null==d?"":d:null!=d&&!1!==d&&("class"!==b||(d=h(d)))?a.setAttribute(b,d):a.removeAttribute(b)},q=function(a,c,d){var e=a.props,f=a.type===b?document.createTextNode(a.name):(d=d||"svg"===a.name)?document.createElementNS("http://www.w3.org/2000/svg",a.name,{is:e.is}):document.createElement(a.name,{is:e.is});for(var g in e)p(f,g,null,e[g],c,d);for(var h=0,j=a.children.length;h<j;h++)f.appendChild(q(a.children[h]=v(a.children[h]),c,d));return a.node=f},r=function(a){return null==a?null:a.key},s=function(a,c,d,e,f,g){if(d===e);else if(null!=d&&d.type===b&&e.type===b)d.name!==e.name&&(c.nodeValue=e.name);else if(null==d||d.name!==e.name)c=a.insertBefore(q(e=v(e),f,g),c),null!=d&&a.removeChild(d.node);else{var h,k,l,m,n=d.props,o=e.props,t=d.children,u=e.children,w=0,x=0,y=t.length-1,z=u.length-1;for(var A in g=g||"svg"===e.name,j(n,o))("value"===A||"selected"===A||"checked"===A?c[A]:n[A])!==o[A]&&p(c,A,n[A],o[A],f,g);for(;x<=z&&w<=y&&null!=(l=r(t[w]))&&l===r(u[x]);)s(c,t[w].node,t[w],u[x]=v(u[x++],t[w++]),f,g);for(;x<=z&&w<=y&&null!=(l=r(t[y]))&&l===r(u[z]);)s(c,t[y].node,t[y],u[z]=v(u[z--],t[y--]),f,g);if(w>y)for(;x<=z;)c.insertBefore(q(u[x]=v(u[x++]),f,g),(k=t[w])&&k.node);else if(x>z)for(;w<=y;)c.removeChild(t[w++].node);else{for(var A=w,B={},C={};A<=y;A++)null!=(l=t[A].key)&&(B[l]=t[A]);for(;x<=z;){if(l=r(k=t[w]),m=r(u[x]=v(u[x],k)),C[l]||null!=m&&m===r(t[w+1])){null==l&&c.removeChild(k.node),w++;continue}null==m||1===d.type?(null==l&&(s(c,k&&k.node,k,u[x],f,g),x++),w++):(l===m?(s(c,k.node,k,u[x],f,g),C[m]=!0,w++):null==(h=B[m])?s(c,k&&k.node,null,u[x],f,g):(s(c,c.insertBefore(h.node,k&&k.node),h,u[x],f,g),C[m]=!0),x++)}for(;w<=y;)null==r(k=t[w++])&&c.removeChild(k.node);for(var A in B)null==C[A]&&c.removeChild(B[A].node)}}return e.node=c},t=function(c,a){for(var b in c)if(c[b]!==a[b])return!0;for(var b in a)if(c[b]!==a[b])return!0},u=function(a){return"object"===o(a)?a:x(a)},v=function(b,c){return b.type===a?((!c||c.type!==a||t(c.lazy,b.lazy))&&((c=u(b.lazy.view(b.lazy))).lazy=b.lazy),c):b},w=function(a,b,c,d,e,f){return{name:a,props:b,children:c,node:d,type:f,key:e}},x=function(a,e){return w(a,c,d,e,void 0,b)},y=function(a){return a.nodeType===b?x(a.nodeValue,a):w(a.nodeName.toLowerCase(),c,e.call(a.childNodes,y),a,void 0,1)};return{h:function h(a,b){for(var d,e=[],g=[],h=arguments.length;2<h--;)e.push(arguments[h]);for(;0<e.length;)if(f(d=e.pop()))for(var h=d.length;0<h--;)e.push(d[h]);else if(!1===d||!0===d||null==d);else g.push(u(d));return b=b||c,"function"==typeof a?a(b,g):w(a,b,g,void 0,b.key)},app:function app(a){var b={},c=!1,d=a.view,e=a.node,h=e&&y(e),i=a.subscriptions,j=[],l=function(a){o(this.actions[a.type],a)},m=function(a){return b!==a&&(b=a,i&&(j=n(j,k([i(b)]),o)),d&&!c&&g(p,c=!0)),b},o=(a.middleware||function(a){return a})(function(a,c){return"function"==typeof a?o(a(b,c)):f(a)?"function"==typeof a[0]||f(a[0])?o(a[0],"function"==typeof a[1]?a[1](c):a[1]):(k(a.slice(1)).map(function(a){a&&a[0](o,a[1])},m(a[0])),b):m(a)}),p=function(){c=!1,e=s(e.parentNode,e,h,h=u(d(b)),l)};o(a.init)}}}(),r=q.h,h=q.app,i=function(a){return function(){var b=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},d=!!(1<arguments.length&&void 0!==arguments[1])&&arguments[1],e=function(a){for(var b=arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===o(a)})};return d||(e(b,"string","number","function")||Array.isArray(b)?(d=b,b={}):e(b.View,"function")&&(d=b.View,b={})),r(a,b,d)}},s=i("a"),a=i("button"),t=i("code"),u=i("div"),v=i("footer"),w=i("h1"),x=i("h2"),y=i("h3"),z=i("h4"),A=i("header"),B=i("img"),C=i("input"),D=i("label"),E=i("li"),F=i("link"),G=i("main"),H=i("meta"),I=i("nav"),J=i("p"),p=i("pre"),K=i("script"),L=i("span"),M=i("title"),N=i("ul"),O={gdpr:{allowed:[],show:!0},logotext:"@magic-themes/docs",menu:[{text:"installation",to:"/#installation"},{items:[{text:"require",to:"-require"},{text:"customize",to:"-customize"}],text:"usage",to:"/#usage"}],pageClass:{},root:"/docs/",theme:"dark",url:"/docs/"},P={listenPopState:function listenPopState(a,b){var c=function(c){return a(b,c)};return addEventListener("popstate",c),function(){return removeEventListener("popstate",c)}},mapClickToGo:function mapClickToGo(a){return a.preventDefault(),a}},Q=function(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[];return v({class:"Footer"},[u({class:"Container"},[b,u({class:"Credits"},["made with a few bits of ",V({to:"https://github.com/magic/core",target:"_blank",rel:"noopener"},"magic")])]),"function"==typeof R&&R(a)])},R=function(a){var b=a.gdpr,c=void 0===b?{}:b,d=a.cookies,e=void 0===d?[]:d,f=c.show,g=!(void 0!==f)||f,h=c.small,i=c.left,j=c.right,k=c.title,l=void 0===k?"Magic Privacy Information":k,m=c.content,n=void 0===m?"This app neither saves, collects, nor shares any data about you.":m,o=c.noCookieButtonText,p=void 0===o?"Awesome.":o,q=c.allowAllCookiesButtonText,r=void 0===q?"Allow all":q,s=c.allowCookieButtonText,t=void 0===s?"Allow selected":s,v=c.denyCookieButtonText,w=void 0===v?"Deny all":v;if(g){var x=!!e.length;return u({class:{Gdpr:!0,show:g,small:void 0!==h&&h,left:void 0!==i&&i,right:void 0!==j&&j}},[C({type:"checkbox",name:"show-hide",id:"show-hide",checked:!g}),u({class:"Container"},[l&&y(l),n&&J(n),x&&[N(e.map(function(a){var b=a.name,d=a.title,e=a.content,f=a.allowed;return E({class:"Cookie"},[C({type:"checkbox",title:"allow",id:b,checked:c.allowed.includes(b),onchange:[aa.gdpr.toggleAllow,{name:b}]}),(d||e)&&D({for:b},[d&&z(d),e&&J(e)])])}))],x?[D({class:"button allow all",for:"show-hide",onclick:aa.gdpr.allow},r),D({class:"button allow",for:"show-hide",onclick:aa.gdpr.close},t),D({class:"button allow none",for:"show-hide",onclick:aa.gdpr.deny},w)]:D({class:"button",for:"show-hide",onclick:aa.gdpr.close},p)])])}},S=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[],c=a.logo,d=a.menu,e=a.logotext,f=m(a,["logo","menu","logotext"]);return c||d||e?A({class:"Header"},[(c||e)&&V({to:f.root,class:"Logo"},[c&&T(c),e&&L(e)]),d&&W({state:f,items:d}),b]):void 0},T=function(a){if("string"==typeof a&&(a={src:a}),!!a.src)return a.alt||(a.title?a.alt=a.title:(a.role="presentation",a.alt="")),B(a)},U=function(){0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return a({class:"LightSwitch",onclick:aa.changeTheme})},V=function(a,b){var c=a.to,d=m(a,["to"]),e=d.href,f=d.text,g=d.nofollow,h=d.noreferrer,i=m(d,["href","text","nofollow","noreferrer"]);c=c||e||"",i.href=c;var j=c.startsWith("/");return j?i.onclick=[aa.go,P.mapClickToGo]:(i.target="_blank",i.rel="noopener",g&&(i.rel+=" nofollow"),h&&(i.rel+=" noreferrer")),s(i,[f,b])},W=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},b=a.items,c=a["class"],d=void 0===c?"Menu":c,e=a.collapse,f=a.state;if(b.length){var g=f.url||"";return f.hash&&!g.endsWith(f.hash)&&(g+="#".concat(f.hash)),I({className:d},N(b.map(function(a){return X(k({},a,{url:g,state:f,collapse:void 0===e||e}))})))}},X=function(a){var b=a.text,c=a.items,d=void 0===c?[]:c,e=a.url,f=a.state,g=a.parentTo,h=void 0===g?void 0:g,j=a.collapse,l=m(a,["text","items","url","state","parentTo","collapse"]),n=f.root;if(l.to||b){var o={class:{}},i=l.to;i.startsWith("/#")&&(i=i.substr(1));var p=l.to[0],q="/"===p||"-"===p||"#"===p;if(h&&q)if("-"===p||"#"===p)i=h+i;else{var u=i.split("/")[1];if(u){var v=h.endsWith("/".concat(u,"/"));!v&&q&&(i=h+i)}}("/"!==l.to&&e.endsWith(l.to)||l.to===e)&&(o["class"].active=!0);var r=i.startsWith(n);n&&q&&!r&&(i=n+i),l.to=i.replace(/\/\//g,"/");var s=[],t=e&&e.includes(l.to);return(d.length&&t||!j)&&(s=N(d.map(function(a){return X(k({parentTo:l.to,url:e,state:f,collapse:j},a))}))),E(o,[l.to?V(l,b):L(l,b),s])}},Y=function(a){var b=a.page,c=a.state;b=b?b(c):"404 - not found";var d={id:"Magic",class:c.pageClass};return G(d,u({class:{Wrapper:!0}},$({state:c,page:b})))},Z=function(b,c){"string"==typeof b?b={content:b}:c&&(b=k({content:c},b));var d=b,f=d.content,g=d.lines;return u({class:{Pre:!0,lines:!(void 0!==g)||g}},[u({class:"menu"},[a({onclick:[aa.pre.clip,function(a){return{e:a,content:f}}]},"copy")]),p(_.pre.format(f))])},$=function(a){var b=a.page,c=a.state;return[S(c),u({class:"Page"},b),Q(c)]},_={db:function(){return{set:function set(a,b){var c=b.action,d=b.key,e=b.value,f=_.db.init(),g=_.json.stringify(e);return"Error"==typeof g?void a(c,new Error("db:write ".concat(d," ").concat(val))):void(f[d]=g,a(c,{key:d,value:e}))},get:function get(a,b){var c=b.action,d=b.key,e=_.db.init(),f=void 0;return e[d]&&(f=_.json.parse(e[d]),"Error"==typeof res)?void a(c,new Error("db:read ".concat(d))):void a(c,{key:d,value:f})},del:function del(a,b){var c=b.action,d=b.key,e=_.db.init();e[d]&&e.removeItem(d),a(c,{key:d,value:void 0})},init:function init(){return"undefined"!=typeof window&&window.localStorage||{}}}}(),json:function(){var a=function(a){return function(){try{return a.apply(void 0,arguments)}catch(a){return a}}},b=a(JSON.parse),c=a(JSON.stringify);return{parse:b,stringify:c}}(),pre:function(){var a="\nlet this long package float\ngoto private class if short\nwhile protected with debugger case\ncontinue volatile interface\n\ninstanceof super synchronized throw\nextends final throws\ntry import double enum\n\nboolean abstract function\nimplements typeof transient break\ndefault do static void\n\nint new async native switch\nelse delete null public var\nawait byte finally catch\nin return for get const char\nmodule exports require\n".trim().split(/\b/g).map(function(a){return a.trim()}),c="\nArray Object String Number RegExp Null Symbol\nSet WeakSet Map WeakMap\nsetInterval setTimeout\nPromise\nJSON\nInt8Array Uint8Array Uint8ClampedArray\nInt16Array Uint16Array\nInt32Array Uint32Array\nFloat32Array Float64Array\n".trim().split(/\b/g).map(function(a){return a.trim()}),e=["true","false"],f=function(b){if("string"!=typeof b)return b;var d=b.split(/\b/);return b=d.map(function(b,f){if(""!==b){var g="";return"state"===b?g="state":"actions"===b?g="actions":d[f+1]&&d[f+1].includes(":")?g="colon":a.includes(b)?g="keyword":c.includes(b)?g="builtin":e.includes(b)?g="boolean":"."===d[f-1]?g="property":"."===d[f+1]&&(g="object"),g&&(b=L({class:g},b)),b}}),b},g=/([a-zA-Z0-9:+._-]+@[a-zA-Z0-9._-]+)/g,h=function(a){return a.split(g).map(function(a){if(g.test(a)){var b=a.startsWith("mailto:")?a:"mailto:".concat(a),c=a.replace("mailto:","");return V({class:"email",to:b},c)}return f(a)})},i=function(a,b){return[m(a.substring(0,b)),m(a.substring(b))]},j=function(a){return a.split(/(?= )/).map(function(a){if(!a.includes("://"))return m(a);var b=a.split("://"),c=d(b,2),e=c[0],f=c[1];return e.match(/[a-z]/g)?a:V({to:a},a)})},k=function(a){return a.includes("://")&&!a.includes("@")?j(a):h(a)},l=function(a){var c=a.replace(/"/g,"'"),d=c.split("'"),e=b(d),g=e[0],h=e[1],i=e.slice(2),j=i;1===j.length?j=m(j[0]):1<j.length&&(j=m(j.join("'")));var l=[];return l="undefined"==typeof h?f(a):[f(g),L({class:"string"},["'",k(h),"'"]),j],l},m=function(a){var b=a.indexOf("//"),c=a.trim();if(c.startsWith("//")){for(var d=a.search(/\S|$/),e="",f=0;f<d;f++)e+=" ";return c.startsWith("// ")||(a="".concat(e,"// ").concat(c.substr(2))),L({class:"comment"},[e,"// ",m(c.substring(3))])}return-1<b&&":"!==a[b-1]?i(a,b):2<a.indexOf("://")?j(a):a.indexOf("@")&&a.includes(".")&&!a.trim().includes(" ")?h(a):l(a)},n=function(a){return t({class:"line"},m(a))};return{format:function format(a){return a.trim().split("\n").map(n)}}}()},aa={changeTheme:function changeTheme(a){return k({},a,{pageClass:k({},a.pageClass,{light:"dark"===a.theme}),theme:"dark"===a.theme?"light":"dark"})},gdpr:{allow:function allow(a){return[k({},a,{gdpr:k({},a.gdpr,{show:!1})}),[_.db.set,{key:"magic-gdpr",value:{allowed:a.cookies.map(function(a){return a.name}),show:!1},action:aa.gdpr.show}]]},close:function close(a){return[k({},a,{gdpr:k({},a.gdpr,{show:!1})}),[_.db.set,{key:"magic-gdpr",value:{allowed:a.gdpr.allowed,show:!1},action:aa.gdpr.show}]]},deny:function deny(a){return[a,[_.db.del,{key:"magic-gdpr",action:aa.gdpr.show}]]},load:function load(a){return[a,[_.db.get,{key:"magic-gdpr",action:aa.gdpr.show}]]},show:function show(a,b){return b.value&&(a.gdpr=k({},a.gdpr,{},b.value)),a},toggleAllow:function toggleAllow(a,b){var d=b.name,e=a.gdpr,f=e.allowed.includes(d);return f?e.allowed=e.allowed.filter(function(a){return a!==d}):e.allowed.push(d),k({},a,{gdpr:e})}},go:function go(a,b){var c=b.currentTarget.href.replace(window.location.origin,""),e=c.split("#"),f=d(e,2),g=f[0],h=f[1],i=void 0===h?"":h;return g===a.url&&i===a.hash?a:(window.history.pushState({url:g,hash:i},"",c),i?window.location.hash=i:window.scroll(0,0),k({},a,{url:g,hash:i,prev:a.url}))},pop:function pop(a,b){var c=window.location,d=c.pathname,e=c.hash;return e=e.substring(1),b.state&&(d=b.state.url,e=b.state.hash),e?window.location.hash=e:window.scroll(0,0),k({},a,{url:d,hash:e})},pre:{clip:function clip(a,b){var c=b.content;if("undefined"!=typeof document&&"function"==typeof document.execCommand){var d=document.createElement("textarea");d.id="copy",d.innerHTML=c,document.body.appendChild(d);var e=document.getElementById("copy");e.select(),document.execCommand("copy"),document.body.removeChild(e)}return a}}},ba={"/docs/":function docs(a){return u([w("@magic-themes/docs"),J(["this is the ",V({to:"https://github.com/magic-themes"},"@magic-themes")," docs theme. It is being used as the documentation theme for most @magic packages."]),y({id:"installation"},"installation"),Z("npm install magic-themes/docs"),x({id:"usage"},"usage"),y({id:"usage-require"},"require in config.js:"),Z("\n// config.mjs\n\nexport default {\n  // ... other config\n  THEME: 'docs',\n}"),y({id:"usage-customize"},"customize / overwrite"),J("you can customize and add any kind of style"),J("create /assets/themes/docs/index.js, any css there will overwrite the theme css"),Z("\n// /assets/themes/docs/index.mjs\n\nexport default {\n  body: {\n    color: 'orange',\n  },\n}"),J("magic will then find and merge the themes automatically, just as it did on this page"),U(a)])},"/docs/404/":function docs404(){return u("404 - not found")}};h({init:function init(){return aa.gdpr.load(k({},O,{url:window.location.pathname}))},subscriptions:function subscriptions(){return[[P.listenPopState,aa.pop]]},view:function view(a){var b=ba[a.url]?a.url:"/404/",c=ba[b];return a.pages&&a.pages[b]&&Object.keys(a.pages[b]).forEach(function(c){a[c]=a.pages[b][c]}),Y({page:c,state:a})},node:document.getElementById("Magic")});