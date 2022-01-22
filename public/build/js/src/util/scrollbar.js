import SelectorEngine from"../dom/selector-engine";import Manipulator from"../dom/manipulator";import{isElement}from"./index";const SELECTOR_FIXED_CONTENT=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",SELECTOR_STICKY_CONTENT=".sticky-top";class ScrollBarHelper{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,"paddingRight",e=>e+t),this._setElementAttributes(SELECTOR_FIXED_CONTENT,"paddingRight",e=>e+t),this._setElementAttributes(".sticky-top","marginRight",e=>e-t)}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,i){const s=this.getWidth();this._applyManipulationCallback(t,t=>{if(t!==this._element&&window.innerWidth>t.clientWidth+s)return;this._saveInitialAttribute(t,e);const n=window.getComputedStyle(t)[e];t.style[e]=i(Number.parseFloat(n))+"px"})}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,"paddingRight"),this._resetElementAttributes(SELECTOR_FIXED_CONTENT,"paddingRight"),this._resetElementAttributes(".sticky-top","marginRight")}_saveInitialAttribute(t,e){const i=t.style[e];i&&Manipulator.setDataAttribute(t,e,i)}_resetElementAttributes(t,e){this._applyManipulationCallback(t,t=>{const i=Manipulator.getDataAttribute(t,e);void 0===i?t.style.removeProperty(e):(Manipulator.removeDataAttribute(t,e),t.style[e]=i)})}_applyManipulationCallback(t,e){isElement(t)?e(t):SelectorEngine.find(t,this._element).forEach(e)}isOverflowing(){return this.getWidth()>0}}export default ScrollBarHelper;