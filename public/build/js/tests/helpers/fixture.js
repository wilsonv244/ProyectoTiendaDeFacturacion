const fixtureId="fixture";export const getFixture=()=>{let e=document.getElementById("fixture");return e||(e=document.createElement("div"),e.setAttribute("id","fixture"),e.style.position="absolute",e.style.top="-10000px",e.style.left="-10000px",e.style.width="10000px",e.style.height="10000px",document.body.append(e)),e};export const clearFixture=()=>{getFixture().innerHTML=""};export const createEvent=(e,t={})=>{const n=document.createEvent("Event");return n.initEvent(e,Boolean(t.bubbles),Boolean(t.cancelable)),n};export const jQueryMock={elements:void 0,fn:{},each(e){this.elements.forEach(t=>{e.call(t)})}};export const clearBodyAndDocument=()=>{["data-bs-padding-right","style"].forEach(e=>{document.documentElement.removeAttribute(e),document.body.removeAttribute(e)})};