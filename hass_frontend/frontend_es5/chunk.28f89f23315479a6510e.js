(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[6955],{26955:function(e,t,r){"use strict";r.r(t),r.d(t,{EntityRegistrySettingsHelper:function(){return he}});var i=r(15652),n=r(7323),o=r(55642),s=r(47181),a=r(56005),c=r(74186),l=r(43180),d=r(11512),u=r(3300),f=r(74725),h=r(10575),p=r(73734),y=r(26765),m=r(11654),v=(r(13345),r(45122),r(65580),r(88108),r(38707),r(39509),r(48003),r(30879),r(58831)),b=(r(68101),r(43709),r(57292)),g=r(73826);function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(){var e=x(["\n      ha-switch {\n        margin-right: 16px;\n      }\n      .row {\n        margin-top: 8px;\n        color: var(--primary-text-color);\n        display: flex;\n        align-items: center;\n      }\n      .secondary {\n        color: var(--secondary-text-color);\n      }\n    "]);return _=function(){return e},e}function w(){var e=x(["\n      <paper-input\n        .value=","\n        @value-changed=","\n        .label=",'\n        error-message="Domain needs to stay the same"\n        .invalid=',"\n        .disabled=","\n      ></paper-input>\n      <ha-area-picker\n        .hass=","\n        .value=","\n        .placeholder=","\n        @value-changed=",'\n      ></ha-area-picker>\n      <div class="row">\n        <ha-switch\n          .checked=',"\n          @change=","\n        >\n        </ha-switch>\n        <div>\n          <div>\n            ",'\n          </div>\n          <div class="secondary">\n            ',"\n            ","\n            <br />","\n          </div>\n        </div>\n      </div>\n    "]);return w=function(){return e},e}function E(){var e=x([""]);return E=function(){return e},e}function x(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function P(e,t,r,i,n,o,s){try{var a=e[o](s),c=a.value}catch(l){return void r(l)}a.done?t(c):Promise.resolve(c).then(i,n)}function O(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function z(e,t){return(z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,i=U(e);if(t){var n=U(this).constructor;r=Reflect.construct(i,arguments,n)}else r=i.apply(this,arguments);return D(this,r)}}function D(e,t){return!t||"object"!==k(t)&&"function"!=typeof t?j(e):t}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(){C=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!T(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,n[o])(a)||a);e=c.element,this.addElementPlacement(e,t),c.finisher&&i.push(c.finisher);var l=c.extras;if(l){for(var d=0;d<l.length;d++)this.addElementPlacement(l[d],t);r.push.apply(r,l)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||L(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=B(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:F(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=F(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function A(e){var t,r=B(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function I(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function T(e){return e.decorators&&e.decorators.length}function R(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function F(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function B(e){var t=function(e,t){if("object"!==k(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!==k(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===k(t)?t:String(t)}function L(e,t){if(e){if("string"==typeof e)return M(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?M(e,t):void 0}}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function N(e,t,r){return(N="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=U(e)););return e}(e,t);if(i){var n=Object.getOwnPropertyDescriptor(i,t);return n.get?n.get.call(r):n.value}})(e,t,r||e)}function U(e){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}!function(e,t,r,i){var n=C();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var s=t((function(e){n.initializeInstanceElements(e,a.elements)}),r),a=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(R(o.descriptor)||R(n.descriptor)){if(T(o)||T(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(T(o)){if(T(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}I(o,n)}else t.push(o)}return t}(s.d.map(A)),e);n.initializeClassElements(s.F,a.elements),n.runClassFinishers(s.F,a.finishers)}([(0,i.Mo)("ha-registry-basic-editor")],(function(e,t){var r,n,o=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&z(e,t)}(i,t);var r=S(i);function i(){var t;O(this,i);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return t=r.call.apply(r,[this].concat(o)),e(j(t)),t}return i}(t);return{F:o,d:[{kind:"field",decorators:[(0,i.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,i.Cb)()],key:"entry",value:void 0},{kind:"field",decorators:[(0,i.sz)()],key:"_origEntityId",value:void 0},{kind:"field",decorators:[(0,i.sz)()],key:"_entityId",value:void 0},{kind:"field",decorators:[(0,i.sz)()],key:"_areaId",value:void 0},{kind:"field",decorators:[(0,i.sz)()],key:"_disabledBy",value:void 0},{kind:"field",key:"_deviceLookup",value:void 0},{kind:"field",decorators:[(0,i.sz)()],key:"_device",value:void 0},{kind:"field",decorators:[(0,i.sz)()],key:"_submitting",value:void 0},{kind:"method",key:"updateEntry",value:(r=regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._submitting=!0,t={new_entity_id:this._entityId.trim(),area_id:this._areaId||null},this.entry.disabled_by===this._disabledBy||null!==this._disabledBy&&"user"!==this._disabledBy||(t.disabled_by=this._disabledBy),e.prev=3,e.next=6,(0,c.Nv)(this.hass,this._origEntityId,t);case 6:(r=e.sent).require_restart&&(0,y.Ys)(this,{text:this.hass.localize("ui.dialogs.entity_registry.editor.enabled_restart_confirm")}),r.reload_delay&&(0,y.Ys)(this,{text:this.hass.localize("ui.dialogs.entity_registry.editor.enabled_delay_confirm","delay",r.reload_delay)});case 9:return e.prev=9,this._submitting=!1,e.finish(9);case 12:case"end":return e.stop()}}),e,this,[[3,,9,12]])})),n=function(){var e=this,t=arguments;return new Promise((function(i,n){var o=r.apply(e,t);function s(e){P(o,i,n,s,a,"next",e)}function a(e){P(o,i,n,s,a,"throw",e)}s(void 0)}))},function(){return n.apply(this,arguments)})},{kind:"method",key:"hassSubscribe",value:function(){var e=this;return[(0,b.q4)(this.hass.connection,(function(t){e._deviceLookup={};var r,i=function(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=L(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,a=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return s=e.done,e},e:function(e){a=!0,o=e},f:function(){try{s||null==r.return||r.return()}finally{if(a)throw o}}}}(t);try{for(i.s();!(r=i.n()).done;){var n=r.value;e._deviceLookup[n.id]=n}}catch(o){i.e(o)}finally{i.f()}!e._device&&e.entry.device_id&&(e._device=e._deviceLookup[e.entry.device_id])}))]}},{kind:"method",key:"updated",value:function(e){N(U(o.prototype),"updated",this).call(this,e),e.has("entry")&&this.entry&&(this._origEntityId=this.entry.entity_id,this._entityId=this.entry.entity_id,this._disabledBy=this.entry.disabled_by,this._areaId=this.entry.area_id,this._device=this.entry.device_id&&this._deviceLookup?this._deviceLookup[this.entry.device_id]:void 0)}},{kind:"method",key:"render",value:function(){var e;if(!this.hass||!this.entry||this.entry.entity_id!==this._origEntityId)return(0,i.dy)(E());var t=(0,v.M)(this._entityId.trim())!==(0,v.M)(this.entry.entity_id);return(0,i.dy)(w(),this._entityId,this._entityIdChanged,this.hass.localize("ui.dialogs.entity_registry.editor.entity_id"),t,this._submitting,this.hass,this._areaId,null===(e=this._device)||void 0===e?void 0:e.area_id,this._areaPicked,!this._disabledBy,this._disabledByChanged,this.hass.localize("ui.dialogs.entity_registry.editor.enabled_label"),this._disabledBy&&"user"!==this._disabledBy?this.hass.localize("ui.dialogs.entity_registry.editor.enabled_cause","cause",this.hass.localize("config_entry.disabled_by.".concat(this._disabledBy))):"",this.hass.localize("ui.dialogs.entity_registry.editor.enabled_description"),this.hass.localize("ui.dialogs.entity_registry.editor.note"))}},{kind:"method",key:"_areaPicked",value:function(e){this._areaId=e.detail.value}},{kind:"method",key:"_entityIdChanged",value:function(e){this._entityId=e.detail.value}},{kind:"method",key:"_disabledByChanged",value:function(e){this._disabledBy=e.target.checked?null:"user"}},{kind:"get",static:!0,key:"styles",value:function(){return(0,i.iv)(_())}}]}}),(0,g.f)(i.oi));function H(e){return(H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Y(){var e=X(["\n        :host {\n          display: block;\n          padding: 0 !important;\n        }\n        .form {\n          padding: 20px 24px;\n          margin-bottom: 53px;\n        }\n        .buttons {\n          position: absolute;\n          bottom: 0;\n          width: 100%;\n          box-sizing: border-box;\n          border-top: 1px solid\n            var(--mdc-dialog-scroll-divider-color, rgba(0, 0, 0, 0.12));\n          display: flex;\n          justify-content: space-between;\n          padding: 8px;\n          background-color: var(--mdc-theme-surface, #fff);\n        }\n        .error {\n          color: var(--error-color);\n          margin-bottom: 8px;\n        }\n        .row {\n          margin-top: 8px;\n          color: var(--primary-text-color);\n        }\n        .secondary {\n          color: var(--secondary-text-color);\n        }\n      "]);return Y=function(){return e},e}function q(e,t,r,i,n,o,s){try{var a=e[o](s),c=a.value}catch(l){return void r(l)}a.done?t(c):Promise.resolve(c).then(i,n)}function K(e){return function(){var t=this,r=arguments;return new Promise((function(i,n){var o=e.apply(t,r);function s(e){q(o,i,n,s,a,"next",e)}function a(e){q(o,i,n,s,a,"throw",e)}s(void 0)}))}}function W(){var e=X(["\n              <span @value-changed=",">\n                ","\n              </span>\n            "]);return W=function(){return e},e}function $(){var e=X([' <div class="error">',"</div> "]);return $=function(){return e},e}function G(){var e=X(['\n      <div class="form">\n        ',"\n        ","\n        <ha-registry-basic-editor\n          .hass=","\n          .entry=",'\n        ></ha-registry-basic-editor>\n      </div>\n      <div class="buttons">\n        <mwc-button\n          class="warning"\n          @click=',"\n          .disabled=","\n        >\n          ","\n        </mwc-button>\n        <mwc-button\n          @click=","\n          .disabled=","\n        >\n          ","\n        </mwc-button>\n      </div>\n    "]);return G=function(){return e},e}function Q(){var e=X([""]);return Q=function(){return e},e}function X(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function Z(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function J(e,t){return(J=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function V(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,i=ue(e);if(t){var n=ue(this).constructor;r=Reflect.construct(i,arguments,n)}else r=i.apply(this,arguments);return ee(this,r)}}function ee(e,t){return!t||"object"!==H(t)&&"function"!=typeof t?te(e):t}function te(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function re(){re=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!oe(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,n[o])(a)||a);e=c.element,this.addElementPlacement(e,t),c.finisher&&i.push(c.finisher);var l=c.extras;if(l){for(var d=0;d<l.length;d++)this.addElementPlacement(l[d],t);r.push.apply(r,l)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return le(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?le(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=ce(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:ae(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=ae(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function ie(e){var t,r=ce(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function ne(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function oe(e){return e.decorators&&e.decorators.length}function se(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function ae(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function ce(e){var t=function(e,t){if("object"!==H(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!==H(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===H(t)?t:String(t)}function le(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function de(e,t,r){return(de="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=ue(e)););return e}(e,t);if(i){var n=Object.getOwnPropertyDescriptor(i,t);return n.get?n.get.call(r):n.value}})(e,t,r||e)}function ue(e){return(ue=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var fe={input_boolean:{fetch:l.Aj,update:l.Xr,delete:l.wO},input_text:{fetch:h.YL,update:h.jt,delete:h.KB},input_number:{fetch:u.K4,update:u.hb,delete:u.fH},input_datetime:{fetch:d.s2,update:d.FF,delete:d.Gi},input_select:{fetch:f.LN,update:f.ON,delete:f.H3},counter:{fetch:a.W2,update:a.Rm,delete:a.YL},timer:{fetch:p.aT,update:p.mZ,delete:p.WH}},he=function(e,t,r,i){var n=re();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var s=t((function(e){n.initializeInstanceElements(e,a.elements)}),r),a=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(se(o.descriptor)||se(n.descriptor)){if(oe(o)||oe(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(oe(o)){if(oe(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}ne(o,n)}else t.push(o)}return t}(s.d.map(ie)),e);return n.initializeClassElements(s.F,a.elements),n.runClassFinishers(s.F,a.finishers)}([(0,i.Mo)("entity-settings-helper-tab")],(function(e,t){var r,a,l,d=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&J(e,t)}(i,t);var r=V(i);function i(){var t;Z(this,i);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return t=r.call.apply(r,[this].concat(o)),e(te(t)),t}return i}(t);return{F:d,d:[{kind:"field",decorators:[(0,i.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,i.Cb)()],key:"entry",value:void 0},{kind:"field",decorators:[(0,i.sz)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,i.sz)()],key:"_item",value:void 0},{kind:"field",decorators:[(0,i.sz)()],key:"_submitting",value:void 0},{kind:"field",decorators:[(0,i.sz)()],key:"_componentLoaded",value:void 0},{kind:"field",decorators:[(0,i.IO)("ha-registry-basic-editor")],key:"_registryEditor",value:void 0},{kind:"method",key:"firstUpdated",value:function(e){de(ue(d.prototype),"firstUpdated",this).call(this,e),this._componentLoaded=(0,n.p)(this.hass,this.entry.platform)}},{kind:"method",key:"updated",value:function(e){de(ue(d.prototype),"updated",this).call(this,e),e.has("entry")&&(this._error=void 0,this._item=void 0,this._getItem())}},{kind:"method",key:"render",value:function(){if(void 0===this._item)return(0,i.dy)(Q());var e=this.hass.states[this.entry.entity_id];return(0,i.dy)(G(),this._error?(0,i.dy)($(),this._error):"",this._componentLoaded?null===this._item?this.hass.localize("ui.dialogs.helper_settings.yaml_not_editable"):(0,i.dy)(W(),this._valueChanged,(0,o.h)("ha-".concat(this.entry.platform,"-form"),{hass:this.hass,item:this._item,entry:this.entry})):this.hass.localize("ui.dialogs.helper_settings.platform_not_loaded","platform",this.entry.platform),this.hass,this.entry,this._confirmDeleteItem,this._submitting||!this._item&&!(null==e?void 0:e.attributes.restored),this.hass.localize("ui.dialogs.entity_registry.editor.delete"),this._updateItem,this._submitting||this._item&&!this._item.name,this.hass.localize("ui.dialogs.entity_registry.editor.update"))}},{kind:"method",key:"_valueChanged",value:function(e){this._error=void 0,this._item=e.detail.value}},{kind:"method",key:"_getItem",value:(l=K(regeneratorRuntime.mark((function e(){var t,r=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fe[this.entry.platform].fetch(this.hass);case 2:t=e.sent,this._item=t.find((function(e){return e.id===r.entry.unique_id}))||null;case 4:case"end":return e.stop()}}),e,this)}))),function(){return l.apply(this,arguments)})},{kind:"method",key:"_updateItem",value:(a=K(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._submitting=!0,e.prev=1,!this._componentLoaded||!this._item){e.next=5;break}return e.next=5,fe[this.entry.platform].update(this.hass,this._item.id,this._item);case 5:return e.next=7,null===(t=this._registryEditor)||void 0===t?void 0:t.updateEntry();case 7:(0,s.B)(this,"close-dialog"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),this._error=e.t0.message||"Unknown error";case 13:return e.prev=13,this._submitting=!1,e.finish(13);case 16:case"end":return e.stop()}}),e,this,[[1,10,13,16]])}))),function(){return a.apply(this,arguments)})},{kind:"method",key:"_confirmDeleteItem",value:(r=K(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,y.g7)(this,{text:this.hass.localize("ui.dialogs.entity_registry.editor.confirm_delete")});case 2:if(e.sent){e.next=4;break}return e.abrupt("return");case 4:if(this._submitting=!0,e.prev=5,!this._componentLoaded||!this._item){e.next=11;break}return e.next=9,fe[this.entry.platform].delete(this.hass,this._item.id);case 9:e.next=16;break;case 11:if(null==(t=this.hass.states[this.entry.entity_id])?void 0:t.attributes.restored){e.next=14;break}return e.abrupt("return");case 14:return e.next=16,(0,c.z3)(this.hass,this.entry.entity_id);case 16:(0,s.B)(this,"close-dialog");case 17:return e.prev=17,this._submitting=!1,e.finish(17);case 20:case"end":return e.stop()}}),e,this,[[5,,17,20]])}))),function(){return r.apply(this,arguments)})},{kind:"get",static:!0,key:"styles",value:function(){return[m.Qx,(0,i.iv)(Y())]}}]}}),i.oi)}}]);
//# sourceMappingURL=chunk.28f89f23315479a6510e.js.map