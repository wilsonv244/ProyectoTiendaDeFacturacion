const MAX_UID=1e6,MILLISECONDS_MULTIPLIER=1e3,TRANSITION_END="transitionend",toType=e=>null==e?""+e:{}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),getUID=e=>{do{e+=Math.floor(1e6*Math.random())}while(document.getElementById(e));return e},getSelector=e=>{let t=e.getAttribute("data-bs-target");if(!t||"#"===t){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n="#"+n.split("#")[1]),t=n&&"#"!==n?n.trim():null}return t},getSelectorFromElement=e=>{const t=getSelector(e);return t&&document.querySelector(t)?t:null},getElementFromSelector=e=>{const t=getSelector(e);return t?document.querySelector(t):null},getTransitionDurationFromElement=e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const o=Number.parseFloat(t),r=Number.parseFloat(n);return o||r?(t=t.split(",")[0],n=n.split(",")[0],1e3*(Number.parseFloat(t)+Number.parseFloat(n))):0},triggerTransitionEnd=e=>{e.dispatchEvent(new Event(TRANSITION_END))},isElement=e=>!(!e||"object"!=typeof e)&&(void 0!==e.jquery&&(e=e[0]),void 0!==e.nodeType),getElement=e=>isElement(e)?e.jquery?e[0]:e:"string"==typeof e&&e.length>0?document.querySelector(e):null,typeCheckConfig=(e,t,n)=>{Object.keys(n).forEach(o=>{const r=n[o],i=t[o],l=i&&isElement(i)?"element":null==(a=i)?""+a:{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase();var a;if(!new RegExp(r).test(l))throw new TypeError(`${e.toUpperCase()}: Option "${o}" provided type "${l}" but expected type "${r}".`)})},isVisible=e=>!(!isElement(e)||0===e.getClientRects().length)&&"visible"===getComputedStyle(e).getPropertyValue("visibility"),isDisabled=e=>!e||e.nodeType!==Node.ELEMENT_NODE||(!!e.classList.contains("disabled")||(void 0!==e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled"))),findShadowRoot=e=>{if(!document.documentElement.attachShadow)return null;if("function"==typeof e.getRootNode){const t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?findShadowRoot(e.parentNode):null},noop=()=>{},reflow=e=>{e.offsetHeight},getjQuery=()=>{const{jQuery:e}=window;return e&&!document.body.hasAttribute("data-bs-no-jquery")?e:null},DOMContentLoadedCallbacks=[],onDOMContentLoaded=e=>{"loading"===document.readyState?(DOMContentLoadedCallbacks.length||document.addEventListener("DOMContentLoaded",()=>{DOMContentLoadedCallbacks.forEach(e=>e())}),DOMContentLoadedCallbacks.push(e)):e()},isRTL=()=>"rtl"===document.documentElement.dir,defineJQueryPlugin=e=>{onDOMContentLoaded(()=>{const t=getjQuery();if(t){const n=e.NAME,o=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=o,e.jQueryInterface)}})},execute=e=>{"function"==typeof e&&e()},executeAfterTransition=(e,t,n=!0)=>{if(!n)return void execute(e);const o=getTransitionDurationFromElement(t)+5;let r=!1;const i=({target:n})=>{n===t&&(r=!0,t.removeEventListener(TRANSITION_END,i),execute(e))};t.addEventListener(TRANSITION_END,i),setTimeout(()=>{r||triggerTransitionEnd(t)},o)},getNextActiveElement=(e,t,n,o)=>{let r=e.indexOf(t);if(-1===r)return e[!n&&o?e.length-1:0];const i=e.length;return r+=n?1:-1,o&&(r=(r+i)%i),e[Math.max(0,Math.min(r,i-1))]};export{getElement,getUID,getSelectorFromElement,getElementFromSelector,getTransitionDurationFromElement,triggerTransitionEnd,isElement,typeCheckConfig,isVisible,isDisabled,findShadowRoot,noop,getNextActiveElement,reflow,getjQuery,onDOMContentLoaded,isRTL,defineJQueryPlugin,execute,executeAfterTransition};