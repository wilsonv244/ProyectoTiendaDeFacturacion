import*as Util from"../../../src/util/index";import{clearFixture,getFixture}from"../../helpers/fixture";describe("Util",()=>{let e;beforeAll(()=>{e=getFixture()}),afterEach(()=>{clearFixture()}),describe("getUID",()=>{it("should generate uid",()=>{const e=Util.getUID("bs"),t=Util.getUID("bs");expect(e).not.toEqual(t)})}),describe("getSelectorFromElement",()=>{it("should get selector from data-bs-target",()=>{e.innerHTML=['<div id="test" data-bs-target=".target"></div>','<div class="target"></div>'].join("");const t=e.querySelector("#test");expect(Util.getSelectorFromElement(t)).toEqual(".target")}),it("should get selector from href if no data-bs-target set",()=>{e.innerHTML=['<a id="test" href=".target"></a>','<div class="target"></div>'].join("");const t=e.querySelector("#test");expect(Util.getSelectorFromElement(t)).toEqual(".target")}),it("should get selector from href if data-bs-target equal to #",()=>{e.innerHTML=['<a id="test" data-bs-target="#" href=".target"></a>','<div class="target"></div>'].join("");const t=e.querySelector("#test");expect(Util.getSelectorFromElement(t)).toEqual(".target")}),it("should return null if a selector from a href is a url without an anchor",()=>{e.innerHTML=['<a id="test" data-bs-target="#" href="foo/bar.html"></a>','<div class="target"></div>'].join("");const t=e.querySelector("#test");expect(Util.getSelectorFromElement(t)).toBeNull()}),it("should return the anchor if a selector from a href is a url",()=>{e.innerHTML=['<a id="test" data-bs-target="#" href="foo/bar.html#target"></a>','<div id="target"></div>'].join("");const t=e.querySelector("#test");expect(Util.getSelectorFromElement(t)).toEqual("#target")}),it("should return null if selector not found",()=>{e.innerHTML='<a id="test" href=".target"></a>';const t=e.querySelector("#test");expect(Util.getSelectorFromElement(t)).toBeNull()}),it("should return null if no selector",()=>{e.innerHTML="<div></div>";const t=e.querySelector("div");expect(Util.getSelectorFromElement(t)).toBeNull()})}),describe("getElementFromSelector",()=>{it("should get element from data-bs-target",()=>{e.innerHTML=['<div id="test" data-bs-target=".target"></div>','<div class="target"></div>'].join("");const t=e.querySelector("#test");expect(Util.getElementFromSelector(t)).toEqual(e.querySelector(".target"))}),it("should get element from href if no data-bs-target set",()=>{e.innerHTML=['<a id="test" href=".target"></a>','<div class="target"></div>'].join("");const t=e.querySelector("#test");expect(Util.getElementFromSelector(t)).toEqual(e.querySelector(".target"))}),it("should return null if element not found",()=>{e.innerHTML='<a id="test" href=".target"></a>';const t=e.querySelector("#test");expect(Util.getElementFromSelector(t)).toBeNull()}),it("should return null if no selector",()=>{e.innerHTML="<div></div>";const t=e.querySelector("div");expect(Util.getElementFromSelector(t)).toBeNull()})}),describe("getTransitionDurationFromElement",()=>{it("should get transition from element",()=>{e.innerHTML='<div style="transition: all 300ms ease-out;"></div>',expect(Util.getTransitionDurationFromElement(e.querySelector("div"))).toEqual(300)}),it("should return 0 if the element is undefined or null",()=>{expect(Util.getTransitionDurationFromElement(null)).toEqual(0),expect(Util.getTransitionDurationFromElement(void 0)).toEqual(0)}),it("should return 0 if the element do not possess transition",()=>{e.innerHTML="<div></div>",expect(Util.getTransitionDurationFromElement(e.querySelector("div"))).toEqual(0)})}),describe("triggerTransitionEnd",()=>{it("should trigger transitionend event",t=>{e.innerHTML="<div></div>";const i=e.querySelector("div"),n=spyOn(i,"dispatchEvent").and.callThrough();i.addEventListener("transitionend",()=>{expect(n).toHaveBeenCalled(),t()}),Util.triggerTransitionEnd(i)})}),describe("isElement",()=>{it("should detect if the parameter is an element or not and return Boolean",()=>{e.innerHTML=['<div id="foo" class="test"></div>','<div id="bar" class="test"></div>'].join("");const t=e.querySelector("#foo");expect(Util.isElement(t)).toEqual(!0),expect(Util.isElement({})).toEqual(!1),expect(Util.isElement(e.querySelectorAll(".test"))).toEqual(!1)}),it("should detect jQuery element",()=>{e.innerHTML="<div></div>";const t={0:e.querySelector("div"),jquery:"foo"};expect(Util.isElement(t)).toEqual(!0)})}),describe("getElement",()=>{it("should try to parse element",()=>{e.innerHTML=['<div id="foo" class="test"></div>','<div id="bar" class="test"></div>'].join("");const t=e.querySelector("div");expect(Util.getElement(t)).toEqual(t),expect(Util.getElement("#foo")).toEqual(t),expect(Util.getElement("#fail")).toBeNull(),expect(Util.getElement({})).toBeNull(),expect(Util.getElement([])).toBeNull(),expect(Util.getElement()).toBeNull(),expect(Util.getElement(null)).toBeNull(),expect(Util.getElement(e.querySelectorAll(".test"))).toBeNull();const i={0:t,jquery:"foo"};expect(Util.getElement(i)).toEqual(t)})}),describe("typeCheckConfig",()=>{it("should check type of the config object",()=>{const e={toggle:"boolean",parent:"(string|element)"},t={toggle:!0,parent:777};expect(()=>{Util.typeCheckConfig("collapse",t,e)}).toThrowError(TypeError,'COLLAPSE: Option "parent" provided type "number" but expected type "(string|element)".')}),it("should return null stringified when null is passed",()=>{Util.typeCheckConfig("collapse",{toggle:!0,parent:null},{toggle:"boolean",parent:"(null|element)"}),expect().nothing()}),it("should return undefined stringified when undefined is passed",()=>{const e={toggle:!0,parent:void 0};Util.typeCheckConfig("collapse",e,{toggle:"boolean",parent:"(undefined|element)"}),expect().nothing()})}),describe("isVisible",()=>{it("should return false if the element is not defined",()=>{expect(Util.isVisible(null)).toEqual(!1),expect(Util.isVisible(void 0)).toEqual(!1)}),it("should return false if the element provided is not a dom element",()=>{expect(Util.isVisible({})).toEqual(!1)}),it("should return false if the element is not visible with display none",()=>{e.innerHTML='<div style="display: none;"></div>';const t=e.querySelector("div");expect(Util.isVisible(t)).toEqual(!1)}),it("should return false if the element is not visible with visibility hidden",()=>{e.innerHTML='<div style="visibility: hidden;"></div>';const t=e.querySelector("div");expect(Util.isVisible(t)).toEqual(!1)}),it("should return false if an ancestor element is display none",()=>{e.innerHTML=['<div style="display: none;">',"  <div>","    <div>",'      <div class="content"></div>',"    </div>","  </div>","</div>"].join("");const t=e.querySelector(".content");expect(Util.isVisible(t)).toEqual(!1)}),it("should return false if an ancestor element is visibility hidden",()=>{e.innerHTML=['<div style="visibility: hidden;">',"  <div>","    <div>",'      <div class="content"></div>',"    </div>","  </div>","</div>"].join("");const t=e.querySelector(".content");expect(Util.isVisible(t)).toEqual(!1)}),it("should return true if an ancestor element is visibility hidden, but reverted",()=>{e.innerHTML=['<div style="visibility: hidden;">','  <div style="visibility: visible;">',"    <div>",'      <div class="content"></div>',"    </div>","  </div>","</div>"].join("");const t=e.querySelector(".content");expect(Util.isVisible(t)).toEqual(!0)}),it("should return true if the element is visible",()=>{e.innerHTML=["<div>",'  <div id="element"></div>',"</div>"].join("");const t=e.querySelector("#element");expect(Util.isVisible(t)).toEqual(!0)}),it("should return false if the element is hidden, but not via display or visibility",()=>{e.innerHTML=["<details>",'  <div id="element"></div>',"</details>"].join("");const t=e.querySelector("#element");expect(Util.isVisible(t)).toEqual(!1)})}),describe("isDisabled",()=>{it("should return true if the element is not defined",()=>{expect(Util.isDisabled(null)).toEqual(!0),expect(Util.isDisabled(void 0)).toEqual(!0),expect(Util.isDisabled()).toEqual(!0)}),it("should return true if the element provided is not a dom element",()=>{expect(Util.isDisabled({})).toEqual(!0),expect(Util.isDisabled("test")).toEqual(!0)}),it("should return true if the element has disabled attribute",()=>{e.innerHTML=["<div>",'  <div id="element" disabled="disabled"></div>','  <div id="element1" disabled="true"></div>','  <div id="element2" disabled></div>',"</div>"].join("");const t=e.querySelector("#element"),i=e.querySelector("#element1"),n=e.querySelector("#element2");expect(Util.isDisabled(t)).toEqual(!0),expect(Util.isDisabled(i)).toEqual(!0),expect(Util.isDisabled(n)).toEqual(!0)}),it('should return false if the element has disabled attribute with "false" value, or doesn\'t have attribute',()=>{e.innerHTML=["<div>",'  <div id="element" disabled="false"></div>','  <div id="element1" ></div>',"</div>"].join("");const t=e.querySelector("#element"),i=e.querySelector("#element1");expect(Util.isDisabled(t)).toEqual(!1),expect(Util.isDisabled(i)).toEqual(!1)}),it("should return false if the element is not disabled ",()=>{e.innerHTML=["<div>",'  <button id="button"></button>','  <select id="select"></select>','  <select id="input"></select>',"</div>"].join("");const t=t=>e.querySelector(t);expect(Util.isDisabled(t("#button"))).toEqual(!1),expect(Util.isDisabled(t("#select"))).toEqual(!1),expect(Util.isDisabled(t("#input"))).toEqual(!1)}),it("should return true if the element has disabled attribute",()=>{e.innerHTML=["<div>",'  <input id="input" disabled="disabled"/>','  <input id="input1" disabled="disabled"/>','  <button id="button" disabled="true"></button>','  <button id="button1" disabled="disabled"></button>','  <button id="button2" disabled></button>','  <select id="select" disabled></select>','  <select id="input" disabled></select>',"</div>"].join("");const t=t=>e.querySelector(t);expect(Util.isDisabled(t("#input"))).toEqual(!0),expect(Util.isDisabled(t("#input1"))).toEqual(!0),expect(Util.isDisabled(t("#button"))).toEqual(!0),expect(Util.isDisabled(t("#button1"))).toEqual(!0),expect(Util.isDisabled(t("#button2"))).toEqual(!0),expect(Util.isDisabled(t("#input"))).toEqual(!0)}),it('should return true if the element has class "disabled"',()=>{e.innerHTML=["<div>",'  <div id="element" class="disabled"></div>',"</div>"].join("");const t=e.querySelector("#element");expect(Util.isDisabled(t)).toEqual(!0)}),it('should return true if the element has class "disabled" but disabled attribute is false',()=>{e.innerHTML=["<div>",'  <input id="input" class="disabled" disabled="false"/>',"</div>"].join("");const t=e.querySelector("#input");expect(Util.isDisabled(t)).toEqual(!0)})}),describe("findShadowRoot",()=>{it("should return null if shadow dom is not available",()=>{if(!document.documentElement.attachShadow)return void expect().nothing();e.innerHTML="<div></div>";const t=e.querySelector("div");spyOn(document.documentElement,"attachShadow").and.returnValue(null),expect(Util.findShadowRoot(t)).toEqual(null)}),it("should return null when we do not find a shadow root",()=>{document.documentElement.attachShadow?(spyOn(document,"getRootNode").and.returnValue(void 0),expect(Util.findShadowRoot(document)).toEqual(null)):expect().nothing()}),it("should return the shadow root when found",()=>{if(!document.documentElement.attachShadow)return void expect().nothing();e.innerHTML="<div></div>";const t=e.querySelector("div").attachShadow({mode:"open"});expect(Util.findShadowRoot(t)).toEqual(t),t.innerHTML="<button>Shadow Button</button>",expect(Util.findShadowRoot(t.firstChild)).toEqual(t)})}),describe("noop",()=>{it("should be a function",()=>{expect(typeof Util.noop).toEqual("function")})}),describe("reflow",()=>{it("should return element offset height to force the reflow",()=>{e.innerHTML="<div></div>";const t=e.querySelector("div"),i=spyOnProperty(t,"offsetHeight");Util.reflow(t),expect(i).toHaveBeenCalled()})}),describe("getjQuery",()=>{const e={trigger(){}};beforeEach(()=>{Object.defineProperty(window,"jQuery",{value:e,writable:!0})}),afterEach(()=>{window.jQuery=void 0}),it("should return jQuery object when present",()=>{expect(Util.getjQuery()).toEqual(e)}),it("should not return jQuery object when present if data-bs-no-jquery",()=>{document.body.setAttribute("data-bs-no-jquery",""),expect(window.jQuery).toEqual(e),expect(Util.getjQuery()).toEqual(null),document.body.removeAttribute("data-bs-no-jquery")}),it("should not return jQuery if not present",()=>{window.jQuery=void 0,expect(Util.getjQuery()).toEqual(null)})}),describe("onDOMContentLoaded",()=>{it("should execute callbacks when DOMContentLoaded is fired and should not add more than one listener",()=>{const e=jasmine.createSpy(),t=jasmine.createSpy();spyOn(document,"addEventListener").and.callThrough(),spyOnProperty(document,"readyState").and.returnValue("loading"),Util.onDOMContentLoaded(e),Util.onDOMContentLoaded(t),document.dispatchEvent(new Event("DOMContentLoaded",{bubbles:!0,cancelable:!0})),expect(e).toHaveBeenCalled(),expect(t).toHaveBeenCalled(),expect(document.addEventListener).toHaveBeenCalledTimes(1)}),it('should execute callback if readyState is not "loading"',()=>{const e=jasmine.createSpy();Util.onDOMContentLoaded(e),expect(e).toHaveBeenCalled()})}),describe("defineJQueryPlugin",()=>{const e={fn:{}};beforeEach(()=>{Object.defineProperty(window,"jQuery",{value:e,writable:!0})}),afterEach(()=>{window.jQuery=void 0}),it("should define a plugin on the jQuery instance",()=>{const t=function(){};t.NAME="test",t.jQueryInterface=function(){},Util.defineJQueryPlugin(t),expect(e.fn.test).toBe(t.jQueryInterface),expect(e.fn.test.Constructor).toBe(t),expect(typeof e.fn.test.noConflict).toEqual("function")})}),describe("execute",()=>{it("should execute if arg is function",()=>{const e=jasmine.createSpy("spy");Util.execute(e),expect(e).toHaveBeenCalled()})}),describe("executeAfterTransition",()=>{it("should immediately execute a function when waitForTransition parameter is false",()=>{const e=document.createElement("div"),t=jasmine.createSpy("callback spy"),i=spyOn(e,"addEventListener");Util.executeAfterTransition(t,e,!1),expect(t).toHaveBeenCalled(),expect(i).not.toHaveBeenCalled()}),it("should execute a function when a transitionend event is dispatched",()=>{const e=document.createElement("div"),t=jasmine.createSpy("callback spy");spyOn(window,"getComputedStyle").and.returnValue({transitionDuration:"0.05s",transitionDelay:"0s"}),Util.executeAfterTransition(t,e),e.dispatchEvent(new TransitionEvent("transitionend")),expect(t).toHaveBeenCalled()}),it("should execute a function after a computed CSS transition duration and there was no transitionend event dispatched",e=>{const t=document.createElement("div"),i=jasmine.createSpy("callback spy");spyOn(window,"getComputedStyle").and.returnValue({transitionDuration:"0.05s",transitionDelay:"0s"}),Util.executeAfterTransition(i,t),setTimeout(()=>{expect(i).toHaveBeenCalled(),e()},70)}),it("should not execute a function a second time after a computed CSS transition duration and if a transitionend event has already been dispatched",e=>{const t=document.createElement("div"),i=jasmine.createSpy("callback spy");spyOn(window,"getComputedStyle").and.returnValue({transitionDuration:"0.05s",transitionDelay:"0s"}),Util.executeAfterTransition(i,t),setTimeout(()=>{t.dispatchEvent(new TransitionEvent("transitionend"))},50),setTimeout(()=>{expect(i).toHaveBeenCalledTimes(1),e()},70)}),it("should not trigger a transitionend event if another transitionend event had already happened",e=>{const t=document.createElement("div");spyOn(window,"getComputedStyle").and.returnValue({transitionDuration:"0.05s",transitionDelay:"0s"}),Util.executeAfterTransition(()=>{},t),t.dispatchEvent(new TransitionEvent("transitionend"));const i=spyOn(t,"dispatchEvent").and.callThrough();setTimeout(()=>{expect(i).not.toHaveBeenCalled(),e()},70)}),it("should ignore transitionend events from nested elements",t=>{e.innerHTML=['<div class="outer">','  <div class="nested"></div>',"</div>"].join("");const i=e.querySelector(".outer"),n=e.querySelector(".nested"),l=jasmine.createSpy("callback spy");spyOn(window,"getComputedStyle").and.returnValue({transitionDuration:"0.05s",transitionDelay:"0s"}),Util.executeAfterTransition(l,i),n.dispatchEvent(new TransitionEvent("transitionend",{bubbles:!0})),setTimeout(()=>{expect(l).not.toHaveBeenCalled()},20),setTimeout(()=>{expect(l).toHaveBeenCalled(),t()},70)})}),describe("getNextActiveElement",()=>{it("should return first element if active not exists or not given and shouldGetNext is either true, or false with cycling being disabled",()=>{const e=["a","b","c","d"];expect(Util.getNextActiveElement(e,"",!0,!0)).toEqual("a"),expect(Util.getNextActiveElement(e,"g",!0,!0)).toEqual("a"),expect(Util.getNextActiveElement(e,"",!0,!1)).toEqual("a"),expect(Util.getNextActiveElement(e,"g",!0,!1)).toEqual("a"),expect(Util.getNextActiveElement(e,"",!1,!1)).toEqual("a"),expect(Util.getNextActiveElement(e,"g",!1,!1)).toEqual("a")}),it("should return last element if active not exists or not given and shouldGetNext is false but cycling is enabled",()=>{const e=["a","b","c","d"];expect(Util.getNextActiveElement(e,"",!1,!0)).toEqual("d"),expect(Util.getNextActiveElement(e,"g",!1,!0)).toEqual("d")}),it("should return next element or same if is last",()=>{const e=["a","b","c","d"];expect(Util.getNextActiveElement(e,"a",!0,!0)).toEqual("b"),expect(Util.getNextActiveElement(e,"b",!0,!0)).toEqual("c"),expect(Util.getNextActiveElement(e,"d",!0,!1)).toEqual("d")}),it('should return next element or first, if is last and "isCycleAllowed = true"',()=>{const e=["a","b","c","d"];expect(Util.getNextActiveElement(e,"c",!0,!0)).toEqual("d"),expect(Util.getNextActiveElement(e,"d",!0,!0)).toEqual("a")}),it("should return previous element or same if is first",()=>{const e=["a","b","c","d"];expect(Util.getNextActiveElement(e,"b",!1,!0)).toEqual("a"),expect(Util.getNextActiveElement(e,"d",!1,!0)).toEqual("c"),expect(Util.getNextActiveElement(e,"a",!1,!1)).toEqual("a")}),it('should return next element or first, if is last and "isCycleAllowed = true"',()=>{const e=["a","b","c","d"];expect(Util.getNextActiveElement(e,"d",!1,!0)).toEqual("c"),expect(Util.getNextActiveElement(e,"a",!1,!0)).toEqual("d")})})});