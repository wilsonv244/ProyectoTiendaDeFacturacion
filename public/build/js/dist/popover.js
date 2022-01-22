/*!
  * Bootstrap popover.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("./tooltip.js")):"function"==typeof define&&define.amd?define(["./tooltip"],t):(e="undefined"!=typeof globalThis?globalThis:e||self).Popover=t(e.Tooltip)}(this,(function(e){"use strict";const t=(e=>e&&"object"==typeof e&&"default"in e?e:{default:e})(e),n=[],o=".bs.popover",i={...t.default.Default,placement:"right",offset:[0,8],trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'},r={...t.default.DefaultType,content:"(string|element|function)"},s={HIDE:"hide"+o,HIDDEN:"hidden"+o,SHOW:"show"+o,SHOWN:"shown"+o,INSERTED:"inserted"+o,CLICK:"click"+o,FOCUSIN:"focusin"+o,FOCUSOUT:"focusout"+o,MOUSEENTER:"mouseenter"+o,MOUSELEAVE:"mouseleave"+o};class a extends t.default{static get Default(){return i}static get NAME(){return"popover"}static get Event(){return s}static get DefaultType(){return r}isWithContent(){return this.getTitle()||this._getContent()}setContent(e){this._sanitizeAndSetContent(e,this.getTitle(),".popover-header"),this._sanitizeAndSetContent(e,this._getContent(),".popover-body")}_getContent(){return this._resolvePossibleFunction(this._config.content)}_getBasicClassPrefix(){return"bs-popover"}static jQueryInterface(e){return this.each((function(){const t=a.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}var u,c;return u=a,c=()=>{const e=(()=>{const{jQuery:e}=window;return e&&!document.body.hasAttribute("data-bs-no-jquery")?e:null})();if(e){const t=u.NAME,n=e.fn[t];e.fn[t]=u.jQueryInterface,e.fn[t].Constructor=u,e.fn[t].noConflict=()=>(e.fn[t]=n,u.jQueryInterface)}},"loading"===document.readyState?(n.length||document.addEventListener("DOMContentLoaded",()=>{n.forEach(e=>e())}),n.push(c)):c(),a}));