function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function t(e){if(Array.isArray(e))return e}function n(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){var r,o;r=e,o=n[t],t in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o})}return e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n.push.apply(n,r)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function a(e,r){return t(e)||function(e,t){var n,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],a=!0,s=!1;try{for(o=o.call(e);!(a=(n=o.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){s=!0,r=e}finally{try{a||null==o.return||o.return()}finally{if(s)throw r}}return i}}(e,r)||s(e,r)||n()}function s(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,n)}}!function(){var e,l,c,u,d,f,p,h,m,g,v,y,b,w,x,k,C,O,j,S,A=(e={},c=(l=[]).map,u=Array.isArray,d="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout,f=function(e){var t="";if("string"==typeof e)return e;if(u(e)&&e.length>0)for(var n,r=0;r<e.length;r++)""!==(n=f(e[r]))&&(t+=(t&&" ")+n);else for(var r in e)e[r]&&(t+=(t&&" ")+r);return t},p=function(e,t){var n={};for(var r in e)n[r]=e[r];for(var r in t)n[r]=t[r];return n},h=function(e){return e.reduce(function(e,t){return e.concat(t&&!0!==t?"function"==typeof t[0]?[t]:h(t):0)},l)},m=function(e,t){if(e!==t)for(var n in p(e,t)){var r,o;if(e[n]!==t[n]&&(r=e[n],o=t[n],!(u(r)&&u(o))||r[0]!==o[0]||"function"!=typeof r[0]))return!0;t[n]=e[n]}},g=function(e,t,n){for(var r,o,i=0,a=[];i<e.length||i<t.length;i++)r=e[i],a.push((o=t[i])?!r||o[0]!==r[0]||m(o[1],r[1])?[o[0],o[1],o[0](n,o[1]),r&&r[2]()]:r:r&&r[2]());return a},v=function(e,t,n,r,o,i){if("key"===t);else if("style"===t)for(var a in p(n,r))n=null==r||null==r[a]?"":r[a],"-"===a[0]?e[t].setProperty(a,n):e[t][a]=n;else"o"===t[0]&&"n"===t[1]?((e.actions||(e.actions={}))[t=t.slice(2)]=r)?n||e.addEventListener(t,o):e.removeEventListener(t,o):!i&&"list"!==t&&t in e?e[t]=null==r?"":r:null!=r&&!1!==r&&("class"!==t||(r=f(r)))?e.setAttribute(t,r):e.removeAttribute(t)},y=function(e,t,n){var r=e.props,o=3===e.type?document.createTextNode(e.name):(n=n||"svg"===e.name)?document.createElementNS("http://www.w3.org/2000/svg",e.name,{is:r.is}):document.createElement(e.name,{is:r.is});for(var i in r)v(o,i,null,r[i],t,n);for(var a=0,s=e.children.length;a<s;a++)o.appendChild(y(e.children[a]=C(e.children[a]),t,n));return e.node=o},b=function(e){return null==e?null:e.key},w=function(e,t,n,r,o,i){if(n===r);else if(null!=n&&3===n.type&&3===r.type)n.name!==r.name&&(t.nodeValue=r.name);else if(null==n||n.name!==r.name)t=e.insertBefore(y(r=C(r),o,i),t),null!=n&&e.removeChild(n.node);else{var a,s,l,c,u=n.props,d=r.props,f=n.children,h=r.children,m=0,g=0,x=f.length-1,k=h.length-1;for(var O in i=i||"svg"===r.name,p(u,d))("value"===O||"selected"===O||"checked"===O?t[O]:u[O])!==d[O]&&v(t,O,u[O],d[O],o,i);for(;g<=k&&m<=x&&null!=(l=b(f[m]))&&l===b(h[g]);)w(t,f[m].node,f[m],h[g]=C(h[g++],f[m++]),o,i);for(;g<=k&&m<=x&&null!=(l=b(f[x]))&&l===b(h[k]);)w(t,f[x].node,f[x],h[k]=C(h[k--],f[x--]),o,i);if(m>x)for(;g<=k;)t.insertBefore(y(h[g]=C(h[g++]),o,i),(s=f[m])&&s.node);else if(g>k)for(;m<=x;)t.removeChild(f[m++].node);else{for(var O=m,j={},S={};O<=x;O++)null!=(l=f[O].key)&&(j[l]=f[O]);for(;g<=k;){if(l=b(s=f[m]),c=b(h[g]=C(h[g],s)),S[l]||null!=c&&c===b(f[m+1])){null==l&&t.removeChild(s.node),m++;continue}null==c||1===n.type?(null==l&&(w(t,s&&s.node,s,h[g],o,i),g++),m++):(l===c?(w(t,s.node,s,h[g],o,i),S[c]=!0,m++):null!=(a=j[c])?(w(t,t.insertBefore(a.node,s&&s.node),a,h[g],o,i),S[c]=!0):w(t,s&&s.node,null,h[g],o,i),g++)}for(;m<=x;)null==b(s=f[m++])&&t.removeChild(s.node);for(var O in j)null==S[O]&&t.removeChild(j[O].node)}}return r.node=t},x=function(e,t){for(var n in e)if(e[n]!==t[n])return!0;for(var n in t)if(e[n]!==t[n])return!0},k=function(e){return"object"==typeof e?e:j(e)},C=function(e,t){return 2===e.type?((!t||!t.lazy||x(t.lazy,e.lazy))&&((t=k(e.lazy.view(e.lazy))).lazy=e.lazy),t):e},O=function(e,t,n,r,o,i){return{name:e,props:t,children:n,node:r,type:i,key:o}},j=function(t,n){return O(t,e,l,n,void 0,3)},S=function(t){return 3===t.nodeType?j(t.nodeValue,t):O(t.nodeName.toLowerCase(),e,c.call(t.childNodes,S),t,void 0,1)},{h:function(t,n){for(var r,o=[],i=[],a=arguments.length;a-- >2;)o.push(arguments[a]);for(;o.length>0;)if(u(r=o.pop()))for(var a=r.length;a-- >0;)o.push(r[a]);else!1===r||!0===r||null==r||i.push(k(r));return n=n||e,"function"==typeof t?t(n,i):O(t,n,i,void 0,n.key)},app:function(e){var t={},n=!1,r=e.view,o=e.node,i=o&&S(o),a=e.subscriptions,s=[],l=function(e){p(this.actions[e.type],e)},c=function(e){return t!==e&&(t=e,a&&(s=g(s,h([a(t)]),p)),r&&!n&&d(m,n=!0)),t},f=e.middleware,p=(void 0===f?function(e){return e}:f)(function(e,n){return"function"==typeof e?p(e(t,n)):u(e)?"function"==typeof e[0]||u(e[0])?p(e[0],"function"==typeof e[1]?e[1](n):e[1]):(h(e.slice(1)).map(function(e){e&&e[0](p,e[1])},c(e[0])),t):c(e)}),m=function(){n=!1,o=w(o.parentNode,o,i,i=k(r(t)),l)};p(e.init)}}),M=A.h,T=A.app,z=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,r=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return n.some(function(t){return t===(void 0===e?"undefined":e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e)})};if(r(n,"undefined")){if(t.props)return M(e,{},[t]);r(t,"string","number","function")||Array.isArray(t)?(n=t,t={}):r(t.View,"function")&&(n=t.View,t={})}return M(e,t,n)}},P=z("a");z("abbr"),z("address"),z("animate"),z("animateMotion"),z("animateTransform"),z("area"),z("article"),z("aside"),z("audio"),z("b"),z("base"),z("bdi"),z("bdo"),z("blockquote"),z("body"),z("br");var E=z("button");z("canvas"),z("caption");var W=z("circle");z("cite"),z("clipPath");var L=z("code");z("col"),z("colgroup"),z("data"),z("datalist"),z("dd"),z("defs"),z("del"),z("desc"),z("description"),z("details"),z("dfn"),z("dialog"),z("discard");var D=z("div");z("dl"),z("dt"),z("ellipse"),z("em"),z("embed"),z("feBlend"),z("feColorMatrix"),z("feComponentTransfer"),z("feComposite"),z("feConvolveMatrix"),z("feDiffuseLighting"),z("feDisplacementMap"),z("feDistantLight"),z("feDropShadow"),z("feFlood"),z("feFuncA"),z("feFuncB"),z("feFuncG"),z("feFuncR"),z("feGaussianBlur"),z("feImage"),z("feMerge"),z("feMergeNode"),z("feMorphology"),z("feOffset"),z("fePointLight"),z("feSpecularLighting"),z("feSpotLight"),z("feTile"),z("feTurbulence"),z("fieldset"),z("figcaption"),z("figure"),z("filter");var B=z("footer");z("foreignObject"),z("form");var N=z("g"),I=z("h1"),R=z("h2"),F=z("h3"),q=z("h4"),U=z("h5");z("h6"),z("hatch"),z("hatchpath"),z("head");var V=z("header");z("hgroup"),z("hr"),z("html"),z("i"),z("iframe"),z("image"),z("img");var G=z("input");z("ins"),z("kbd"),z("label"),z("legend");var H=z("li");z("line"),z("linearGradient"),z("link");var Y=z("main");z("map"),z("mark"),z("marker"),z("mask"),z("mesh"),z("meshgradient"),z("meshpatch"),z("meshrow"),z("meta"),z("metadata"),z("meter"),z("mpath");var _=z("nav");z("noscript"),z("object"),z("ol"),z("optgroup"),z("option"),z("output");var J=z("p");z("param");var $=z("path");z("pattern"),z("picture"),z("polygon"),z("polyline");var K=z("pre");z("progress"),z("q"),z("radialGradient"),z("rb"),z("rect"),z("rp"),z("rt"),z("rtc"),z("ruby"),z("s"),z("samp"),z("script"),z("section"),z("select"),z("set"),z("small"),z("solidcolor"),z("source");var Q=z("span");z("stop"),z("strong"),z("style"),z("sub"),z("summary"),z("sup");var X=z("svg");z("symbol"),z("table"),z("tbody"),z("td"),z("template"),z("text"),z("textPath"),z("textarea"),z("tfoot"),z("th"),z("thead"),z("time"),z("title"),z("tr"),z("track"),z("tspan"),z("u");var Z=z("ul");z("unknown"),z("use"),z("video"),z("view"),z("wbr");var ee=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return B({class:"Footer"},[D({class:"Container"},[D({class:"Credits"},["made with a few bits of ",en({to:"https://magic.github.io/",target:"_blank",rel:"noopener"},"magic")]),t])])},et=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=e.logo,r=e.menu,o=e.logotext,i=e.hash,a=e.url;if(n||r||o)return V({class:"Header"},[er(),o&&J(o),r&&eo({url:a,hash:i,menu:r}),t])},en=function(e,t){var n=e.to,r=e.action,o=void 0===r?ed.go:r,a=e.text,s=i(e,["to","action","text"]),l=s.href,c=s.nofollow,u=s.noreferrer,d=i(s,["href","nofollow","noreferrer"]);return n=n||l||"",d.href=n,a&&t?a=[a,t]:a||(a=t||n),"/"===n[0]||"#"===n[0]?d.onclick=[o,eu.preventDefault]:(d.target="_blank",d.rel="noopener",c&&(d.rel+=" nofollow"),u&&(d.rel+=" noreferrer")),P(d,a)},er=function(){return en({to:"/docs/",class:"Logo"},[X({viewBox:"0 0 512 444"},[$({d:"M512 444L256 0 0 444z",fill:"#663695"}),W({cx:"256",cy:"294",r:"130",fill:"#fff"}),W({cx:"256",cy:"281",r:"40",fill:"#663695"}),$({d:"M256 350v44m24-44l1 13c1 27 29 27 29-7m-160-72s46-47 106-47c59 0 106 47 106 47s-47 43-106 43c-60 0-106-43-106-43zm65-75a134 134 0 0189 2",class:"stroke"}),$({d:"M256 81v53m184 270l-43-29M72 404l43-29",class:"stroke white"})])])},eo=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.collapse,n=void 0===t||t,i=e.menu,a=e.hash,s=e.class,l=void 0===s?"":s,c=e.url;return l.includes("Menu")||(l="Menu ".concat(l).trim()),a&&!c.endsWith(a)&&(c+="#".concat(a)),_({className:l},Z(i.map(function(e){return ei(o(r({},e),{url:c,collapse:n}))})))},ei=function(e){var t=e.collapse,n=e.items,o=void 0===n?[]:n,a=e.text,s=e.url,l=i(e,["collapse","items","text","url"]),c={class:{}},u=l.to;u===s&&(c.class.active=!0);var d=[];return(!t||s.includes(u))&&o.length&&(d=Z(o.map(function(e){return ei(r({url:s,collapse:t},e))}))),H(c,[u?en(l,a):Q(l,a),d])},ea=function(e){var t=e.nospy,n=void 0===t?{}:t;e.cookies;var r=n.show,o=n.title,i=void 0===o?"Privacy Notice":o,a=n.content,s=void 0===a?"This app neither saves, collects, nor shares any data about you.":a,l=n.buttonText;return r?D({class:"NoSpy"},[D({class:"Background",onclick:ed.nospy.toggle}),D({class:"Container"},[i&&F(i),s&&J(s),G({onclick:ed.nospy.toggle,value:void 0===l?"Awesome!":l,type:"button"})])]):D({class:"NoSpy"},X({class:"icon",onclick:ed.nospy.toggle,width:"25",height:"25",viewBox:"0 0 512 512"},[N([$({d:"\nM507,208c-1-7-7-12-14-13c-7-1-13,3-16,9\nc-5,11-16,19-29,19c-14,0-26-10-30-23c-2-8-11-13-19-11\nC393,191,389,192,384,192c-35-0-64-29-64-64c0-5,1-9,2-14\nc2-8-3-16-11-19C297,90,288,78,288,64c-0-13,8-24,19-29\nc6-3,10-9,9-16c-1-7-6-12-13-14C288,2,272,0,256,0\nC115,0,0,115,0,256c0,141,115,256,256,256c141-0,256-115,256-256\nC512,239,510,224,507,209z M414,414C374,455,318,480,256,480s-118-25-158-66\nC57,374,32,318,32,256S57,138,98,98C138,57,194,32,256,32c3,0,6,0,9,0\nC259,42,256,52,256,64c0,24,13,44,33,55C288,122,288,125,288,128\nc0,53,43,96,96,96c3,0,6-0,8-0C403,242,424,256,448,256\nc11-0,22-3,32-8c0,3,0,6,0,9C480,318,455,374,414,414z\n"}),W({cx:"192",cy:"128",r:"32"}),W({cx:"128",cy:"256",r:"32"}),W({cx:"288",cy:"384",r:"32"}),W({cx:"272",cy:"272",r:"16"}),W({cx:"400",cy:"336",r:"16"}),W({cx:"176",cy:"368",r:"16"})])]))},es=function(e,t){var n=e.page,r=e.state;return Y({id:"Magic",class:r.pageClass},D({class:{Wrapper:!0}},[et(r),D({class:"Page",id:"page"},n(r)),ee(r),t]))},el=function(e,t){"string"==typeof e?e={content:e}:t?e=r({content:t},e):Array.isArray(e)&&(e={content:e.join("")});var n=e.content,o=e.lines,i=void 0===o||o;return D({class:{Pre:!0,lines:i&&"false"!==i}},[D({class:"menu"},[E({onclick:[ed.pre.clip,function(e){return{e:e,content:n}}]},"copy")]),K(n.trim().split("\n").map(el.Line))])};el.Comment=function(e){return Q({class:"comment"},e)},el.Line=function(e){return L({class:"line"},el.Words(e))},el.Word=function(e){if(!e)return"";var t=e.includes("://"),n=e.startsWith("mailto:")||e.includes("@")&&e.includes(".");if(t||n)return en({to:e,text:e});var r="";return("state"===e?r="state":"actions"===e?r="actions":eu.pre.keywords.includes(e)?r="keyword":eu.pre.builtins.includes(e)?r="builtin":eu.pre.booleans.includes(e)&&(r="boolean"),r)?Q({class:r},e):e},el.Words=function(e){var r,o=t(r=e.split(eu.pre.commentRegex))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||s(r)||n(),i=o[0],l=o.slice(1);if(!i.endsWith(":")&&l.length)return[el.Words(i),el.Comment(l.join("").split(eu.pre.wordRegex).map(el.Word))];var c=[],u=e;return(e.replace(eu.pre.stringRegex,function(e){if(u){var t=a(u.split(e),2),n=t[0],r=t[1];n&&c.push(n.split(eu.pre.wordRegex).map(el.Word).filter(function(e){return e})),u=r}c.push(Q({class:"string"},e))}),u!==e)?(u&&c.push(u.split(eu.pre.wordRegex).map(el.Word).filter(function(e){return e})),c):e.split(eu.pre.wordRegex).filter(function(e){return e}).map(el.Word)};var ec=function(e){var t=(e.state||e).vars,n=t.widths,r=t.maxWidth,o=t.fadeDuration,s=i(t,["widths","maxWidth","fadeDuration"]),l=function(e,t){return a(e,1)[0]>a(t,1)[0]?1:-1},c=function(e){var t=a(e,2);return"string"==typeof(t[0],t[1])?-1:1},u=function(e){var t=a(e,2),n=t[0],r=t[1],o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=o?"".concat(o,"."):"";return"string"==typeof r?H(["vars.".concat(i).concat(n),": ",Q({class:"Bg",style:{backgroundColor:r}},r)]):"object"==typeof r?H([U("".concat(i).concat(n)),Z(Object.entries(r).sort(l).sort(c).map(function(e){return u(e,"".concat(i).concat(n))}))]):void 0};return D({class:"ThemeVars"},[R({id:"theme-vars"},"theme vars"),F({id:"demo-colors"},"colors"),J("this theme exports and uses the following colors."),Z(Object.entries(s).sort(l).sort(c).map(function(e){return u(e)})),r&&[q("max page width"),J(["vars.maxWidth: ",r])],o&&[F("fade duration:"),J("vars.fadeDuration should be used for all css animations"),J(["vars.fadeDuration: ",o])],n&&[F({id:"demo-breakpoints"},"breakpoints"),J("the following width breakpoints exist"),Z(Object.entries(n).sort(function(e,t){var n=a(e,2),r=(n[0],n[1]),o=a(t,2);return r>(o[0],o[1])?1:0}).map(function(e){var t=a(e,2),n=t[0],r=t[1];return H(["vars.widths.".concat(n),": ",r])}))],F({id:"demo-headers"},"headers"),J("the five header sizes look like the following, the outlines indicate their padding."),I({class:"header-example"},"This is a h1"),R({class:"header-example"},"This is a h2"),F({class:"header-example"},"This is a h3"),q({class:"header-example"},"This is a h4"),U({class:"header-example"},"This is a h5"),F({id:"demo-links"},"links"),J("links will look like the following:"),en({to:"/docs/"},"This is a link")])},eu={pre:{booleans:["true","false"],builtins:["Array","Object","String","Number","RegExp","Null","Symbol","Set","WeakSet","Map","WeakMap","setInterval","setTimeout","Promise","JSON","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"],commentRegex:/(\/\/)/gim,keywords:["let","this","long","package","float","goto","private","class","if","short","while","protected","with","debugger","case","continue","volatile","interface","instanceof","super","synchronized","throw","extends","final","export","throws","try","import","double","enum","boolean","abstract","function","implements","typeof","transient","break","default","do","static","void","int","new","async","native","switch","else","delete","null","public","var","await","byte","finally","catch","in","return","for","get","const","char","module","exports","require","npm","install","=>"],stringRegex:/("|')(.*?)\1/gim,wordRegex:/( )/gim},preventDefault:function(e){return e.preventDefault(),e}},ed={changeTheme:function(e){return o(r({},e),{pageClass:o(r({},e.pageClass),{light:"dark"===e.theme}),theme:"dark"===e.theme?"light":"dark"})},go:function(e,t){var n=t.currentTarget.href.replace(window.location.origin,""),i=a(n.split("#"),2),s=i[0],l=i[1],c=void 0===l?"":l;if(s===e.url&&c===e.hash)return c&&(window.location.hash=c),e;var u=e.pages&&e.pages[s]&&e.pages[s].title;u&&(document.title=e.title=u),s!==e.url?c||window.scrollTo({top:0}):window.location.hash=c;var d=window.scrollY;return window.history.pushState({url:s,hash:c,scrollY:d},e.title,n),o(r({},e),{url:s,hash:c,prev:e.url})},nospy:{toggle:function(e){return e.nospy.show=!e.nospy.show,r({},e)}},pop:function(e,t){var n=window.location,i=n.pathname,a=n.hash;a=a.substring(1);var s=0;return t.state&&(i=t.state.url,a=t.state.hash,s=t.state.scrollY||0),a?window.location.hash=a:window.scroll({top:s}),o(r({},e),{url:i,hash:a})},pre:{clip:function(e,t){var n=t.content;if("undefined"!=typeof document&&"function"==typeof document.execCommand){var r=document.createElement("textarea");r.id="copy",r.innerHTML=n,document.body.appendChild(r);var o=document.getElementById("copy");o.select(),document.execCommand("copy"),document.body.removeChild(o)}return e}}},ef={listenPopState:function(e,t){var n=function(n){return e(t,n)};return addEventListener("popstate",n),function(){return removeEventListener("popstate",n)}}},ep={"/docs/":function(e){return[I({id:"magic-themesdocs"},"@magic-themes/docs"),J(["this is the ",en({to:"https://github.com/magic-themes",text:"@magic-themes"})," docs theme.\nIt is being used as the documentation theme for most @magic packages."]),F({id:"installation"},"installation"),el({lines:"false"},"npm install --save --save-exact @magic-themes/docs"),R({id:"usage"},"usage"),F({id:"require"},"require"),J("in /config.mjs, just require the theme."),el("// /config.mjs\n\nexport default {\n  // ... other config\n  THEME: 'docs',\n\n  // multiple themes can be used too:\n  THEME: ['docs', 'your-theme-name'],\n}"),F({id:"customize"},"customize"),J("you can customize and add any kind of style\ncreate /assets/themes/docs/index.mjs, any css there will overwrite the theme css"),el("// /assets/themes/docs/index.mjs\n\nexport default vars => ({\n  body: {\n    color: vars.colors.orange[900],\n  },\n}"),J("magic will then find and merge the themes automatically, just as it did on this page"),ec({state:e})]},"/docs/404/":function(){return D("404 - not found.")}};T({init:o(r({},{logotext:"@magic-themes/docs",menu:[{text:"installation",to:"/docs/#installation"},{text:"usage",to:"/docs/#usage"},{text:"customize",to:"/docs/#customize"}],nospy:{show:!1},pageClass:{},pages:{"/docs/":{menu:[{text:"installation",to:"/docs/#installation"},{text:"usage",to:"/docs/#usage"},{text:"customize",to:"/docs/#customize"}],vars:{background:{dark:"#232323",light:"#eeeeee"},link:{dark:"#eeeeee",hover:{dark:"#fefefe",light:"#232323"},light:"#232323"},text:{dark:"#cccccc",light:"#232323"},widths:{laptop:"1024px",tablet:"500px"}}},"/docs/404/":{description:"404 - not found.",title:"404 - not found"}},root:"/docs/",theme:"dark",url:"/docs/",vars:{background:{dark:"#232323",light:"#eeeeee"},link:{dark:"#eeeeee",hover:{dark:"#fefefe",light:"#232323"},light:"#232323"},text:{dark:"#cccccc",light:"#232323"},widths:{laptop:"1024px",tablet:"500px"}}}),{url:window.location.pathname,hash:window.location.hash.substr(1)}),subscriptions:function(e){return[[ef.listenPopState,ed.pop]]},view:function(e){var t=ep[e.url]?e.url:"/404/",n=ep[t],r=e.pages&&e.pages[t];return r&&Object.keys(r).forEach(function(t){e[t]=r[t]}),e.url=t,es({page:n,state:e},[function(){return arguments.length>0&&void 0!==arguments[0]&&arguments[0],X({class:"LightSwitch icon",onclick:ed.changeTheme,height:25,width:25,viewBox:"0 0 352 460"},[$({d:"M149 48C96 48 48 95 47 143c-1 13 19 17 20 0-1-35 48-75 83-75 15 0 12-22-1-20z"}),$({d:"M176 0C74 0 0 83 0 176c9 91 84 118 100 204h20c-16-92-97-138-100-204C22 70 105 21 176 20zM95 400c2 68 20 48 40 60h82c20-12 38 8 40-60z"}),$({d:"M175 0c102 0 177 83 177 176-9 91-86 118-102 204h-20c16-92 99-138 102-204-2-106-86-155-157-156z"})])}(e),ea(e)])},node:document.getElementById("Magic")})}();