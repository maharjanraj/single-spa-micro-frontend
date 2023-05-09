/*! For license information please see dc-cra.js.LICENSE.txt */
System.register(["react","react-dom","@dc/state"],(function(e,t){var n={},r={},o={};return Object.defineProperty(n,"__esModule",{value:!0}),{setters:[function(e){Object.keys(e).forEach((function(t){n[t]=e[t]}))},function(e){r.default=e.default},function(e){o.state=e.state}],execute:function(){e(function(){var e={418:function(e){"use strict";var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var a,i,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var l in a=Object(arguments[c]))n.call(a,l)&&(s[l]=a[l]);if(t){i=t(a);for(var u=0;u<i.length;u++)r.call(a,i[u])&&(s[i[u]]=a[i[u]])}}return s}},251:function(e,t,n){"use strict";n(418);var r=n(954),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),t.Fragment=a("react.fragment")}var i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,a={},l=null,u=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,r)&&!c.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:l,ref:u,props:a,_owner:i.current}}t.jsx=l,t.jsxs=l},893:function(e,t,n){"use strict";e.exports=n(251)},379:function(e){"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],u=a[l]||0,p="".concat(l," ").concat(u);a[l]=u+1;var d=n(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)t[d].references++,t[d].updater(f);else{var h=o(f,r);r.byIndex=s,t.splice(s,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var c=r(e,o),l=0;l<a.length;l++){var u=n(a[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=c}}},569:function(e){"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:function(e){"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:function(e,t,n){"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:function(e){"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:function(e){"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},722:function(e,t,n){const r=n(905).R;t.s=function(e){if(e||(e=1),!n.y.meta||!n.y.meta.url)throw console.error("__system_context__",n.y),Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");n.p=r(n.y.meta.url,e)}},905:function(e,t,n){t.R=function(e,t){var n=document.createElement("a");n.href=e;for(var r="/"===n.pathname[0]?n.pathname:"/"+n.pathname,o=0,a=r.length;o!==t&&a>=0;)"/"===r[--a]&&o++;if(o!==t)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+t+") is greater than the number of directories ("+o+") in the URL path "+e);var i=r.slice(0,a+1);return n.protocol+"//"+n.host+i};Number.isInteger},444:function(e,t,n){"use strict";var r=n(658),o=n.n(r),a=n(118),i=n.n(a)()(o());i.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),t.Z=i},830:function(e,t,n){"use strict";var r=n(658),o=n.n(r),a=n(118),i=n.n(a)()(o());i.push([e.id,"body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n","",{version:3,sources:["webpack://./src/index.css"],names:[],mappings:"AAAA;EACE,SAAS;EACT;;cAEY;EACZ,mCAAmC;EACnC,kCAAkC;AACpC;;AAEA;EACE;aACW;AACb",sourcesContent:["body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n"],sourceRoot:""}]),t.Z=i},118:function(e){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},658:function(e){"use strict";function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}e.exports=function(e){var n,r,o=(r=4,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,o,a=[],i=!0,s=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){s=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(s)throw o}}return a}}(n,r)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[1],i=o[3];if(!i)return a;if("function"==typeof btoa){var s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),l="/*# ".concat(c," */"),u=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[a].concat(u).concat([l]).join("\n")}return[a].join("\n")}},798:function(e){"use strict";e.exports=o},954:function(e){"use strict";e.exports=n},493:function(e){"use strict";e.exports=r}},a={};function i(t){var n=a[t];if(void 0!==n)return n.exports;var r=a[t]={id:t,exports:{}};return e[t](r,r.exports,i),r.exports}i.y=t,i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="",i.nc=void 0;var s={};return(0,i(722).s)(1),function(){"use strict";i.r(s),i.d(s,{bootstrap:function(){return ot},mount:function(){return at},unmount:function(){return it}});var e=i(954),t=i(493);function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){var n;if("function"!=typeof(n=t.domElement?function(){return t.domElement}:t.domElementGetter?t.domElementGetter:e.domElementGetter?e.domElementGetter:function(e){var t=e.appName||e.name;if(!t)throw Error("single-spa's dom-element-getter-helpers was not given an application name as a prop, so it can't make a unique dom element container for the react application");var n="single-spa-application:".concat(t);return function(){var e=document.getElementById(n);return e||((e=document.createElement("div")).id=n,document.body.appendChild(e)),e}}(t)))throw Error("single-spa's dom-element-getter-helpers was given an invalid domElementGetter for application or parcel '".concat(t.name,"'. Expected a function, received ").concat(c(n)));return function(){var e=n(t);if(!(e instanceof HTMLElement))throw Error("single-spa's dom-element-getter-helpers: domElementGetter returned an invalid dom element for application or parcel '".concat(t.name,"'. Expected HTMLElement, received ").concat(c(e)));return e}}var u=null;try{u=require("react").createContext()}catch(n){}var p,d={React:null,ReactDOM:null,rootComponent:null,loadRootComponent:null,renderType:null,errorBoundary:null,errorBoundaryClass:null,domElementGetter:null,parcelCanUpdate:!0,suppressComponentDidCatchWarning:!1,domElements:{},renderResults:{},updateResolves:{}};function f(e,t){return e.rootComponent?Promise.resolve():e.loadRootComponent(t).then((function(t){e.rootComponent=t}))}function h(e,t){return new Promise((function(n,r){e.suppressComponentDidCatchWarning||!function(e){if(!(e&&"string"==typeof e.version&&e.version.indexOf(".")>=0))return!1;var t=e.version.slice(0,e.version.indexOf("."));try{return Number(t)>=16}catch(e){return!1}}(e.React)||e.errorBoundary||(e.rootComponent.prototype?e.rootComponent.prototype.componentDidCatch||console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent should implement componentDidCatch to avoid accidentally unmounting the entire single-spa application.")):console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent does not implement an error boundary.  If using a functional component, consider providing an opts.errorBoundary to singleSpaReact(opts).")));var o=y(e,t,(function(){n(this)})),a=l(e,t)(),i=function(e){var t=e.opts,n=e.elementToRender,r=e.domElement,o="function"==typeof t.renderType?t.renderType():t.renderType;if(["createRoot","unstable_createRoot","createBlockingRoot","unstable_createBlockingRoot"].indexOf(o)>=0){var a=t.ReactDOM[o](r);return a.render(n),a}return"hydrate"===o?t.ReactDOM.hydrate(n,r):t.ReactDOM.render(n,r),null}({elementToRender:o,domElement:a,opts:e});e.domElements[t.name]=a,e.renderResults[t.name]=i}))}function m(e,t){return new Promise((function(n){e.unmountFinished=n;var r=e.renderResults[t.name];r&&r.unmount?r.unmount():e.ReactDOM.unmountComponentAtNode(e.domElements[t.name]),delete e.domElements[t.name],delete e.renderResults[t.name]}))}function v(e,t){return new Promise((function(n){e.updateResolves[t.name]||(e.updateResolves[t.name]=[]),e.updateResolves[t.name].push(n);var r=y(e,t,null),o=e.renderResults[t.name];if(o&&o.render)o.render(r);else{var a=l(e,t)();e.ReactDOM.render(r,a)}}))}function y(e,t,n){var o=e.React.createElement(e.rootComponent,t),a=u?e.React.createElement(u.Provider,{value:t},o):o;return(e.errorBoundary||t.errorBoundary||e.errorBoundaryClass||t.errorBoundaryClass)&&(e.errorBoundaryClass=e.errorBoundaryClass||t.errorBoundaryClass||function(e,t){function n(t){e.React.Component.apply(this,arguments),this.state={caughtError:null,caughtErrorInfo:null},n.displayName="SingleSpaReactErrorBoundary(".concat(t.name,")")}return n.prototype=Object.create(e.React.Component.prototype),n.prototype.render=function(){return this.state.caughtError?(e.errorBoundary||t.errorBoundary)(this.state.caughtError,this.state.caughtErrorInfo,this.props):this.props.children},n.prototype.componentDidCatch=function(e,t){this.setState({caughtError:e,caughtErrorInfo:t})},n}(e,t),a=e.React.createElement(e.errorBoundaryClass,t,a)),e.React.createElement(e.SingleSpaRoot,r(r({},t),{},{mountFinished:n,updateFinished:function(){e.updateResolves[t.name]&&(e.updateResolves[t.name].forEach((function(e){return e()})),delete e.updateResolves[t.name])},unmountFinished:function(){setTimeout(e.unmountFinished)}}),a)}function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function b(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==g(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===g(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},w.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(p||(p={}));const E="popstate";function C(e,t){if(!1===e||null==e)throw new Error(t)}function S(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw new Error(t)}catch(e){}}}function O(e,t){return{usr:e.state,key:e.key,idx:t}}function R(e,t,n,r){return void 0===n&&(n=null),w({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?j(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function x(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function j(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}var P;function A(e,t,n){void 0===n&&(n="/");let r=H(("string"==typeof t?j(t):t).pathname||"/",n);if(null==r)return null;let o=k(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(o);let a=null;for(let e=0;null==a&&e<o.length;++e)a=F(o[e],$(r));return a}function k(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let o=(e,o,a)=>{let i={relativePath:void 0===a?e.path||"":a,caseSensitive:!0===e.caseSensitive,childrenIndex:o,route:e};i.relativePath.startsWith("/")&&(C(i.relativePath.startsWith(r),'Absolute route path "'+i.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),i.relativePath=i.relativePath.slice(r.length));let s=G([r,i.relativePath]),c=n.concat(i);e.children&&e.children.length>0&&(C(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+s+'".'),k(e.children,t,c,s)),(null!=e.path||e.index)&&t.push({path:s,score:L(s,e.index),routesMeta:c})};return e.forEach(((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let n of U(e.path))o(e,t,n);else o(e,t)})),t}function U(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,o=n.endsWith("?"),a=n.replace(/\?$/,"");if(0===r.length)return o?[a,""]:[a];let i=U(r.join("/")),s=[];return s.push(...i.map((e=>""===e?a:[a,e].join("/")))),o&&s.push(...i),s.map((t=>e.startsWith("/")&&""===t?"/":t))}!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(P||(P={})),new Set(["lazy","caseSensitive","path","id","index","children"]);const D=/^:\w+$/,B=3,T=2,_=1,M=10,N=-2,I=e=>"*"===e;function L(e,t){let n=e.split("/"),r=n.length;return n.some(I)&&(r+=N),t&&(r+=T),n.filter((e=>!I(e))).reduce(((e,t)=>e+(D.test(t)?B:""===t?_:M)),r)}function F(e,t){let{routesMeta:n}=e,r={},o="/",a=[];for(let e=0;e<n.length;++e){let i=n[e],s=e===n.length-1,c="/"===o?t:t.slice(o.length)||"/",l=W({path:i.relativePath,caseSensitive:i.caseSensitive,end:s},c);if(!l)return null;Object.assign(r,l.params);let u=i.route;a.push({params:r,pathname:G([o,l.pathname]),pathnameBase:q(G([o,l.pathnameBase])),route:u}),"/"!==l.pathnameBase&&(o=G([o,l.pathnameBase]))}return a}function W(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!0),S("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,((e,t)=>(r.push(t),"/([^\\/]+)")));return e.endsWith("*")?(r.push("*"),o+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":""!==e&&"/"!==e&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let a=o[0],i=a.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:r.reduce(((e,t,n)=>{if("*"===t){let e=s[n]||"";i=a.slice(0,a.length-e.length).replace(/(.)\/+$/,"$1")}return e[t]=function(e,t){try{return decodeURIComponent(e)}catch(n){return S(!1,'The value for the URL param "'+t+'" will not be decoded because the string "'+e+'" is a malformed URL segment. This is probably due to a bad percent encoding ('+n+")."),e}}(s[n]||"",t),e}),{}),pathname:a,pathnameBase:i,pattern:e}}function $(e){try{return decodeURI(e)}catch(t){return S(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function H(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function Z(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function J(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function z(e,t,n,r){let o;void 0===r&&(r=!1),"string"==typeof e?o=j(e):(o=w({},e),C(!o.pathname||!o.pathname.includes("?"),Z("?","pathname","search",o)),C(!o.pathname||!o.pathname.includes("#"),Z("#","pathname","hash",o)),C(!o.search||!o.search.includes("#"),Z("#","search","hash",o)));let a,i=""===e||""===o.pathname,s=i?"/":o.pathname;if(r||null==s)a=n;else{let e=t.length-1;if(s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;o.pathname=t.join("/")}a=e>=0?t[e]:"/"}let c=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:o=""}="string"==typeof e?j(e):e,a=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:a,search:K(r),hash:V(o)}}(o,a),l=s&&"/"!==s&&s.endsWith("/"),u=(i||"."===s)&&n.endsWith("/");return c.pathname.endsWith("/")||!l&&!u||(c.pathname+="/"),c}const G=e=>e.join("/").replace(/\/\/+/g,"/"),q=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),K=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",V=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";class Y extends Error{}const Q=["post","put","patch","delete"],X=(new Set(Q),["get",...Q]);function ee(){return ee=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ee.apply(this,arguments)}new Set(X),new Set([301,302,303,307,308]),new Set([307,308]),"undefined"!=typeof window&&void 0!==window.document&&window.document.createElement,Symbol("deferred");const te=e.createContext(null),ne=e.createContext(null),re=e.createContext(null),oe=e.createContext(null),ae=e.createContext({outlet:null,matches:[],isDataRoute:!1}),ie=e.createContext(null);function se(){return null!=e.useContext(oe)}function ce(){return se()||C(!1),e.useContext(oe).location}function le(t){e.useContext(re).static||e.useLayoutEffect(t)}function ue(){let{isDataRoute:t}=e.useContext(ae);return t?function(){let{router:t}=function(t){let n=e.useContext(te);return n||C(!1),n}(ye.UseNavigateStable),n=we(ge.UseNavigateStable),r=e.useRef(!1);le((()=>{r.current=!0}));let o=e.useCallback((function(e,o){void 0===o&&(o={}),r.current&&("number"==typeof e?t.navigate(e):t.navigate(e,ee({fromRouteId:n},o)))}),[t,n]);return o}():function(){se()||C(!1);let{basename:t,navigator:n}=e.useContext(re),{matches:r}=e.useContext(ae),{pathname:o}=ce(),a=JSON.stringify(J(r).map((e=>e.pathnameBase))),i=e.useRef(!1);le((()=>{i.current=!0}));let s=e.useCallback((function(e,r){if(void 0===r&&(r={}),!i.current)return;if("number"==typeof e)return void n.go(e);let s=z(e,JSON.parse(a),o,"path"===r.relative);"/"!==t&&(s.pathname="/"===s.pathname?t:G([t,s.pathname])),(r.replace?n.replace:n.push)(s,r.state,r)}),[t,n,a,o]);return s}()}function pe(t,n){let{relative:r}=void 0===n?{}:n,{matches:o}=e.useContext(ae),{pathname:a}=ce(),i=JSON.stringify(J(o).map((e=>e.pathnameBase)));return e.useMemo((()=>z(t,JSON.parse(i),a,"path"===r)),[t,i,a,r])}function de(t,n,r){se()||C(!1);let{navigator:o}=e.useContext(re),{matches:a}=e.useContext(ae),i=a[a.length-1],s=i?i.params:{},c=(i&&i.pathname,i?i.pathnameBase:"/");i&&i.route;let l,u=ce();if(n){var d;let e="string"==typeof n?j(n):n;"/"===c||(null==(d=e.pathname)?void 0:d.startsWith(c))||C(!1),l=e}else l=u;let f=l.pathname||"/",h=A(t,{pathname:"/"===c?f:f.slice(c.length)||"/"}),m=function(t,n,r){var o;if(void 0===n&&(n=[]),void 0===r&&(r=null),null==t){var a;if(null==(a=r)||!a.errors)return null;t=r.matches}let i=t,s=null==(o=r)?void 0:o.errors;if(null!=s){let e=i.findIndex((e=>e.route.id&&(null==s?void 0:s[e.route.id])));e>=0||C(!1),i=i.slice(0,Math.min(i.length,e+1))}return i.reduceRight(((t,o,a)=>{let c=o.route.id?null==s?void 0:s[o.route.id]:null,l=null;r&&(l=o.route.errorElement||he);let u=n.concat(i.slice(0,a+1)),p=()=>{let n;return n=c?l:o.route.Component?e.createElement(o.route.Component,null):o.route.element?o.route.element:t,e.createElement(ve,{match:o,routeContext:{outlet:t,matches:u,isDataRoute:null!=r},children:n})};return r&&(o.route.ErrorBoundary||o.route.errorElement||0===a)?e.createElement(me,{location:r.location,revalidation:r.revalidation,component:l,error:c,children:p(),routeContext:{outlet:null,matches:u,isDataRoute:!0}}):p()}),null)}(h&&h.map((e=>Object.assign({},e,{params:Object.assign({},s,e.params),pathname:G([c,o.encodeLocation?o.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?c:G([c,o.encodeLocation?o.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),a,r);return n&&m?e.createElement(oe.Provider,{value:{location:ee({pathname:"/",search:"",hash:"",state:null,key:"default"},l),navigationType:p.Pop}},m):m}function fe(){let t=function(){var t;let n=e.useContext(ie),r=function(t){let n=e.useContext(ne);return n||C(!1),n}(ge.UseRouteError),o=we(ge.UseRouteError);return n||(null==(t=r.errors)?void 0:t[o])}(),n=function(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return e.createElement(e.Fragment,null,e.createElement("h2",null,"Unexpected Application Error!"),e.createElement("h3",{style:{fontStyle:"italic"}},n),r?e.createElement("pre",{style:o},r):null,null)}const he=e.createElement(fe,null);class me extends e.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error?e.createElement(ae.Provider,{value:this.props.routeContext},e.createElement(ie.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ve(t){let{routeContext:n,match:r,children:o}=t,a=e.useContext(te);return a&&a.static&&a.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=r.route.id),e.createElement(ae.Provider,{value:n},o)}var ye,ge,be;function we(t){let n=function(t){let n=e.useContext(ae);return n||C(!1),n}(),r=n.matches[n.matches.length-1];return r.route.id||C(!1),r.route.id}function Ee(e){C(!1)}function Ce(t){let{basename:n="/",children:r=null,location:o,navigationType:a=p.Pop,navigator:i,static:s=!1}=t;se()&&C(!1);let c=n.replace(/^\/*/,"/"),l=e.useMemo((()=>({basename:c,navigator:i,static:s})),[c,i,s]);"string"==typeof o&&(o=j(o));let{pathname:u="/",search:d="",hash:f="",state:h=null,key:m="default"}=o,v=e.useMemo((()=>{let e=H(u,c);return null==e?null:{location:{pathname:e,search:d,hash:f,state:h,key:m},navigationType:a}}),[c,u,d,f,h,m,a]);return null==v?null:e.createElement(re.Provider,{value:l},e.createElement(oe.Provider,{children:r,value:v}))}function Se(e){let{children:t,location:n}=e;return de(Re(t),n)}!function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"}(ye||(ye={})),function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"}(ge||(ge={})),function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"}(be||(be={})),new Promise((()=>{}));class Oe extends e.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,t){console.error("<Await> caught the following error during render",e,t)}render(){let{children:e,errorElement:t,resolve:n}=this.props,r=null,o=be.pending;if(n instanceof Promise)if(this.state.error){be.error;let e=this.state.error;Promise.reject().catch((()=>{})),Object.defineProperty(r,"_tracked",{get:()=>!0}),Object.defineProperty(r,"_error",{get:()=>e})}else n._tracked?void 0!==r._error?be.error:void 0!==r._data?be.success:be.pending:(be.pending,Object.defineProperty(n,"_tracked",{get:()=>!0}),n.then((e=>Object.defineProperty(n,"_data",{get:()=>e})),(e=>Object.defineProperty(n,"_error",{get:()=>e}))));else be.success,Promise.resolve(),Object.defineProperty(r,"_tracked",{get:()=>!0}),Object.defineProperty(r,"_data",{get:()=>n});if(o===be.error&&r._error instanceof AbortedDeferredError)throw neverSettledPromise;if(o===be.error&&!t)throw r._error;if(o===be.error)return React.createElement(AwaitContext.Provider,{value:r,children:t});if(o===be.success)return React.createElement(AwaitContext.Provider,{value:r,children:e});throw r}}function Re(t,n){void 0===n&&(n=[]);let r=[];return e.Children.forEach(t,((t,o)=>{if(!e.isValidElement(t))return;let a=[...n,o];if(t.type===e.Fragment)return void r.push.apply(r,Re(t.props.children,a));t.type!==Ee&&C(!1),t.props.index&&t.props.children&&C(!1);let i={id:t.props.id||a.join("-"),caseSensitive:t.props.caseSensitive,element:t.props.element,Component:t.props.Component,index:t.props.index,path:t.props.path,loader:t.props.loader,action:t.props.action,errorElement:t.props.errorElement,ErrorBoundary:t.props.ErrorBoundary,hasErrorBoundary:null!=t.props.ErrorBoundary||null!=t.props.errorElement,shouldRevalidate:t.props.shouldRevalidate,handle:t.props.handle,lazy:t.props.lazy};t.props.children&&(i.children=Re(t.props.children,a)),r.push(i)})),r}function xe(){return xe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xe.apply(this,arguments)}const je=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function Pe(t){let{basename:n,children:r,window:o}=t,a=e.useRef();null==a.current&&(a.current=function(e){return void 0===e&&(e={}),function(e,t,n,r){void 0===r&&(r={});let{window:o=document.defaultView,v5Compat:a=!1}=r,i=o.history,s=p.Pop,c=null,l=u();function u(){return(i.state||{idx:null}).idx}function d(){s=p.Pop;let e=u(),t=null==e?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e){let t="null"!==o.location.origin?o.location.origin:o.location.href,n="string"==typeof e?e:x(e);return C(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==l&&(l=0,i.replaceState(w({},i.state,{idx:l}),""));let h={get action(){return s},get location(){return e(o,i)},listen(e){if(c)throw new Error("A history only accepts one active listener");return o.addEventListener(E,d),c=e,()=>{o.removeEventListener(E,d),c=null}},createHref(e){return t(o,e)},createURL:f,encodeLocation(e){let t=f(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){s=p.Push;let r=R(h.location,e,t);n&&n(r,e),l=u()+1;let d=O(r,l),f=h.createHref(r);try{i.pushState(d,"",f)}catch(e){o.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})},replace:function(e,t){s=p.Replace;let r=R(h.location,e,t);n&&n(r,e),l=u();let o=O(r,l),d=h.createHref(r);i.replaceState(o,"",d),a&&c&&c({action:s,location:h.location,delta:0})},go(e){return i.go(e)}};return h}((function(e,t){let{pathname:n,search:r,hash:o}=e.location;return R("",{pathname:n,search:r,hash:o},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"==typeof t?t:x(t)}),null,e)}({window:o,v5Compat:!0}));let i=a.current,[s,c]=e.useState({action:i.action,location:i.location});return e.useLayoutEffect((()=>i.listen(c)),[i]),e.createElement(Ce,{basename:n,children:r,location:s.location,navigationType:s.action,navigator:i})}const Ae="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,ke=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ue=e.forwardRef((function(t,n){let r,{onClick:o,relative:a,reloadDocument:i,replace:s,state:c,target:l,to:u,preventScrollReset:p}=t,d=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,je),{basename:f}=e.useContext(re),h=!1;if("string"==typeof u&&ke.test(u)&&(r=u,Ae))try{let e=new URL(window.location.href),t=u.startsWith("//")?new URL(e.protocol+u):new URL(u),n=H(t.pathname,f);t.origin===e.origin&&null!=n?u=n+t.search+t.hash:h=!0}catch(e){}let m=function(t,n){let{relative:r}=void 0===n?{}:n;se()||C(!1);let{basename:o,navigator:a}=e.useContext(re),{hash:i,pathname:s,search:c}=pe(t,{relative:r}),l=s;return"/"!==o&&(l="/"===s?o:G([o,s])),a.createHref({pathname:l,search:c,hash:i})}(u,{relative:a}),v=function(t,n){let{target:r,replace:o,state:a,preventScrollReset:i,relative:s}=void 0===n?{}:n,c=ue(),l=ce(),u=pe(t,{relative:s});return e.useCallback((e=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(e,r)){e.preventDefault();let n=void 0!==o?o:x(l)===x(u);c(t,{replace:n,state:a,preventScrollReset:i,relative:s})}}),[l,c,u,o,a,r,t,i,s])}(u,{replace:s,state:c,target:l,preventScrollReset:p,relative:a});return e.createElement("a",xe({},d,{href:r||m,onClick:h||i?o:function(e){o&&o(e),e.defaultPrevented||v(e)},ref:n,target:l}))}));var De,Be;function Te(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(De||(De={})),function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(Be||(Be={}));var _e=i(798),Me=i(893),Ne=function(t){var n=t.devices,r=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(l)throw o}}return s}}(e,t)||function(e,t){if(e){if("string"==typeof e)return Te(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Te(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}((0,e.useState)(!1),2),o=r[0],a=r[1],i=ue();return(0,Me.jsxs)("div",{children:[(0,Me.jsx)("h1",{children:"Page1"}),n&&(0,Me.jsxs)(Me.Fragment,{children:[(0,Me.jsx)("button",{onClick:function(){return a(!o)},children:"Show devices"}),o&&(0,Me.jsx)(n,{onChange:function(e){console.log(e.target.value),_e.state.addDevice(e.target.value)}})]}),(0,Me.jsx)("button",{onClick:function(){return i("/page2")},children:"Next"})]})},Ie=function(){var e=ue();return console.log(_e.state.getDevice()),(0,Me.jsxs)("div",{children:["Page2 Selected Device: ",_e.state.getDevice(),(0,Me.jsx)("button",{onClick:function(){return e("/page1")},children:"Prev"})]})},Le=i(379),Fe=i.n(Le),We=i(795),$e=i.n(We),He=i(569),Ze=i.n(He),Je=i(565),ze=i.n(Je),Ge=i(216),qe=i.n(Ge),Ke=i(589),Ve=i.n(Ke),Ye=i(444),Qe={};function Xe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function et(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Xe(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Xe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}Qe.styleTagTransform=Ve(),Qe.setAttributes=ze(),Qe.insert=Ze().bind(null,"head"),Qe.domAPI=$e(),Qe.insertStyleElement=qe(),Fe()(Ye.Z,Qe),Ye.Z&&Ye.Z.locals&&Ye.Z.locals;var tt=i(830),nt={};nt.styleTagTransform=Ve(),nt.setAttributes=ze(),nt.insert=Ze().bind(null,"head"),nt.domAPI=$e(),nt.insertStyleElement=qe(),Fe()(tt.Z,nt),tt.Z&&tt.Z.locals&&tt.Z.locals;var rt=function(e){if("object"!==o(e))throw new Error("single-spa-react requires a configuration object");var t=r(r({},d),e);if(!t.React)throw new Error("single-spa-react must be passed opts.React");if(!t.ReactDOM)throw new Error("single-spa-react must be passed opts.ReactDOM");if(!t.rootComponent&&!t.loadRootComponent)throw new Error("single-spa-react must be passed opts.rootComponent or opts.loadRootComponent");if(t.errorBoundary&&"function"!=typeof t.errorBoundary)throw Error("The errorBoundary opt for single-spa-react must either be omitted or be a function that returns React elements");!u&&t.React.createContext&&(u=t.React.createContext()),t.SingleSpaRoot=function(e){function t(e){t.displayName="SingleSpaRoot(".concat(e.name,")")}return t.prototype=Object.create(e.React.Component.prototype),t.prototype.componentDidMount=function(){setTimeout(this.props.mountFinished)},t.prototype.componentWillUnmount=function(){setTimeout(this.props.unmountFinished)},t.prototype.render=function(){return setTimeout(this.props.updateFinished),this.props.children},t}(t);var n={bootstrap:f.bind(null,t),mount:h.bind(null,t),unmount:m.bind(null,t)};return t.parcelCanUpdate&&(n.update=v.bind(null,t)),n}({React:e.default,ReactDOM:t.default,rootComponent:function(e){return(0,Me.jsxs)("div",{children:[(0,Me.jsx)("div",{id:"single-spa-application:mf"}),(0,Me.jsx)(Pe,{basename:e.basename,children:(0,Me.jsxs)("div",{children:[(0,Me.jsxs)("ul",{children:[(0,Me.jsx)("li",{children:(0,Me.jsx)(Ue,{to:"page1",children:"Page1"})}),(0,Me.jsx)("li",{children:(0,Me.jsx)(Ue,{to:"page2",children:"Page2"})})]}),(0,Me.jsxs)(Se,{children:[(0,Me.jsx)(Ee,{path:"page1",element:(0,Me.jsx)(Ne,et({},e))}),(0,Me.jsx)(Ee,{path:"page2",element:(0,Me.jsx)(Ie,{})})]})]})})]})},errorBoundary:function(e,t,n){return null}}),ot=rt.bootstrap,at=rt.mount,it=rt.unmount}(),s}())}}}));
//# sourceMappingURL=dc-cra.js.map