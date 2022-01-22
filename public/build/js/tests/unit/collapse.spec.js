import Collapse from"../../src/collapse";import EventHandler from"../../src/dom/event-handler";import{clearFixture,getFixture,jQueryMock}from"../helpers/fixture";describe("Collapse",()=>{let e;beforeAll(()=>{e=getFixture()}),afterEach(()=>{clearFixture()}),describe("VERSION",()=>{it("should return plugin version",()=>{expect(Collapse.VERSION).toEqual(jasmine.any(String))})}),describe("Default",()=>{it("should return plugin default config",()=>{expect(Collapse.Default).toEqual(jasmine.any(Object))})}),describe("DATA_KEY",()=>{it("should return plugin data key",()=>{expect(Collapse.DATA_KEY).toEqual("bs.collapse")})}),describe("constructor",()=>{it("should take care of element either passed as a CSS selector or DOM element",()=>{e.innerHTML='<div class="my-collapse"></div>';const l=e.querySelector("div.my-collapse"),t=new Collapse("div.my-collapse"),a=new Collapse(l);expect(t._element).toEqual(l),expect(a._element).toEqual(l)}),it("should allow jquery object in parent config",()=>{e.innerHTML=['<div class="my-collapse">','  <div class="item">','    <a data-bs-toggle="collapse" href="#">Toggle item</a>','    <div class="collapse">Lorem ipsum</div>',"  </div>","</div>"].join("");const l=e.querySelector("div.collapse"),t=e.querySelector(".my-collapse"),a=new Collapse(l,{parent:{0:t,jquery:"foo"}});expect(a._config.parent).toEqual(t)}),it("should allow non jquery object in parent config",()=>{e.innerHTML=['<div class="my-collapse">','  <div class="item">','    <a data-bs-toggle="collapse" href="#">Toggle item</a>','    <div class="collapse">Lorem ipsum</div>',"  </div>","</div>"].join("");const l=e.querySelector("div.collapse"),t=e.querySelector(".my-collapse"),a=new Collapse(l,{parent:t});expect(a._config.parent).toEqual(t)}),it("should allow string selector in parent config",()=>{e.innerHTML=['<div class="my-collapse">','  <div class="item">','    <a data-bs-toggle="collapse" href="#">Toggle item</a>','    <div class="collapse">Lorem ipsum</div>',"  </div>","</div>"].join("");const l=e.querySelector("div.collapse"),t=e.querySelector(".my-collapse"),a=new Collapse(l,{parent:"div.my-collapse"});expect(a._config.parent).toEqual(t)})}),describe("toggle",()=>{it("should call show method if show class is not present",()=>{e.innerHTML="<div></div>";const l=e.querySelector("div"),t=new Collapse(l);spyOn(t,"show"),t.toggle(),expect(t.show).toHaveBeenCalled()}),it("should call hide method if show class is present",()=>{e.innerHTML='<div class="show"></div>';const l=e.querySelector(".show"),t=new Collapse(l,{toggle:!1});spyOn(t,"hide"),t.toggle(),expect(t.hide).toHaveBeenCalled()}),it("should find collapse children if they have collapse class too not only data-bs-parent",l=>{e.innerHTML=['<div class="my-collapse">','  <div class="item">','    <a data-bs-toggle="collapse" href="#">Toggle item 1</a>','    <div id="collapse1" class="collapse show">Lorem ipsum 1</div>',"  </div>",'  <div class="item">','    <a id="triggerCollapse2" data-bs-toggle="collapse" href="#">Toggle item 2</a>','    <div id="collapse2" class="collapse">Lorem ipsum 2</div>',"  </div>","</div>"].join("");const t=e.querySelector(".my-collapse"),a=e.querySelector("#collapse1"),s=e.querySelector("#collapse2"),o=[].concat(...e.querySelectorAll(".collapse")).map(e=>new Collapse(e,{parent:t,toggle:!1}));s.addEventListener("shown.bs.collapse",()=>{expect(s.classList.contains("show")).toEqual(!0),expect(a.classList.contains("show")).toEqual(!1),l()}),o[1].toggle()})}),describe("show",()=>{it("should do nothing if is transitioning",()=>{e.innerHTML="<div></div>",spyOn(EventHandler,"trigger");const l=e.querySelector("div"),t=new Collapse(l,{toggle:!1});t._isTransitioning=!0,t.show(),expect(EventHandler.trigger).not.toHaveBeenCalled()}),it("should do nothing if already shown",()=>{e.innerHTML='<div class="show"></div>',spyOn(EventHandler,"trigger");const l=e.querySelector("div");new Collapse(l,{toggle:!1}).show(),expect(EventHandler.trigger).not.toHaveBeenCalled()}),it("should show a collapsed element",l=>{e.innerHTML='<div class="collapse" style="height: 0px;"></div>';const t=e.querySelector("div"),a=new Collapse(t,{toggle:!1});t.addEventListener("show.bs.collapse",()=>{expect(t.style.height).toEqual("0px")}),t.addEventListener("shown.bs.collapse",()=>{expect(t.classList.contains("show")).toEqual(!0),expect(t.style.height).toEqual(""),l()}),a.show()}),it("should show a collapsed element on width",l=>{e.innerHTML='<div class="collapse collapse-horizontal" style="width: 0px;"></div>';const t=e.querySelector("div"),a=new Collapse(t,{toggle:!1});t.addEventListener("show.bs.collapse",()=>{expect(t.style.width).toEqual("0px")}),t.addEventListener("shown.bs.collapse",()=>{expect(t.classList.contains("show")).toEqual(!0),expect(t.style.width).toEqual(""),l()}),a.show()}),it("should collapse only the first collapse",l=>{e.innerHTML=['<div class="card" id="accordion1">','  <div id="collapse1" class="collapse"></div>',"</div>",'<div class="card" id="accordion2">','  <div id="collapse2" class="collapse show"></div>',"</div>"].join("");const t=e.querySelector("#collapse1"),a=e.querySelector("#collapse2"),s=new Collapse(t,{toggle:!1});t.addEventListener("shown.bs.collapse",()=>{expect(t.classList.contains("show")).toEqual(!0),expect(a.classList.contains("show")).toEqual(!0),l()}),s.show()}),it("should be able to handle toggling of other children siblings",l=>{e.innerHTML=['<div id="parentGroup" class="accordion">','   <div id="parentHeader" class="accordion-header">','      <button data-bs-target="#parentContent" data-bs-toggle="collapse" role="button" class="accordion-toggle">Parent</button>',"   </div>",'   <div id="parentContent" class="accordion-collapse collapse" aria-labelledby="parentHeader" data-bs-parent="#parentGroup">','      <div class="accordion-body">','         <div id="childGroup" class="accordion">','            <div class="accordion-item">','               <div id="childHeader1" class="accordion-header">','                  <button data-bs-target="#childContent1" data-bs-toggle="collapse" role="button" class="accordion-toggle">Child 1</button>',"               </div>",'               <div id="childContent1" class="accordion-collapse collapse" aria-labelledby="childHeader1" data-bs-parent="#childGroup">',"                  <div>content</div>","               </div>","            </div>",'            <div class="accordion-item">','               <div id="childHeader2" class="accordion-header">','                  <button data-bs-target="#childContent2" data-bs-toggle="collapse" role="button" class="accordion-toggle">Child 2</button>',"               </div>",'               <div id="childContent2" class="accordion-collapse collapse" aria-labelledby="childHeader2" data-bs-parent="#childGroup">',"                  <div>content</div>","               </div>","            </div>","         </div>","      </div>","   </div>","</div>"].join("");const t=l=>e.querySelector(l),a=t('[data-bs-target="#parentContent"]'),s=t('[data-bs-target="#childContent1"]'),o=t('[data-bs-target="#childContent2"]'),n=t("#parentContent"),i=t("#childContent1"),c=t("#childContent2");n.addEventListener("shown.bs.collapse",()=>{expect(n.classList.contains("show")).toEqual(!0),s.click()}),i.addEventListener("shown.bs.collapse",()=>{expect(i.classList.contains("show")).toEqual(!0),o.click()}),c.addEventListener("shown.bs.collapse",()=>{expect(c.classList.contains("show")).toEqual(!0),expect(i.classList.contains("show")).toEqual(!1),l()}),a.click()}),it("should not change tab tabpanels descendants on accordion",l=>{e.innerHTML=['<div class="accordion" id="accordionExample">','      <div class="accordion-item">','        <h2 class="accordion-header" id="headingOne">','          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">',"            Accordion Item #1","          </button>","        </h2>",'        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">','          <div class="accordion-body">',"            <nav>",'              <div class="nav nav-tabs" id="nav-tab" role="tablist">','                <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>','                <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</button>',"              </div>","            </nav>",'            <div class="tab-content" id="nav-tabContent">','              <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">Home</div>','              <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">Profile</div>',"            </div>","          </div>","        </div>","      </div>","    </div>"].join("");const t=e.querySelector("#collapseOne"),a=e.querySelector("#nav-home"),s=new Collapse(t);let o=1;t.addEventListener("hidden.bs.collapse",()=>{s.show()}),t.addEventListener("shown.bs.collapse",()=>{expect(a.classList.contains("show")).toEqual(!0),o++,2===o&&l(),s.hide()}),s.show()}),it("should not fire shown when show is prevented",l=>{e.innerHTML='<div class="collapse"></div>';const t=e.querySelector("div"),a=new Collapse(t,{toggle:!1});t.addEventListener("show.bs.collapse",e=>{e.preventDefault(),setTimeout(()=>{expect().nothing(),l()},10)}),t.addEventListener("shown.bs.collapse",()=>{throw new Error("should not fire shown event")}),a.show()})}),describe("hide",()=>{it("should do nothing if is transitioning",()=>{e.innerHTML="<div></div>",spyOn(EventHandler,"trigger");const l=e.querySelector("div"),t=new Collapse(l,{toggle:!1});t._isTransitioning=!0,t.hide(),expect(EventHandler.trigger).not.toHaveBeenCalled()}),it("should do nothing if already shown",()=>{e.innerHTML="<div></div>",spyOn(EventHandler,"trigger");const l=e.querySelector("div");new Collapse(l,{toggle:!1}).hide(),expect(EventHandler.trigger).not.toHaveBeenCalled()}),it("should hide a collapsed element",l=>{e.innerHTML='<div class="collapse show"></div>';const t=e.querySelector("div"),a=new Collapse(t,{toggle:!1});t.addEventListener("hidden.bs.collapse",()=>{expect(t.classList.contains("show")).toEqual(!1),expect(t.style.height).toEqual(""),l()}),a.hide()}),it("should not fire hidden when hide is prevented",l=>{e.innerHTML='<div class="collapse show"></div>';const t=e.querySelector("div"),a=new Collapse(t,{toggle:!1});t.addEventListener("hide.bs.collapse",e=>{e.preventDefault(),setTimeout(()=>{expect().nothing(),l()},10)}),t.addEventListener("hidden.bs.collapse",()=>{throw new Error("should not fire hidden event")}),a.hide()})}),describe("dispose",()=>{it("should destroy a collapse",()=>{e.innerHTML='<div class="collapse show"></div>';const l=e.querySelector("div"),t=new Collapse(l,{toggle:!1});expect(Collapse.getInstance(l)).toEqual(t),t.dispose(),expect(Collapse.getInstance(l)).toEqual(null)})}),describe("data-api",()=>{it("should prevent url change if click on nested elements",l=>{e.innerHTML=['<a role="button" data-bs-toggle="collapse" class="collapsed" href="#collapse">','  <span id="nested"></span>',"</a>",'<div id="collapse" class="collapse"></div>'].join("");const t=e.querySelector("a"),a=e.querySelector("#nested");spyOn(Event.prototype,"preventDefault").and.callThrough(),t.addEventListener("click",e=>{expect(e.target.isEqualNode(a)).toEqual(!0),expect(e.delegateTarget.isEqualNode(t)).toEqual(!0),expect(Event.prototype.preventDefault).toHaveBeenCalled(),l()}),a.click()}),it("should show multiple collapsed elements",l=>{e.innerHTML=['<a role="button" data-bs-toggle="collapse" class="collapsed" href=".multi"></a>','<div id="collapse1" class="collapse multi"></div>','<div id="collapse2" class="collapse multi"></div>'].join("");const t=e.querySelector("a"),a=e.querySelector("#collapse1");e.querySelector("#collapse2").addEventListener("shown.bs.collapse",()=>{expect(t.getAttribute("aria-expanded")).toEqual("true"),expect(t.classList.contains("collapsed")).toEqual(!1),expect(a.classList.contains("show")).toEqual(!0),expect(a.classList.contains("show")).toEqual(!0),l()}),t.click()}),it("should hide multiple collapsed elements",l=>{e.innerHTML=['<a role="button" data-bs-toggle="collapse" href=".multi"></a>','<div id="collapse1" class="collapse multi show"></div>','<div id="collapse2" class="collapse multi show"></div>'].join("");const t=e.querySelector("a"),a=e.querySelector("#collapse1");e.querySelector("#collapse2").addEventListener("hidden.bs.collapse",()=>{expect(t.getAttribute("aria-expanded")).toEqual("false"),expect(t.classList.contains("collapsed")).toEqual(!0),expect(a.classList.contains("show")).toEqual(!1),expect(a.classList.contains("show")).toEqual(!1),l()}),t.click()}),it('should remove "collapsed" class from target when collapse is shown',l=>{e.innerHTML=['<a id="link1" role="button" data-bs-toggle="collapse" class="collapsed" href="#" data-bs-target="#test1"></a>','<a id="link2" role="button" data-bs-toggle="collapse" class="collapsed" href="#" data-bs-target="#test1"></a>','<div id="test1"></div>'].join("");const t=e.querySelector("#link1"),a=e.querySelector("#link2");e.querySelector("#test1").addEventListener("shown.bs.collapse",()=>{expect(t.getAttribute("aria-expanded")).toEqual("true"),expect(a.getAttribute("aria-expanded")).toEqual("true"),expect(t.classList.contains("collapsed")).toEqual(!1),expect(a.classList.contains("collapsed")).toEqual(!1),l()}),t.click()}),it('should add "collapsed" class to target when collapse is hidden',l=>{e.innerHTML=['<a id="link1" role="button" data-bs-toggle="collapse" href="#" data-bs-target="#test1"></a>','<a id="link2" role="button" data-bs-toggle="collapse" href="#" data-bs-target="#test1"></a>','<div id="test1" class="show"></div>'].join("");const t=e.querySelector("#link1"),a=e.querySelector("#link2");e.querySelector("#test1").addEventListener("hidden.bs.collapse",()=>{expect(t.getAttribute("aria-expanded")).toEqual("false"),expect(a.getAttribute("aria-expanded")).toEqual("false"),expect(t.classList.contains("collapsed")).toEqual(!0),expect(a.classList.contains("collapsed")).toEqual(!0),l()}),t.click()}),it("should allow accordion to use children other than card",l=>{e.innerHTML=['<div id="accordion">','  <div class="item">','    <a id="linkTrigger" data-bs-toggle="collapse" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne"></a>','    <div id="collapseOne" class="collapse" role="tabpanel" aria-labelledby="headingThree" data-bs-parent="#accordion"></div>',"  </div>",'  <div class="item">','    <a id="linkTriggerTwo" data-bs-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"></a>','    <div id="collapseTwo" class="collapse show" role="tabpanel" aria-labelledby="headingTwo" data-bs-parent="#accordion"></div>',"  </div>","</div>"].join("");const t=e.querySelector("#linkTrigger"),a=e.querySelector("#linkTriggerTwo"),s=e.querySelector("#collapseOne"),o=e.querySelector("#collapseTwo");s.addEventListener("shown.bs.collapse",()=>{expect(s.classList.contains("show")).toEqual(!0),expect(o.classList.contains("show")).toEqual(!1),o.addEventListener("shown.bs.collapse",()=>{expect(s.classList.contains("show")).toEqual(!1),expect(o.classList.contains("show")).toEqual(!0),l()}),a.click()}),t.click()}),it("should not prevent event for input",l=>{e.innerHTML=['<input type="checkbox" data-bs-toggle="collapse" data-bs-target="#collapsediv1">','<div id="collapsediv1"></div>'].join("");const t=e.querySelector("input"),a=e.querySelector("#collapsediv1");a.addEventListener("shown.bs.collapse",()=>{expect(a.classList.contains("show")).toEqual(!0),expect(t.checked).toEqual(!0),l()}),t.click()}),it("should allow accordion to contain nested elements",l=>{e.innerHTML=['<div id="accordion">','  <div class="row">','    <div class="col-lg-6">','      <div class="item">','        <a id="linkTrigger" data-bs-toggle="collapse" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne"></a>','        <div id="collapseOne" class="collapse" role="tabpanel" aria-labelledby="headingThree" data-bs-parent="#accordion"></div>',"      </div>","    </div>",'    <div class="col-lg-6">','      <div class="item">','        <a id="linkTriggerTwo" data-bs-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"></a>','        <div id="collapseTwo" class="collapse show" role="tabpanel" aria-labelledby="headingTwo" data-bs-parent="#accordion"></div>',"      </div>","    </div>","  </div>","</div>"].join("");const t=e.querySelector("#linkTrigger"),a=e.querySelector("#linkTriggerTwo"),s=e.querySelector("#collapseOne"),o=e.querySelector("#collapseTwo");s.addEventListener("shown.bs.collapse",()=>{expect(s.classList.contains("show")).toEqual(!0),expect(t.classList.contains("collapsed")).toEqual(!1),expect(t.getAttribute("aria-expanded")).toEqual("true"),expect(o.classList.contains("show")).toEqual(!1),expect(a.classList.contains("collapsed")).toEqual(!0),expect(a.getAttribute("aria-expanded")).toEqual("false"),o.addEventListener("shown.bs.collapse",()=>{expect(s.classList.contains("show")).toEqual(!1),expect(t.classList.contains("collapsed")).toEqual(!0),expect(t.getAttribute("aria-expanded")).toEqual("false"),expect(o.classList.contains("show")).toEqual(!0),expect(a.classList.contains("collapsed")).toEqual(!1),expect(a.getAttribute("aria-expanded")).toEqual("true"),l()}),a.click()}),t.click()}),it("should allow accordion to target multiple elements",l=>{e.innerHTML=['<div id="accordion">','  <a id="linkTriggerOne" data-bs-toggle="collapse" data-bs-target=".collapseOne" href="#" aria-expanded="false" aria-controls="collapseOne"></a>','  <a id="linkTriggerTwo" data-bs-toggle="collapse" data-bs-target=".collapseTwo" href="#" aria-expanded="false" aria-controls="collapseTwo"></a>','  <div id="collapseOneOne" class="collapse collapseOne" role="tabpanel" data-bs-parent="#accordion"></div>','  <div id="collapseOneTwo" class="collapse collapseOne" role="tabpanel" data-bs-parent="#accordion"></div>','  <div id="collapseTwoOne" class="collapse collapseTwo" role="tabpanel" data-bs-parent="#accordion"></div>','  <div id="collapseTwoTwo" class="collapse collapseTwo" role="tabpanel" data-bs-parent="#accordion"></div>',"</div>"].join("");const t=e.querySelector("#linkTriggerOne"),a=e.querySelector("#linkTriggerTwo"),s=e.querySelector("#collapseOneOne"),o=e.querySelector("#collapseOneTwo"),n=e.querySelector("#collapseTwoOne"),i=e.querySelector("#collapseTwoTwo"),c={one:!1,two:!1};function d(){expect(s.classList.contains("show")).toEqual(!0),expect(o.classList.contains("show")).toEqual(!0),expect(n.classList.contains("show")).toEqual(!1),expect(i.classList.contains("show")).toEqual(!1),a.click()}function r(){expect(s.classList.contains("show")).toEqual(!1),expect(o.classList.contains("show")).toEqual(!1),expect(n.classList.contains("show")).toEqual(!0),expect(i.classList.contains("show")).toEqual(!0),l()}s.addEventListener("shown.bs.collapse",()=>{c.one?d():c.one=!0}),o.addEventListener("shown.bs.collapse",()=>{c.one?d():c.one=!0}),n.addEventListener("shown.bs.collapse",()=>{c.two?r():c.two=!0}),i.addEventListener("shown.bs.collapse",()=>{c.two?r():c.two=!0}),t.click()}),it("should collapse accordion children but not nested accordion children",l=>{e.innerHTML=['<div id="accordion">','  <div class="item">','    <a id="linkTrigger" data-bs-toggle="collapse" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne"></a>','    <div id="collapseOne" data-bs-parent="#accordion" class="collapse" role="tabpanel" aria-labelledby="headingThree">','      <div id="nestedAccordion">','        <div class="item">','          <a id="nestedLinkTrigger" data-bs-toggle="collapse" href="#nestedCollapseOne" aria-expanded="false" aria-controls="nestedCollapseOne"></a>','          <div id="nestedCollapseOne" data-bs-parent="#nestedAccordion" class="collapse" role="tabpanel" aria-labelledby="headingThree"></div>',"        </div>","      </div>","    </div>","  </div>",'  <div class="item">','    <a id="linkTriggerTwo" data-bs-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"></a>','    <div id="collapseTwo" data-bs-parent="#accordion" class="collapse show" role="tabpanel" aria-labelledby="headingTwo"></div>',"  </div>","</div>"].join("");const t=e.querySelector("#linkTrigger"),a=e.querySelector("#linkTriggerTwo"),s=e.querySelector("#nestedLinkTrigger"),o=e.querySelector("#collapseOne"),n=e.querySelector("#collapseTwo"),i=e.querySelector("#nestedCollapseOne");function c(){expect(o.classList.contains("show")).toEqual(!0),expect(n.classList.contains("show")).toEqual(!1),expect(i.classList.contains("show")).toEqual(!0),n.addEventListener("shown.bs.collapse",()=>{expect(o.classList.contains("show")).toEqual(!1),expect(n.classList.contains("show")).toEqual(!0),expect(i.classList.contains("show")).toEqual(!0),l()}),a.click(),i.removeEventListener("shown.bs.collapse",c)}o.addEventListener("shown.bs.collapse",(function e(){expect(o.classList.contains("show")).toEqual(!0),expect(n.classList.contains("show")).toEqual(!1),expect(i.classList.contains("show")).toEqual(!1),i.addEventListener("shown.bs.collapse",c),s.click(),o.removeEventListener("shown.bs.collapse",e)})),t.click()}),it('should add "collapsed" class and set aria-expanded to triggers only when all the targeted collapse are hidden',l=>{e.innerHTML=['<a id="trigger1" role="button" data-bs-toggle="collapse" href="#test1"></a>','<a id="trigger2" role="button" data-bs-toggle="collapse" href="#test2"></a>','<a id="trigger3" role="button" data-bs-toggle="collapse" href=".multi"></a>','<div id="test1" class="multi"></div>','<div id="test2" class="multi"></div>'].join("");const t=e.querySelector("#trigger1"),a=e.querySelector("#trigger2"),s=e.querySelector("#trigger3"),o=e.querySelector("#test1"),n=e.querySelector("#test2");n.addEventListener("shown.bs.collapse",()=>{expect(t.classList.contains("collapsed")).toEqual(!1),expect(t.getAttribute("aria-expanded")).toEqual("true"),expect(a.classList.contains("collapsed")).toEqual(!1),expect(a.getAttribute("aria-expanded")).toEqual("true"),expect(s.classList.contains("collapsed")).toEqual(!1),expect(s.getAttribute("aria-expanded")).toEqual("true"),n.addEventListener("hidden.bs.collapse",()=>{expect(t.classList.contains("collapsed")).toEqual(!1),expect(t.getAttribute("aria-expanded")).toEqual("true"),expect(a.classList.contains("collapsed")).toEqual(!0),expect(a.getAttribute("aria-expanded")).toEqual("false"),expect(s.classList.contains("collapsed")).toEqual(!1),expect(s.getAttribute("aria-expanded")).toEqual("true"),o.addEventListener("hidden.bs.collapse",()=>{expect(t.classList.contains("collapsed")).toEqual(!0),expect(t.getAttribute("aria-expanded")).toEqual("false"),expect(a.classList.contains("collapsed")).toEqual(!0),expect(a.getAttribute("aria-expanded")).toEqual("false"),expect(s.classList.contains("collapsed")).toEqual(!0),expect(s.getAttribute("aria-expanded")).toEqual("false"),l()}),t.click()}),a.click()}),s.click()})}),describe("jQueryInterface",()=>{it("should create a collapse",()=>{e.innerHTML="<div></div>";const l=e.querySelector("div");jQueryMock.fn.collapse=Collapse.jQueryInterface,jQueryMock.elements=[l],jQueryMock.fn.collapse.call(jQueryMock),expect(Collapse.getInstance(l)).not.toBeNull()}),it("should not re create a collapse",()=>{e.innerHTML="<div></div>";const l=e.querySelector("div"),t=new Collapse(l);jQueryMock.fn.collapse=Collapse.jQueryInterface,jQueryMock.elements=[l],jQueryMock.fn.collapse.call(jQueryMock),expect(Collapse.getInstance(l)).toEqual(t)}),it("should throw error on undefined method",()=>{e.innerHTML="<div></div>";const l=e.querySelector("div");jQueryMock.fn.collapse=Collapse.jQueryInterface,jQueryMock.elements=[l],expect(()=>{jQueryMock.fn.collapse.call(jQueryMock,"undefinedMethod")}).toThrowError(TypeError,'No method named "undefinedMethod"')})}),describe("getInstance",()=>{it("should return collapse instance",()=>{e.innerHTML="<div></div>";const l=e.querySelector("div"),t=new Collapse(l);expect(Collapse.getInstance(l)).toEqual(t),expect(Collapse.getInstance(l)).toBeInstanceOf(Collapse)}),it("should return null when there is no collapse instance",()=>{e.innerHTML="<div></div>";const l=e.querySelector("div");expect(Collapse.getInstance(l)).toEqual(null)})}),describe("getOrCreateInstance",()=>{it("should return collapse instance",()=>{e.innerHTML="<div></div>";const l=e.querySelector("div"),t=new Collapse(l);expect(Collapse.getOrCreateInstance(l)).toEqual(t),expect(Collapse.getInstance(l)).toEqual(Collapse.getOrCreateInstance(l,{})),expect(Collapse.getOrCreateInstance(l)).toBeInstanceOf(Collapse)}),it("should return new instance when there is no collapse instance",()=>{e.innerHTML="<div></div>";const l=e.querySelector("div");expect(Collapse.getInstance(l)).toEqual(null),expect(Collapse.getOrCreateInstance(l)).toBeInstanceOf(Collapse)}),it("should return new instance when there is no collapse instance with given configuration",()=>{e.innerHTML="<div></div>";const l=e.querySelector("div");expect(Collapse.getInstance(l)).toEqual(null);const t=Collapse.getOrCreateInstance(l,{toggle:!1});expect(t).toBeInstanceOf(Collapse),expect(t._config.toggle).toEqual(!1)}),it("should return the instance when exists without given configuration",()=>{e.innerHTML="<div></div>";const l=e.querySelector("div"),t=new Collapse(l,{toggle:!1});expect(Collapse.getInstance(l)).toEqual(t);const a=Collapse.getOrCreateInstance(l,{toggle:!0});expect(t).toBeInstanceOf(Collapse),expect(a).toEqual(t),expect(a._config.toggle).toEqual(!1)})})});