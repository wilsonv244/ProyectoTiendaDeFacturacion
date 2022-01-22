/*!
  * Bootstrap offcanvas.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("./dom/selector-engine.js"),require("./dom/manipulator.js"),require("./dom/event-handler.js"),require("./base-component.js")):"function"==typeof define&&define.amd?define(["./dom/selector-engine","./dom/manipulator","./dom/event-handler","./base-component"],e):(t="undefined"!=typeof globalThis?globalThis:t||self).Offcanvas=e(t.SelectorEngine,t.Manipulator,t.EventHandler,t.Base)}(this,(function(t,e,i,s){"use strict";const n=t=>t&&"object"==typeof t&&"default"in t?t:{default:t},o=n(t),a=n(e),r=n(i),l=n(s),d=t=>{const e=(t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let i=t.getAttribute("href");if(!i||!i.includes("#")&&!i.startsWith("."))return null;i.includes("#")&&!i.startsWith("#")&&(i="#"+i.split("#")[1]),e=i&&"#"!==i?i.trim():null}return e})(t);return e?document.querySelector(e):null},c=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),h=(t,e,i)=>{Object.keys(i).forEach(s=>{const n=i[s],o=e[s],a=o&&c(o)?"element":null==(r=o)?""+r:{}.toString.call(r).match(/\s([a-z]+)/i)[1].toLowerCase();var r;if(!new RegExp(n).test(a))throw new TypeError(`${t.toUpperCase()}: Option "${s}" provided type "${a}" but expected type "${n}".`)})},u=t=>!t||t.nodeType!==Node.ELEMENT_NODE||(!!t.classList.contains("disabled")||(void 0!==t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled"))),f=[],m=t=>{"function"==typeof t&&t()},_=(t,e,i=!0)=>{if(!i)return void m(t);const s=(t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:i}=window.getComputedStyle(t);const s=Number.parseFloat(e),n=Number.parseFloat(i);return s||n?(e=e.split(",")[0],i=i.split(",")[0],1e3*(Number.parseFloat(e)+Number.parseFloat(i))):0})(e)+5;let n=!1;const o=({target:i})=>{i===e&&(n=!0,e.removeEventListener("transitionend",o),m(t))};e.addEventListener("transitionend",o),setTimeout(()=>{n||e.dispatchEvent(new Event("transitionend"))},s)};class p{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,"paddingRight",e=>e+t),this._setElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top","paddingRight",e=>e+t),this._setElementAttributes(".sticky-top","marginRight",e=>e-t)}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,i){const s=this.getWidth();this._applyManipulationCallback(t,t=>{if(t!==this._element&&window.innerWidth>t.clientWidth+s)return;this._saveInitialAttribute(t,e);const n=window.getComputedStyle(t)[e];t.style[e]=i(Number.parseFloat(n))+"px"})}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,"paddingRight"),this._resetElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top","paddingRight"),this._resetElementAttributes(".sticky-top","marginRight")}_saveInitialAttribute(t,e){const i=t.style[e];i&&a.default.setDataAttribute(t,e,i)}_resetElementAttributes(t,e){this._applyManipulationCallback(t,t=>{const i=a.default.getDataAttribute(t,e);void 0===i?t.style.removeProperty(e):(a.default.removeDataAttribute(t,e),t.style[e]=i)})}_applyManipulationCallback(t,e){c(t)?e(t):o.default.find(t,this._element).forEach(e)}isOverflowing(){return this.getWidth()>0}}const b={className:"modal-backdrop",isVisible:!0,isAnimated:!1,rootElement:"body",clickCallback:null},g={className:"string",isVisible:"boolean",isAnimated:"boolean",rootElement:"(element|string)",clickCallback:"(function|null)"};class v{constructor(t){this._config=this._getConfig(t),this._isAppended=!1,this._element=null}show(t){this._config.isVisible?(this._append(),this._config.isAnimated&&this._getElement().offsetHeight,this._getElement().classList.add("show"),this._emulateAnimation(()=>{m(t)})):m(t)}hide(t){this._config.isVisible?(this._getElement().classList.remove("show"),this._emulateAnimation(()=>{this.dispose(),m(t)})):m(t)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add("fade"),this._element=t}return this._element}_getConfig(t){var e;return(t={...b,..."object"==typeof t?t:{}}).rootElement=(e=t.rootElement,c(e)?e.jquery?e[0]:e:"string"==typeof e&&e.length>0?document.querySelector(e):null),h("backdrop",t,g),t}_append(){this._isAppended||(this._config.rootElement.append(this._getElement()),r.default.on(this._getElement(),"mousedown.bs.backdrop",()=>{m(this._config.clickCallback)}),this._isAppended=!0)}dispose(){this._isAppended&&(r.default.off(this._element,"mousedown.bs.backdrop"),this._element.remove(),this._isAppended=!1)}_emulateAnimation(t){_(t,this._getElement(),this._config.isAnimated)}}const y={trapElement:null,autofocus:!0},E={trapElement:"element",autofocus:"boolean"};class w{constructor(t){this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}activate(){const{trapElement:t,autofocus:e}=this._config;this._isActive||(e&&t.focus(),r.default.off(document,".bs.focustrap"),r.default.on(document,"focusin.bs.focustrap",t=>this._handleFocusin(t)),r.default.on(document,"keydown.tab.bs.focustrap",t=>this._handleKeydown(t)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,r.default.off(document,".bs.focustrap"))}_handleFocusin(t){const{target:e}=t,{trapElement:i}=this._config;if(e===document||e===i||i.contains(e))return;const s=o.default.focusableChildren(i);0===s.length?i.focus():"backward"===this._lastTabNavDirection?s[s.length-1].focus():s[0].focus()}_handleKeydown(t){"Tab"===t.key&&(this._lastTabNavDirection=t.shiftKey?"backward":"forward")}_getConfig(t){return t={...y,..."object"==typeof t?t:{}},h("focustrap",t,E),t}}const A=".bs.offcanvas",k=`load${A}.data-api`,C={backdrop:!0,keyboard:!0,scroll:!1},N={backdrop:"boolean",keyboard:"boolean",scroll:"boolean"},j=`click${A}.data-api`;class T extends l.default{constructor(t,e){super(t),this._config=this._getConfig(e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get NAME(){return"offcanvas"}static get Default(){return C}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown)return;if(r.default.trigger(this._element,"show.bs.offcanvas",{relatedTarget:t}).defaultPrevented)return;this._isShown=!0,this._element.style.visibility="visible",this._backdrop.show(),this._config.scroll||(new p).hide(),this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add("show");this._queueCallback(()=>{this._config.scroll||this._focustrap.activate(),r.default.trigger(this._element,"shown.bs.offcanvas",{relatedTarget:t})},this._element,!0)}hide(){if(!this._isShown)return;if(r.default.trigger(this._element,"hide.bs.offcanvas").defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.remove("show"),this._backdrop.hide();this._queueCallback(()=>{this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._element.style.visibility="hidden",this._config.scroll||(new p).reset(),r.default.trigger(this._element,"hidden.bs.offcanvas")},this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_getConfig(t){return t={...C,...a.default.getDataAttributes(this._element),..."object"==typeof t?t:{}},h("offcanvas",t,N),t}_initializeBackDrop(){return new v({className:"offcanvas-backdrop",isVisible:this._config.backdrop,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:()=>this.hide()})}_initializeFocusTrap(){return new w({trapElement:this._element})}_addEventListeners(){r.default.on(this._element,"keydown.dismiss.bs.offcanvas",t=>{this._config.keyboard&&"Escape"===t.key&&this.hide()})}static jQueryInterface(t){return this.each((function(){const e=T.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}var D,L;return r.default.on(document,j,'[data-bs-toggle="offcanvas"]',(function(t){const e=d(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),u(this))return;r.default.one(e,"hidden.bs.offcanvas",()=>{var t;c(t=this)&&0!==t.getClientRects().length&&"visible"===getComputedStyle(t).getPropertyValue("visibility")&&this.focus()});const i=o.default.findOne(".offcanvas.show");i&&i!==e&&T.getInstance(i).hide();T.getOrCreateInstance(e).toggle(this)})),r.default.on(window,k,()=>o.default.find(".offcanvas.show").forEach(t=>T.getOrCreateInstance(t).show())),((t,e="hide")=>{const i="click.dismiss"+t.EVENT_KEY,s=t.NAME;r.default.on(document,i,`[data-bs-dismiss="${s}"]`,(function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),u(this))return;const n=d(this)||this.closest("."+s);t.getOrCreateInstance(n)[e]()}))})(T),D=T,L=()=>{const t=(()=>{const{jQuery:t}=window;return t&&!document.body.hasAttribute("data-bs-no-jquery")?t:null})();if(t){const e=D.NAME,i=t.fn[e];t.fn[e]=D.jQueryInterface,t.fn[e].Constructor=D,t.fn[e].noConflict=()=>(t.fn[e]=i,D.jQueryInterface)}},"loading"===document.readyState?(f.length||document.addEventListener("DOMContentLoaded",()=>{f.forEach(t=>t())}),f.push(L)):L(),T}));