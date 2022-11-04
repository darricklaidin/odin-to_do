(()=>{"use strict";var e={d:(t,a)=>{for(var d in a)e.o(a,d)&&!e.o(t,d)&&Object.defineProperty(t,d,{enumerable:!0,get:a[d]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{iQ:()=>a,p1:()=>o,my:()=>r,Rw:()=>v,KQ:()=>C,QW:()=>g,TF:()=>d,sM:()=>u,xZ:()=>p,BN:()=>c,z4:()=>s,F6:()=>i,pG:()=>n,f:()=>l});class t{constructor(e,t){this.name=e,this.color=t}}class a{constructor(e,t,a,d,n="Inbox"){this.id=e,this.name=t,this.description=a,this.dueDateString=d,this.groupName=n}}let d=[],n=[],o="Inbox";function l(){let e=document.querySelector("#down-arrow-button"),t=document.querySelector(".groups");e.classList.contains("collapsed")?(e.classList.remove("collapsed"),t.classList.remove("collapsed")):(e.classList.add("collapsed"),t.classList.add("collapsed"))}function r(){let e=document.querySelector("#down-arrow-button"),a=document.querySelector(".groups"),n=new t("Untitled","#000000");d.push(n),m(n),e.classList.remove("collapsed"),a.classList.remove("collapsed"),a.lastChild.firstChild.focus()}function c(e){n.forEach((t=>{t.groupName===d[e].name&&(t.groupName="Inbox")}));let t=document.querySelector(".groups");t.removeChild(t.children[e+1]),d.splice(e,1)}function s(){let e=document.querySelector("main");null!=e&&e.remove()}function i(e){let t=e.target.parentElement.dataset.id;n.forEach((e=>{if(String(e.id)===String(t)){let t=n.indexOf(e);n.splice(t,1)}})),e.target.parentElement.remove()}function u(){document.querySelector("nav").style.pointerEvents="none"}function p(){document.querySelector("nav").style.pointerEvents="auto"}function m(e){let t=document.querySelector(".groups"),a=document.createElement("div");a.classList.add("group-item"),a.classList.add("custom"),t.appendChild(a);let d=document.createElement("input");d.classList.add("custom-group-name"),d.type="text",d.value=e.name,d.maxLength="8",d.spellcheck=!1,d.autocomplete="off",a.appendChild(d);let n=document.createElement("input");n.type="color",n.classList.add("color-tag"),n.value=e.color,a.appendChild(n);let o=document.createElement("img");o.src="assets/trash.svg",o.alt="trash icon",a.appendChild(o)}function g(e){let t=document.querySelector("body"),a=document.createElement("main");t.appendChild(a);let o=document.createElement("div");o.classList.add("heading"),a.appendChild(o);let l=document.createElement("h2");l.id="current-group-name",l.textContent=e,o.appendChild(l);let r=document.createElement("img");r.id="add-task-button",r.src="assets/plus.svg",r.alt="add task button",o.appendChild(r);let c=document.createElement("div");c.classList.add("task-section"),a.appendChild(c),function(e){let t=document.querySelector(".task-section"),a=new Map;n.forEach((t=>{if("Inbox"!==e&&t.groupName!==e)return;let d=t.dueDateString,n=new Date(d);n.setHours(0,0,0,0);let o=new Date;o.setHours(0,0,0,0),n<o&&(d="Overdue"),a.has(d)?a.get(d).push(t):a.set(d,[t])}));let o=new Map,l=Array.from(a.keys());l.sort(((e,t)=>"Overdue"===e?-1:"Overdue"===t?1:new Date(e)-new Date(t))),l.forEach((e=>{o.set(e,a.get(e))}));let r=0;o.forEach(((e,a)=>{let n="Overdue";if("Overdue"!==a){let e=new Date(a);n=e.toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"}),new Date(Date.now()).getDate()===e.getDate()&&(n="Today - "+n)}let o=document.createElement("div");o.classList.add("task-content"),t.appendChild(o);let l=document.createElement("h3");l.classList.add("date-header"),l.textContent=n,o.appendChild(l),function(e,t){let a=document.querySelectorAll(".task-content")[e],n=document.createElement("div");n.classList.add("tasks"),a.appendChild(n),t.forEach((e=>{let t=document.createElement("div");t.classList.add("task"),t.dataset.id=e.id,n.appendChild(t);let a=document.createElement("input");a.type="checkbox",t.appendChild(a);let o=document.createElement("p");if(o.textContent=e.name,t.appendChild(o),"Inbox"!==e.groupName){let a=document.createElement("div");a.classList.add("group-tag"),d.forEach((t=>{t.name!==e.groupName||(a.style.backgroundColor=t.color)})),t.appendChild(a);let n=document.createElement("p");n.textContent=e.groupName,a.appendChild(n)}}))}(r,e),r++}))}(e)}function h(){let e=document.querySelector(".task-group-dropdown"),a=d.slice();a.push(new t("Inbox","#00B4D8")),a.forEach((t=>{let a=document.createElement("button");a.type="button",a.textContent=t.name,a.style.backgroundColor=t.color,e.appendChild(a)}))}function C(e){let t=document.querySelector("main"),a=document.createElement("div");a.classList.add("edit-task-modal"),a.dataset.id=e.id,t.appendChild(a);let n=document.createElement("form");a.appendChild(n);let o=document.createElement("div");o.classList.add("edit-task-modal-content"),n.appendChild(o);let l=document.createElement("div");l.classList.add("task-name"),o.appendChild(l);let r=document.createElement("input");r.type="text",r.id="task-name",r.placeholder="Name",r.minLength="1",r.maxLength="50",r.autocomplete="off",r.required=!0,r.value=e.name,l.appendChild(r);let c=document.createElement("div");c.classList.add("task-description"),o.appendChild(c);let s=document.createElement("textarea");s.id="task-description",s.placeholder="Description",s.textContent=e.description,c.appendChild(s);let i=document.createElement("div");i.classList.add("task-options"),o.appendChild(i);let u=document.createElement("div");u.classList.add("task-date"),i.appendChild(u);let p=document.createElement("input");p.type="date",p.id="task-date",p.value=e.dueDateString,p.required=!0,u.appendChild(p);let m=document.createElement("div");m.classList.add("task-group-dropdown-wrapper"),i.appendChild(m);let g=document.createElement("button");g.type="button",g.textContent=e.groupName,g.style.backgroundColor="#00B4D8",d.forEach((t=>{t.name===e.groupName&&(g.style.backgroundColor=t.color)})),m.appendChild(g);let C=document.createElement("div");C.classList.add("task-group-dropdown"),m.appendChild(C),h();let v=document.createElement("div");v.classList.add("edit-task-modal-buttons"),n.appendChild(v);let y=document.createElement("button");y.classList.add("cancel-button"),y.type="button",y.textContent="Cancel",v.appendChild(y);let E=document.createElement("button");E.classList.add("confirm-button"),E.type="submit",E.textContent="Confirm",v.appendChild(E)}function v(){let e=document.querySelector("main"),t=document.createElement("div");t.classList.add("add-task-modal"),e.appendChild(t);let a=document.createElement("form");t.appendChild(a);let d=document.createElement("div");d.classList.add("add-task-modal-content"),a.appendChild(d);let n=document.createElement("div");n.classList.add("task-name"),d.appendChild(n);let o=document.createElement("input");o.type="text",o.id="task-name",o.placeholder="Name",o.minLength="1",o.maxLength="50",o.autocomplete="off",o.required=!0,n.appendChild(o);let l=document.createElement("div");l.classList.add("task-description"),d.appendChild(l);let r=document.createElement("textarea");r.id="task-description",r.placeholder="Description",l.appendChild(r);let c=document.createElement("div");c.classList.add("task-options"),d.appendChild(c);let s=document.createElement("div");s.classList.add("task-date"),c.appendChild(s);let i=document.createElement("input");i.type="date",i.id="task-date",i.required=!0,s.appendChild(i);let u=document.createElement("div");u.classList.add("task-group-dropdown-wrapper"),c.appendChild(u);let p=document.createElement("button");p.type="button",p.textContent="Inbox",p.style.backgroundColor="#00B4D8",u.appendChild(p);let m=document.createElement("div");m.classList.add("task-group-dropdown"),u.appendChild(m),h();let g=document.createElement("div");g.classList.add("add-task-modal-buttons"),a.appendChild(g);let C=document.createElement("button");C.classList.add("cancel-button"),C.type="button",C.textContent="Cancel",g.appendChild(C);let v=document.createElement("button");v.classList.add("confirm-button"),v.type="submit",v.textContent="Confirm",g.appendChild(v)}!function(){let e=document.querySelector("body"),t=document.createElement("nav");e.appendChild(t);let a=document.createElement("h1");a.textContent="To Do",t.appendChild(a);let n=document.createElement("div");n.classList.add("groups-wrapper"),t.appendChild(n);let o=document.createElement("div");o.classList.add("groups-heading"),n.appendChild(o);let l=document.createElement("p");l.textContent="Groups",o.appendChild(l);let r=document.createElement("div");r.classList.add("groups-heading-buttons"),o.appendChild(r);let c=document.createElement("img");c.src="assets/down-arrow.svg",c.alt="down arrow",c.id="down-arrow-button",r.appendChild(c);let s=document.createElement("img");s.src="assets/plus.svg",s.alt="plus",s.id="plus-button",r.appendChild(s);let i=document.createElement("div");i.classList.add("groups"),n.appendChild(i);let u=document.createElement("div");u.classList.add("group-item"),u.id="inbox",i.appendChild(u);let p=document.createElement("p");p.textContent="Inbox",u.appendChild(p),d.forEach((e=>{m(e)}))}(),document.querySelector("#inbox").classList.add("active"),g(o),function(){let e=document.querySelector(".groups-wrapper"),t="";e.addEventListener("click",(e=>{if("down-arrow-button"===e.target.id&&l(),"plus-button"===e.target.id&&r(),"IMG"===e.target.tagName&&e.target.closest(".group-item")){let t=document.querySelector(".groups"),a=Array.from(t.children).slice(1).indexOf(e.target.parentElement);e.target.parentElement.children[0].value===o&&(document.querySelector("#inbox").classList.add("active"),o="Inbox"),c(a),s(),g(o)}e.target.classList.contains("group-item")&&(Array.from(e.target.parentElement.children).forEach((e=>{e.classList.remove("active")})),e.target.classList.add("active"),o=null==e.target.children[0].value?"Inbox":e.target.children[0].value,s(),g(o))})),e.addEventListener("change",(e=>{if(e.target.classList.contains("color-tag")){let t=e.target.parentElement,a=document.querySelector(".groups"),n=Array.from(a.children).indexOf(t)-1;d[n].color=e.target.value,s(),g(o)}}),!0),e.addEventListener("focus",(e=>{e.target.classList.contains("custom-group-name")&&(t=e.target.value)}),!0),e.addEventListener("blur",(e=>{if(e.target.classList.contains("custom-group-name")){let a=e.target.value;if(a===t)return;if(""===a)return void(e.target.value=t);for(let n=0;n<d.length;n++)if(d[n].name===a)return void(e.target.value=t);let l=e.target.parentElement,r=document.querySelector(".groups"),c=Array.from(r.children).indexOf(l)-1;d[c].name=a,n.forEach((e=>{e.groupName===t&&(e.groupName=a)})),s();let i=document.querySelector(".group-item.active");o=null==i.children[0].value?"Inbox":i.children[0].value,g(o)}}),!0);let m=document.documentElement;m.addEventListener("click",(e=>{if(!e.target.closest("nav")){if("checkbox"===e.target.type&&i(e),"checkbox"!==e.target.type&&e.target.closest(".task")){let t=e.target.closest(".task").dataset.id-1;C(n[t]),document.querySelector(".edit-task-modal").style.display="flex",u()}if("add-task-button"===e.target.id&&(v(),document.querySelector(".add-task-modal").style.display="flex",u()),e.target.classList.contains("cancel-button"))p(),e.target.closest(".edit-task-modal")?e.target.closest(".edit-task-modal").remove():e.target.closest(".add-task-modal")&&e.target.closest(".add-task-modal").remove();else if(null!=e.target.closest(".task-group-dropdown")||null==e.target.closest(".edit-task-modal")&&!e.target.closest(".add-task-modal")||"flex"!==document.querySelector(".task-group-dropdown").style.display){if(e.target==document.querySelector(".task-group-dropdown-wrapper > button"))document.querySelector(".task-group-dropdown").style.display="flex";else if(e.target.closest(".task-group-dropdown")&&"BUTTON"===e.target.tagName){let t=document.querySelector(".task-group-dropdown-wrapper");t.children[0].textContent=e.target.textContent,t.children[0].style.backgroundColor=e.target.style.backgroundColor,document.querySelector(".task-group-dropdown").style.display="none"}}else document.querySelector(".task-group-dropdown").style.display="none"}})),m.addEventListener("submit",(e=>{if(e.preventDefault(),e.target.lastChild.lastChild.classList.contains("confirm-button"))if(e.target.closest(".edit-task-modal")){let e=document.querySelector(".edit-task-modal"),t=e.dataset.id-1;n[t].name=document.querySelector(".edit-task-modal #task-name").value,n[t].description=document.querySelector(".edit-task-modal #task-description").value,n[t].groupName=document.querySelector(".task-group-dropdown-wrapper > button").textContent,n[t].dueDateString=document.querySelector(".edit-task-modal #task-date").value,s(),g(o),e.remove(),p()}else if(e.target.closest(".add-task-modal")){let e=document.querySelector(".add-task-modal"),t=new a;t.id=n.length+1,t.name=document.querySelector(".add-task-modal #task-name").value,t.description=document.querySelector(".add-task-modal #task-description").value,t.groupName=document.querySelector(".task-group-dropdown-wrapper > button").textContent,t.dueDateString=document.querySelector(".add-task-modal #task-date").value,n.push(t),s(),g(o),e.remove(),p()}}))}()})();