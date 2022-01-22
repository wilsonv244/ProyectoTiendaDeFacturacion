/*!
  * Bootstrap tooltip.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("@popperjs/core"),require("./dom/data.js"),require("./dom/event-handler.js"),require("./dom/manipulator.js"),require("./dom/selector-engine.js"),require("./base-component.js")):"function"==typeof define&&define.amd?define(["@popperjs/core","./dom/data","./dom/event-handler","./dom/manipulator","./dom/selector-engine","./base-component"],e):(t="undefined"!=typeof globalThis?globalThis:t||self).Tooltip=e(t.Popper,t.Data,t.EventHandler,t.Manipulator,t.SelectorEngine,t.Base)}(this,(function(t,e,i,n,o,s){"use strict";const r=t=>t&&"object"==typeof t&&"default"in t?t:{default:t};function a(t){if(t&&t.__esModule)return t;const e=Object.create(null);if(t)for(const i in t)if("default"!==i){const n=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(e,i,n.get?n:{enumerable:!0,get:()=>t[i]})}return e.default=t,Object.freeze(e)}const l=a(t),c=r(e),h=r(i),u=r(n),p=r(o),d=r(s),f=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),g=t=>f(t)?t.jquery?t[0]:t:"string"==typeof t&&t.length>0?document.querySelector(t):null,m=t=>{if(!document.documentElement.attachShadow)return null;if("function"==typeof t.getRootNode){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?m(t.parentNode):null},_=()=>{},b=[],v=()=>"rtl"===document.documentElement.dir,E=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),y=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,T=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,w=(t,e)=>{const i=t.nodeName.toLowerCase();if(e.includes(i))return!E.has(i)||Boolean(y.test(t.nodeValue)||T.test(t.nodeValue));const n=e.filter(t=>t instanceof RegExp);for(let t=0,e=n.length;t<e;t++)if(n[t].test(i))return!0;return!1},C={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};function S(t,e,i){if(!t.length)return t;if(i&&"function"==typeof i)return i(t);const n=(new window.DOMParser).parseFromString(t,"text/html"),o=[].concat(...n.body.querySelectorAll("*"));for(let t=0,i=o.length;t<i;t++){const i=o[t],n=i.nodeName.toLowerCase();if(!Object.keys(e).includes(n)){i.remove();continue}const s=[].concat(...i.attributes),r=[].concat(e["*"]||[],e[n]||[]);s.forEach(t=>{w(t,r)||i.removeAttribute(t.nodeName)})}return n.body.innerHTML}const A=".bs.tooltip",O=new Set(["sanitize","allowList","sanitizeFn"]),L={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(array|string|function)",container:"(string|element|boolean)",fallbackPlacements:"array",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",allowList:"object",popperConfig:"(null|object|function)"},P={AUTO:"auto",TOP:"top",RIGHT:v()?"left":"right",BOTTOM:"bottom",LEFT:v()?"right":"left"},j={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:[0,0],container:!1,fallbackPlacements:["top","right","bottom","left"],boundary:"clippingParents",customClass:"",sanitize:!0,sanitizeFn:null,allowList:C,popperConfig:null},D={HIDE:"hide"+A,HIDDEN:"hidden"+A,SHOW:"show"+A,SHOWN:"shown"+A,INSERTED:"inserted"+A,CLICK:"click"+A,FOCUSIN:"focusin"+A,FOCUSOUT:"focusout"+A,MOUSEENTER:"mouseenter"+A,MOUSELEAVE:"mouseleave"+A};class N extends d.default{constructor(t,e){if(void 0===l)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t),this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this._config=this._getConfig(e),this.tip=null,this._setListeners()}static get Default(){return j}static get NAME(){return"tooltip"}static get Event(){return D}static get DefaultType(){return L}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(t){if(this._isEnabled)if(t){const e=this._initializeOnDelegatedTarget(t);e._activeTrigger.click=!e._activeTrigger.click,e._isWithActiveTrigger()?e._enter(null,e):e._leave(null,e)}else{if(this.getTipElement().classList.contains("show"))return void this._leave(null,this);this._enter(null,this)}}dispose(){clearTimeout(this._timeout),h.default.off(this._element.closest(".modal"),"hide.bs.modal",this._hideModalHandler),this.tip&&this.tip.remove(),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this.isWithContent()||!this._isEnabled)return;const t=h.default.trigger(this._element,this.constructor.Event.SHOW),e=m(this._element),i=null===e?this._element.ownerDocument.documentElement.contains(this._element):e.contains(this._element);if(t.defaultPrevented||!i)return;"tooltip"===this.constructor.NAME&&this.tip&&this.getTitle()!==this.tip.querySelector(".tooltip-inner").innerHTML&&(this._disposePopper(),this.tip.remove(),this.tip=null);const n=this.getTipElement(),o=(t=>{do{t+=Math.floor(1e6*Math.random())}while(document.getElementById(t));return t})(this.constructor.NAME);n.setAttribute("id",o),this._element.setAttribute("aria-describedby",o),this._config.animation&&n.classList.add("fade");const s="function"==typeof this._config.placement?this._config.placement.call(this,n,this._element):this._config.placement,r=this._getAttachment(s);this._addAttachmentClass(r);const{container:a}=this._config;c.default.set(n,this.constructor.DATA_KEY,this),this._element.ownerDocument.documentElement.contains(this.tip)||(a.append(n),h.default.trigger(this._element,this.constructor.Event.INSERTED)),this._popper?this._popper.update():this._popper=l.createPopper(this._element,n,this._getPopperConfig(r)),n.classList.add("show");const u=this._resolvePossibleFunction(this._config.customClass);u&&n.classList.add(...u.split(" ")),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(t=>{h.default.on(t,"mouseover",_)});const p=this.tip.classList.contains("fade");this._queueCallback(()=>{const t=this._hoverState;this._hoverState=null,h.default.trigger(this._element,this.constructor.Event.SHOWN),"out"===t&&this._leave(null,this)},this.tip,p)}hide(){if(!this._popper)return;const t=this.getTipElement();if(h.default.trigger(this._element,this.constructor.Event.HIDE).defaultPrevented)return;t.classList.remove("show"),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(t=>h.default.off(t,"mouseover",_)),this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1;const e=this.tip.classList.contains("fade");this._queueCallback(()=>{this._isWithActiveTrigger()||("show"!==this._hoverState&&t.remove(),this._cleanTipClass(),this._element.removeAttribute("aria-describedby"),h.default.trigger(this._element,this.constructor.Event.HIDDEN),this._disposePopper())},this.tip,e),this._hoverState=""}update(){null!==this._popper&&this._popper.update()}isWithContent(){return Boolean(this.getTitle())}getTipElement(){if(this.tip)return this.tip;const t=document.createElement("div");t.innerHTML=this._config.template;const e=t.children[0];return this.setContent(e),e.classList.remove("fade","show"),this.tip=e,this.tip}setContent(t){this._sanitizeAndSetContent(t,this.getTitle(),".tooltip-inner")}_sanitizeAndSetContent(t,e,i){const n=p.default.findOne(i,t);e||!n?this.setElementContent(n,e):n.remove()}setElementContent(t,e){if(null!==t)return f(e)?(e=g(e),void(this._config.html?e.parentNode!==t&&(t.innerHTML="",t.append(e)):t.textContent=e.textContent)):void(this._config.html?(this._config.sanitize&&(e=S(e,this._config.allowList,this._config.sanitizeFn)),t.innerHTML=e):t.textContent=e)}getTitle(){const t=this._element.getAttribute("data-bs-original-title")||this._config.title;return this._resolvePossibleFunction(t)}updateAttachment(t){return"right"===t?"end":"left"===t?"start":t}_initializeOnDelegatedTarget(t,e){return e||this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map(t=>Number.parseInt(t,10)):"function"==typeof t?e=>t(e,this._element):t}_resolvePossibleFunction(t){return"function"==typeof t?t.call(this._element):t}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"onChange",enabled:!0,phase:"afterWrite",fn:t=>this._handlePopperPlacementChange(t)}],onFirstUpdate:t=>{t.options.placement!==t.placement&&this._handlePopperPlacementChange(t)}};return{...e,..."function"==typeof this._config.popperConfig?this._config.popperConfig(e):this._config.popperConfig}}_addAttachmentClass(t){this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(t)}`)}_getAttachment(t){return P[t.toUpperCase()]}_setListeners(){this._config.trigger.split(" ").forEach(t=>{if("click"===t)h.default.on(this._element,this.constructor.Event.CLICK,this._config.selector,t=>this.toggle(t));else if("manual"!==t){const e="hover"===t?this.constructor.Event.MOUSEENTER:this.constructor.Event.FOCUSIN,i="hover"===t?this.constructor.Event.MOUSELEAVE:this.constructor.Event.FOCUSOUT;h.default.on(this._element,e,this._config.selector,t=>this._enter(t)),h.default.on(this._element,i,this._config.selector,t=>this._leave(t))}}),this._hideModalHandler=()=>{this._element&&this.hide()},h.default.on(this._element.closest(".modal"),"hide.bs.modal",this._hideModalHandler),this._config.selector?this._config={...this._config,trigger:"manual",selector:""}:this._fixTitle()}_fixTitle(){const t=this._element.getAttribute("title"),e=typeof this._element.getAttribute("data-bs-original-title");(t||"string"!==e)&&(this._element.setAttribute("data-bs-original-title",t||""),!t||this._element.getAttribute("aria-label")||this._element.textContent||this._element.setAttribute("aria-label",t),this._element.setAttribute("title",""))}_enter(t,e){e=this._initializeOnDelegatedTarget(t,e),t&&(e._activeTrigger["focusin"===t.type?"focus":"hover"]=!0),e.getTipElement().classList.contains("show")||"show"===e._hoverState?e._hoverState="show":(clearTimeout(e._timeout),e._hoverState="show",e._config.delay&&e._config.delay.show?e._timeout=setTimeout(()=>{"show"===e._hoverState&&e.show()},e._config.delay.show):e.show())}_leave(t,e){e=this._initializeOnDelegatedTarget(t,e),t&&(e._activeTrigger["focusout"===t.type?"focus":"hover"]=e._element.contains(t.relatedTarget)),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState="out",e._config.delay&&e._config.delay.hide?e._timeout=setTimeout(()=>{"out"===e._hoverState&&e.hide()},e._config.delay.hide):e.hide())}_isWithActiveTrigger(){for(const t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1}_getConfig(t){const e=u.default.getDataAttributes(this._element);return Object.keys(e).forEach(t=>{O.has(t)&&delete e[t]}),(t={...this.constructor.Default,...e,..."object"==typeof t&&t?t:{}}).container=!1===t.container?document.body:g(t.container),"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),((t,e,i)=>{Object.keys(i).forEach(n=>{const o=i[n],s=e[n],r=s&&f(s)?"element":null==(a=s)?""+a:{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase();var a;if(!new RegExp(o).test(r))throw new TypeError(`${t.toUpperCase()}: Option "${n}" provided type "${r}" but expected type "${o}".`)})})("tooltip",t,this.constructor.DefaultType),t.sanitize&&(t.template=S(t.template,t.allowList,t.sanitizeFn)),t}_getDelegateConfig(){const t={};for(const e in this._config)this.constructor.Default[e]!==this._config[e]&&(t[e]=this._config[e]);return t}_cleanTipClass(){const t=this.getTipElement(),e=new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`,"g"),i=t.getAttribute("class").match(e);null!==i&&i.length>0&&i.map(t=>t.trim()).forEach(e=>t.classList.remove(e))}_getBasicClassPrefix(){return"bs-tooltip"}_handlePopperPlacementChange(t){const{state:e}=t;e&&(this.tip=e.elements.popper,this._cleanTipClass(),this._addAttachmentClass(this._getAttachment(e.placement)))}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null)}static jQueryInterface(t){return this.each((function(){const e=N.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}var M,z;return M=N,z=()=>{const t=(()=>{const{jQuery:t}=window;return t&&!document.body.hasAttribute("data-bs-no-jquery")?t:null})();if(t){const e=M.NAME,i=t.fn[e];t.fn[e]=M.jQueryInterface,t.fn[e].Constructor=M,t.fn[e].noConflict=()=>(t.fn[e]=i,M.jQueryInterface)}},"loading"===document.readyState?(b.length||document.addEventListener("DOMContentLoaded",()=>{b.forEach(t=>t())}),b.push(z)):z(),N}));