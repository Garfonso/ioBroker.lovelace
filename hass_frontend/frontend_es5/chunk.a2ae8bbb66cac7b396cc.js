(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{671:function(e,t,n){"use strict";n.r(t);n(140);var o=n(4),r=n(26);n(122),n(92);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(['\n      <style include="ha-style">\n        iframe {\n          border: 0;\n          width: 100%;\n          height: calc(100% - 64px);\n        }\n      </style>\n      <app-toolbar>\n        <ha-menu-button></ha-menu-button>\n        <div main-title>[[panel.title]]</div>\n      </app-toolbar>\n\n      <iframe\n        src="[[panel.config.url]]"\n        sandbox="allow-forms allow-popups allow-pointer-lock allow-same-origin allow-scripts"\n        allowfullscreen="true"\n        webkitallowfullscreen="true"\n        mozallowfullscreen="true"\n      ></iframe>\n    ']);return u=function(){return e},e}function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,a(t).apply(this,arguments))}var n,i,p;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,r["a"]),n=t,p=[{key:"template",get:function(){return Object(o.a)(u())}},{key:"properties",get:function(){return{panel:{type:Object}}}}],(i=null)&&l(n.prototype,i),p&&l(n,p),t}();customElements.define("ha-panel-iframe",p)}}]);