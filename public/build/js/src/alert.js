import{defineJQueryPlugin}from"./util/index";import EventHandler from"./dom/event-handler";import BaseComponent from"./base-component";import{enableDismissTrigger}from"./util/component-functions";const NAME="alert",DATA_KEY="bs.alert",EVENT_KEY=".bs.alert",EVENT_CLOSE="close.bs.alert",EVENT_CLOSED="closed.bs.alert",CLASS_NAME_FADE="fade",CLASS_NAME_SHOW="show";class Alert extends BaseComponent{static get NAME(){return NAME}close(){if(EventHandler.trigger(this._element,EVENT_CLOSE).defaultPrevented)return;this._element.classList.remove("show");const e=this._element.classList.contains("fade");this._queueCallback(()=>this._destroyElement(),this._element,e)}_destroyElement(){this._element.remove(),EventHandler.trigger(this._element,EVENT_CLOSED),this.dispose()}static jQueryInterface(e){return this.each((function(){const t=Alert.getOrCreateInstance(this);if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}enableDismissTrigger(Alert,"close"),defineJQueryPlugin(Alert);export default Alert;