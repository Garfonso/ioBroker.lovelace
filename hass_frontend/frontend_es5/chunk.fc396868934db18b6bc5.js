(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[7393],{52003:function(e,t,n){"use strict";function r(e,t,n,r,i,o,a){try{var s=e[o](a),c=s.value}catch(l){return void n(l)}s.done?t(c):Promise.resolve(c).then(r,i)}n.d(t,{F:function(){return i},C:function(){return o}});var i=function(){var e,t=(e=regeneratorRuntime.mark((function e(t,r){var i,o,s,c,l,u=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=u.length>2&&void 0!==u[2]&&u[2],t.parentNode){e.next=3;break}throw new Error("Cannot setup Leaflet map on disconnected element");case 3:return e.next=5,n.e(6567).then(n.t.bind(n,70208,7));case 5:if((o=e.sent.default).Icon.Default.imagePath="/static/images/leaflet/images/",!i){e.next=10;break}return e.next=10,n.e(1294).then(n.t.bind(n,27716,7));case 10:return s=o.map(t),(c=document.createElement("link")).setAttribute("href","/static/images/leaflet/leaflet.css"),c.setAttribute("rel","stylesheet"),t.parentNode.appendChild(c),s.setView([52.3731339,4.8903147],13),l=a(o,Boolean(r)).addTo(s),e.abrupt("return",[s,o,l]);case 18:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(i,o){var a=e.apply(t,n);function s(e){r(a,i,o,s,c,"next",e)}function c(e){r(a,i,o,s,c,"throw",e)}s(void 0)}))});return function(e,n){return t.apply(this,arguments)}}(),o=function(e,t,n,r){return t.removeLayer(n),(n=a(e,r)).addTo(t),n},a=function(e,t){return e.tileLayer("https://{s}.basemaps.cartocdn.com/".concat(t?"dark_all":"light_all","/{z}/{x}/{y}").concat(e.Browser.retina?"@2x.png":".png"),{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>',subdomains:"abcd",minZoom:0,maxZoom:20})}},83849:function(e,t,n){"use strict";n.d(t,{c:function(){return i}});var r=n(47181),i=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];n?history.replaceState(null,"",t):history.pushState(null,"",t),(0,r.B)(window,"location-changed",{replace:n})}},96151:function(e,t,n){"use strict";n.d(t,{y:function(){return r}});var r=function(){return new Promise((function(e){var t;t=e,requestAnimationFrame((function(){return setTimeout(t,0)}))}))}},45841:function(e,t,n){"use strict";n.d(t,{V3:function(){return i},fT:function(){return o}});var r=n(83849),i="#FF9800",o=function(e,t){t,(0,r.c)(e,"/config/zone/new")}},58404:function(e,t,n){"use strict";n.r(t);n(53918),n(30879),n(27662),n(84281);var r=n(15652),i=n(47181),o=(n(51482),n(20122)),a=n(76307);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(){var e=f(["\n      .row {\n        display: flex;\n        flex-direction: row;\n        margin: 0 -8px;\n        align-items: center;\n      }\n\n      .secondary {\n        color: var(--secondary-text-color);\n      }\n\n      .flex {\n        flex: 1;\n      }\n\n      .middle-text {\n        margin: 24px 0;\n      }\n\n      .row > * {\n        margin: 0 8px;\n      }\n      .footer {\n        margin-top: 16px;\n        text-align: right;\n      }\n    "]);return c=function(){return e},e}function l(e,t,n,r,i,o,a){try{var s=e[o](a),c=s.value}catch(l){return void n(l)}s.done?t(c):Promise.resolve(c).then(r,i)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function a(e){l(o,r,i,a,s,"next",e)}function s(e){l(o,r,i,a,s,"throw",e)}a(void 0)}))}}function d(){var e=f(["\n      <p>\n        ","\n      </p>\n\n      <paper-input\n        .label=",'\n        name="name"\n        .disabled=',"\n        .value=","\n        @value-changed=",'\n      ></paper-input>\n\n      <div class="middle-text">\n        <p>\n          ','\n        </p>\n\n        <div class="row">\n          <div>\n            ',"\n          </div>\n          <mwc-button @click=",">\n            ",'\n          </mwc-button>\n        </div>\n      </div>\n\n      <div class="row">\n        <ha-location-editor\n          class="flex"\n          .hass=',"\n          .location=","\n          .fitZoom=","\n          .darkMode=","\n          @change=",'\n        ></ha-location-editor>\n      </div>\n\n      <div class="row">\n        <paper-input\n          class="flex"\n          .label=','\n          name="timeZone"\n          list="timezones"\n          .disabled=',"\n          .value=","\n          @value-changed=",'\n        ></paper-input>\n\n        <paper-input\n          class="flex"\n          .label=','\n          name="elevation"\n          type="number"\n          .disabled=',"\n          .value=","\n          @value-changed=",'\n        >\n          <span slot="suffix">\n            ','\n          </span>\n        </paper-input>\n      </div>\n\n      <div class="row">\n        <div class="flex">\n          ','\n        </div>\n        <paper-radio-group\n          class="flex"\n          .selected=',"\n          @selected-changed=",'\n        >\n          <paper-radio-button name="metric" .disabled=',">\n            ",'\n            <div class="secondary">\n              ','\n            </div>\n          </paper-radio-button>\n          <paper-radio-button name="imperial" .disabled=',">\n            ",'\n            <div class="secondary">\n              ','\n            </div>\n          </paper-radio-button>\n        </paper-radio-group>\n      </div>\n\n      <div class="footer">\n        <mwc-button @click='," .disabled=",">\n          ","\n        </mwc-button>\n      </div>\n    "]);return d=function(){return e},e}function f(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=C(e);if(t){var i=C(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return v(this,n)}}function v(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?y(e):t}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(){g=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(n){t.forEach((function(t){t.kind===n&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var n=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var i=t.placement;if(t.kind===r&&("static"===i||"prototype"===i)){var o="static"===i?e:n;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var n=t.descriptor;if("field"===t.kind){var r=t.initializer;n={enumerable:n.enumerable,writable:n.writable,configurable:n.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,n)},decorateClass:function(e,t){var n=[],r=[],i={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,i)}),this),e.forEach((function(e){if(!w(e))return n.push(e);var t=this.decorateElement(e,i);n.push(t.element),n.push.apply(n,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:n,finishers:r};var o=this.decorateConstructor(n,t);return r.push.apply(r,o.finishers),o.finishers=r,o},addElementPlacement:function(e,t,n){var r=t[e.placement];if(!n&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var n=[],r=[],i=e.decorators,o=i.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,i[o])(s)||s);e=c.element,this.addElementPlacement(e,t),c.finisher&&r.push(c.finisher);var l=c.extras;if(l){for(var u=0;u<l.length;u++)this.addElementPlacement(l[u],t);n.push.apply(n,l)}}return{element:e,finishers:r,extras:n}},decorateConstructor:function(e,t){for(var n=[],r=t.length-1;r>=0;r--){var i=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[r])(i)||i);if(void 0!==o.finisher&&n.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:n}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?z(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var n=x(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var i=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:n,placement:r,descriptor:Object.assign({},i)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:E(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var n=E(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:n}},runClassFinishers:function(e,t){for(var n=0;n<t.length;n++){var r=(0,t[n])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,n){if(void 0!==e[t])throw new TypeError(n+" can't have a ."+t+" property.")}};return e}function b(e){var t,n=x(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:n,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function k(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function w(e){return e.decorators&&e.decorators.length}function _(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function E(e,t){var n=e[t];if(void 0!==n&&"function"!=typeof n)throw new TypeError("Expected '"+t+"' to be a function");return n}function x(e){var t=function(e,t){if("object"!==s(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===s(t)?t:String(t)}function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function S(e,t,n){return(S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=C(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var P=[52.3731339,4.8903147],O=matchMedia("(prefers-color-scheme: dark)");!function(e,t,n,r){var i=g();if(r)for(var o=0;o<r.length;o++)i=r[o](i);var a=t((function(e){i.initializeInstanceElements(e,s.elements)}),n),s=i.decorateClass(function(e){for(var t=[],n=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},r=0;r<e.length;r++){var i,o=e[r];if("method"===o.kind&&(i=t.find(n)))if(_(o.descriptor)||_(i.descriptor)){if(w(o)||w(i))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");i.descriptor=o.descriptor}else{if(w(o)){if(w(i))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");i.decorators=o.decorators}k(o,i)}else t.push(o)}return t}(a.d.map(b)),e);i.initializeClassElements(a.F,s.elements),i.runClassFinishers(a.F,s.finishers)}([(0,r.Mo)("onboarding-core-config")],(function(e,t){var n,s,l=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(r,t);var n=m(r);function r(){var t;p(this,r);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return t=n.call.apply(n,[this].concat(o)),e(y(t)),t}return r}(t);return{F:l,d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"onboardingLocalize",value:void 0},{kind:"field",decorators:[(0,r.sz)()],key:"_working",value:function(){return!1}},{kind:"field",decorators:[(0,r.sz)()],key:"_name",value:void 0},{kind:"field",decorators:[(0,r.sz)()],key:"_location",value:void 0},{kind:"field",decorators:[(0,r.sz)()],key:"_elevation",value:void 0},{kind:"field",decorators:[(0,r.sz)()],key:"_unitSystem",value:void 0},{kind:"field",decorators:[(0,r.sz)()],key:"_timeZone",value:void 0},{kind:"method",key:"render",value:function(){return(0,r.dy)(d(),this.onboardingLocalize("ui.panel.page-onboarding.core-config.intro","name",this.hass.user.name),this.onboardingLocalize("ui.panel.page-onboarding.core-config.location_name"),this._working,this._nameValue,this._handleChange,this.onboardingLocalize("ui.panel.page-onboarding.core-config.intro_location"),this.onboardingLocalize("ui.panel.page-onboarding.core-config.intro_location_detect"),this._detect,this.onboardingLocalize("ui.panel.page-onboarding.core-config.button_detect"),this.hass,this._locationValue,14,O.matches,this._locationChanged,this.hass.localize("ui.panel.config.core.section.core.core_config.time_zone"),this._working,this._timeZoneValue,this._handleChange,this.hass.localize("ui.panel.config.core.section.core.core_config.elevation"),this._working,this._elevationValue,this._handleChange,this.hass.localize("ui.panel.config.core.section.core.core_config.elevation_meters"),this.hass.localize("ui.panel.config.core.section.core.core_config.unit_system"),this._unitSystemValue,this._unitSystemChanged,this._working,this.hass.localize("ui.panel.config.core.section.core.core_config.unit_system_metric"),this.hass.localize("ui.panel.config.core.section.core.core_config.metric_example"),this._working,this.hass.localize("ui.panel.config.core.section.core.core_config.unit_system_imperial"),this.hass.localize("ui.panel.config.core.section.core.core_config.imperial_example"),this._save,this._working,this.onboardingLocalize("ui.panel.page-onboarding.core-config.finish"))}},{kind:"method",key:"firstUpdated",value:function(e){var t,n=this;S(C(l.prototype),"firstUpdated",this).call(this,e),setTimeout((function(){return n.shadowRoot.querySelector("paper-input").focus()}),100),this.addEventListener("keypress",(function(e){13===e.keyCode&&n._save(e)})),this.shadowRoot.querySelector("[name=timeZone]").inputElement.appendChild(((t=document.createElement("datalist")).id="timezones",Object.keys(o).forEach((function(e){var n=document.createElement("option");n.value=e,n.innerHTML=o[e],t.appendChild(n)})),t))}},{kind:"get",key:"_nameValue",value:function(){return void 0!==this._name?this._name:this.onboardingLocalize("ui.panel.page-onboarding.core-config.location_name_default")}},{kind:"get",key:"_locationValue",value:function(){return this._location||P}},{kind:"get",key:"_elevationValue",value:function(){return void 0!==this._elevation?this._elevation:0}},{kind:"get",key:"_timeZoneValue",value:function(){return this._timeZone}},{kind:"get",key:"_unitSystemValue",value:function(){return void 0!==this._unitSystem?this._unitSystem:"metric"}},{kind:"method",key:"_handleChange",value:function(e){var t=e.currentTarget;this["_".concat(t.name)]=t.value}},{kind:"method",key:"_locationChanged",value:function(e){this._location=e.currentTarget.location}},{kind:"method",key:"_unitSystemChanged",value:function(e){this._unitSystem=e.detail.value}},{kind:"method",key:"_detect",value:(s=u(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._working=!0,e.prev=1,e.next=4,this.hass.callWS({type:"config/core/detect"});case 4:(t=e.sent).latitude&&t.longitude&&(this._location=[Number(t.latitude),Number(t.longitude)]),t.elevation&&(this._elevation=String(t.elevation)),t.unit_system&&(this._unitSystem=t.unit_system),t.time_zone&&(this._timeZone=t.time_zone),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),alert("Failed to detect location information: ".concat(e.t0.message));case 14:return e.prev=14,this._working=!1,e.finish(14);case 17:case"end":return e.stop()}}),e,this,[[1,11,14,17]])}))),function(){return s.apply(this,arguments)})},{kind:"method",key:"_save",value:(n=u(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),this._working=!0,e.prev=2,n=this._locationValue,e.next=6,o=this.hass,s={location_name:this._nameValue,latitude:n[0],longitude:n[1],elevation:Number(this._elevationValue),unit_system:this._unitSystemValue,time_zone:this._timeZoneValue||"UTC"},o.callWS(Object.assign({type:"config/core/update"},s));case 6:return e.next=8,(0,a.Rj)(this.hass);case 8:r=e.sent,(0,i.B)(this,"onboarding-step",{type:"core_config",result:r}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(2),this._working=!1,alert("Failed to save: ".concat(e.t0.message));case 16:case"end":return e.stop()}var o,s}),e,this,[[2,12]])}))),function(e){return n.apply(this,arguments)})},{kind:"get",static:!0,key:"styles",value:function(){return(0,r.iv)(c())}}]}}),r.oi)}}]);
//# sourceMappingURL=chunk.fc396868934db18b6bc5.js.map