import EventHandler from"../dom/event-handler";import{getElementFromSelector,isDisabled}from"./index";const enableDismissTrigger=(e,t="hide")=>{const s="click.dismiss"+e.EVENT_KEY,i=e.NAME;EventHandler.on(document,s,`[data-bs-dismiss="${i}"]`,(function(s){if(["A","AREA"].includes(this.tagName)&&s.preventDefault(),isDisabled(this))return;const n=getElementFromSelector(this)||this.closest("."+i);e.getOrCreateInstance(n)[t]()}))};export{enableDismissTrigger};