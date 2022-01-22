/*!
  * Bootstrap button.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("./dom/event-handler.js"),require("./base-component.js")):"function"==typeof define&&define.amd?define(["./dom/event-handler","./base-component"],t):(e="undefined"!=typeof globalThis?globalThis:e||self).Button=t(e.EventHandler,e.Base)}(this,(function(e,t){"use strict";const n=e=>e&&"object"==typeof e&&"default"in e?e:{default:e},o=n(e),a=n(t),s=[];class r extends a.default{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(e){return this.each((function(){const t=r.getOrCreateInstance(this);"toggle"===e&&t[e]()}))}}var u,d;return o.default.on(document,"click.bs.button.data-api",'[data-bs-toggle="button"]',e=>{e.preventDefault();const t=e.target.closest('[data-bs-toggle="button"]');r.getOrCreateInstance(t).toggle()}),u=r,d=()=>{const e=(()=>{const{jQuery:e}=window;return e&&!document.body.hasAttribute("data-bs-no-jquery")?e:null})();if(e){const t=u.NAME,n=e.fn[t];e.fn[t]=u.jQueryInterface,e.fn[t].Constructor=u,e.fn[t].noConflict=()=>(e.fn[t]=n,u.jQueryInterface)}},"loading"===document.readyState?(s.length||document.addEventListener("DOMContentLoaded",()=>{s.forEach(e=>e())}),s.push(d)):d(),r}));