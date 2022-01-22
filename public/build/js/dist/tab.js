/*!
  * Bootstrap tab.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("./dom/event-handler.js"),require("./dom/selector-engine.js"),require("./base-component.js")):"function"==typeof define&&define.amd?define(["./dom/event-handler","./dom/selector-engine","./base-component"],t):(e="undefined"!=typeof globalThis?globalThis:e||self).Tab=t(e.EventHandler,e.SelectorEngine,e.Base)}(this,(function(e,t,n){"use strict";const a=e=>e&&"object"==typeof e&&"default"in e?e:{default:e},s=a(e),i=a(t),o=a(n),d=[];class r extends o.default{static get NAME(){return"tab"}show(){if(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&this._element.classList.contains("active"))return;let e;const t=(e=>{const t=(e=>{let t=e.getAttribute("data-bs-target");if(!t||"#"===t){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n="#"+n.split("#")[1]),t=n&&"#"!==n?n.trim():null}return t})(e);return t?document.querySelector(t):null})(this._element),n=this._element.closest(".nav, .list-group");if(n){const t="UL"===n.nodeName||"OL"===n.nodeName?":scope > li > .active":".active";e=i.default.find(t,n),e=e[e.length-1]}const a=e?s.default.trigger(e,"hide.bs.tab",{relatedTarget:this._element}):null;if(s.default.trigger(this._element,"show.bs.tab",{relatedTarget:e}).defaultPrevented||null!==a&&a.defaultPrevented)return;this._activate(this._element,n);const o=()=>{s.default.trigger(e,"hidden.bs.tab",{relatedTarget:this._element}),s.default.trigger(this._element,"shown.bs.tab",{relatedTarget:e})};t?this._activate(t,t.parentNode,o):o()}_activate(e,t,n){const a=(!t||"UL"!==t.nodeName&&"OL"!==t.nodeName?i.default.children(t,".active"):i.default.find(":scope > li > .active",t))[0],s=n&&a&&a.classList.contains("fade"),o=()=>this._transitionComplete(e,a,n);a&&s?(a.classList.remove("show"),this._queueCallback(o,e,!0)):o()}_transitionComplete(e,t,n){if(t){t.classList.remove("active");const e=i.default.findOne(":scope > .dropdown-menu .active",t.parentNode);e&&e.classList.remove("active"),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!1)}e.classList.add("active"),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),(e=>{e.offsetHeight})(e),e.classList.contains("fade")&&e.classList.add("show");let a=e.parentNode;if(a&&"LI"===a.nodeName&&(a=a.parentNode),a&&a.classList.contains("dropdown-menu")){const t=e.closest(".dropdown");t&&i.default.find(".dropdown-toggle",t).forEach(e=>e.classList.add("active")),e.setAttribute("aria-expanded",!0)}n&&n()}static jQueryInterface(e){return this.each((function(){const t=r.getOrCreateInstance(this);if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}var l,c;return s.default.on(document,"click.bs.tab.data-api",'[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',(function(e){if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),!(t=this)||t.nodeType!==Node.ELEMENT_NODE||t.classList.contains("disabled")||(void 0!==t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled")))return;var t;r.getOrCreateInstance(this).show()})),l=r,c=()=>{const e=(()=>{const{jQuery:e}=window;return e&&!document.body.hasAttribute("data-bs-no-jquery")?e:null})();if(e){const t=l.NAME,n=e.fn[t];e.fn[t]=l.jQueryInterface,e.fn[t].Constructor=l,e.fn[t].noConflict=()=>(e.fn[t]=n,l.jQueryInterface)}},"loading"===document.readyState?(d.length||document.addEventListener("DOMContentLoaded",()=>{d.forEach(e=>e())}),d.push(c)):c(),r}));