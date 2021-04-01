(()=>{"use strict";class e{constructor(e,t,n,i,c){this._title=e,this._desc=t,this._date=n,this._priority=i,this._check=c}get title(){return this._title}get desc(){return this._desc}get date(){return this._date}get priority(){return this._priority}get check(){return this._check}set title(e){this._title=e}set desc(e){this._desc=e}set date(e){this._date=e}set priority(e){this._priority=e}set check(e){this._check=e}}class t{constructor(e){this._name=e,this._task=[]}get name(){return this._name}get task(){return this._task}set name(e){this._name=e}set task(e){this._task=e}}const n=(()=>{const n=new t("Project title"),i=new e("Task title","desc","date","priority","done"),c=new e("Task title2","desc2","date2","priority2","nodone");return n.task=[i,c],n})(),i=(()=>{function e(e){localStorage.setItem("myProject",JSON.stringify(e))}return{storageMyProjects:e,removeProject:function(t){t=t;const n=JSON.parse(localStorage.getItem("myProject"));n.splice(t,1),e(n),window.location.reload()}}})(),c=function(t,n,c){let d=JSON.parse(localStorage.getItem("myProject")),r=d[t]._task;const o=document.getElementById("titleInput").value,s=document.getElementById("descriptionInput").value,a=document.getElementById("dateInput").value,l=document.getElementById("priorityInput").value;let u;u=!0===document.getElementById("checkInput").checked;const m=new e(o,s,a,l,u);return r.push(m),i.storageMyProjects(d),d},d=function(){let e=JSON.parse(localStorage.getItem("myProject"));const n=document.getElementById("ptitle").value,c=new t(n);e.push(c),i.storageMyProjects(e),window.location.reload()},r=(()=>{function e(e){const t=document.createElement("form"),n=document.createElement("label"),i=document.createElement("input"),c=document.createElement("label"),d=document.createElement("input"),r=document.createElement("label"),o=document.createElement("input"),s=document.createElement("label"),a=document.createElement("select"),l=document.createElement("option"),u=document.createElement("option"),m=document.createElement("option"),p=document.createElement("label"),h=document.createElement("input");n.setAttribute("for","Title"),i.setAttribute("type","text"),i.setAttribute("id","titleInput"),i.setAttribute("name","title"),c.setAttribute("for","Description"),d.setAttribute("type","text"),d.setAttribute("id","descriptionInput"),d.setAttribute("name","description"),r.setAttribute("for","Due date"),o.setAttribute("type","date"),o.setAttribute("id","dateInput"),o.setAttribute("name","date"),s.setAttribute("for","Priority"),a.setAttribute("type","text"),a.setAttribute("id","priorityInput"),l.setAttribute("value","High"),u.setAttribute("value","Medium"),m.setAttribute("value","Low"),l.innerHTML="High",u.innerHTML="Medium",m.innerHTML="Low",p.setAttribute("for","Check"),h.setAttribute("type","checkbox"),h.setAttribute("id","checkInput"),h.setAttribute("name","check"),h.setAttribute("value","done"),h.classList.add("check"),n.innerHTML="<h4>Title</h4>",c.innerHTML="<h4>Description</h4>",r.innerHTML="<h4>Due Date</h4>",s.innerHTML="<h4>Priority</h4>",p.innerHTML="<h4>Complete</h4>";let E=document.createElement("div");return E.classList.add("check-section"),t.appendChild(n),t.appendChild(i),t.appendChild(c),t.appendChild(d),t.appendChild(r),t.appendChild(o),t.appendChild(s),t.appendChild(a),p.appendChild(h),E.appendChild(p),E.appendChild(h),t.appendChild(E),a.appendChild(l),a.appendChild(u),a.appendChild(m),t}function t(e,t,n){for(let i=0;i<e[t]._task.length;i+=1){const c=document.createElement("div");c.classList.add("card");const d=document.createElement("div");d.classList.add("card-title");const r=document.createElement("div"),o=document.createElement("div"),s=document.createElement("div"),a=document.createElement("div"),l=document.createElement("div"),u=document.createElement("div");let m,p;d.innerHTML=e[t]._task[i]._title,r.innerHTML=e[t]._task[i]._desc,o.innerHTML=e[t]._task[i]._date,s.innerHTML=e[t]._task[i]._priority,!0===e[t]._task[i]._check?(m="checked",p="Done"):(m="",p="Undone"),a.innerHTML=`<button class="taskStatus" type='submit' id=myCheck${i} ${m}>${p}</button>`,l.innerHTML=`<button class="taskDelete" type='submit' id=delete${i} ${m}>Remove</button>`,u.innerHTML=`<button class="taskEdit" type='submit' id=edit${i} ${m}>"."</button>`,c.appendChild(d),c.appendChild(r),c.appendChild(o),c.appendChild(s),c.appendChild(a),c.appendChild(l),c.appendChild(u),n.appendChild(c)}return n.outerHTML}function r(e,t,n,c){console.log(e);let d=t.id.slice(7);c[e]._task[d]._check=n,i.storageMyProjects(c)}return{showProjects:function(e){let t=JSON.parse(localStorage.getItem("myProject"));null===t&&i.storageMyProjects([n]);for(let n=0;n<t.length;n+=1){const c=document.createElement("button");c.classList.add("remove"),c.id=n;let d=document.createElement("button");d.setAttribute("id",n);let r=document.createElement("div");d.innerHTML=t[n]._name,e.appendChild(r),r.appendChild(c),r.appendChild(d),c.addEventListener("click",(()=>{i.removeProject(this.id)})),c.innerHTML="Remove"}},showTask:function n(d){const o=document.getElementById("task"),s=document.createElement("div");s.id="taskList";let a=JSON.parse(localStorage.getItem("myProject"));const l=document.createElement("button");let u=e();o.innerHTML="<h2>Task</h2>",l.innerHTML="Add task",l.setAttribute("type","submit"),l.classList.add("submit");let m=t(a,d,s);u.appendChild(l),s.innerHTML=m,l.addEventListener("click",(e=>{e.preventDefault(),a=c(d),s.innerHTML="",document.getElementById("titleInput").value="",document.getElementById("descriptionInput").value="",document.getElementById("dateInput").value="",document.getElementById("priorityInput").value="",document.getElementById("checkInput").value="",s.innerHTML=t(a,d,s)})),o.appendChild(s),o.appendChild(u),function(e,t){let n=Array.from(document.getElementsByClassName("taskStatus"));console.log(n),console.log(e),n.forEach((n=>n.addEventListener("click",(n=>{let i=n.target;if("Done"===i.innerHTML)i.innerHTML="Undone",i.style.backgroundColor="#337ab7",r(e,i,!1,t);else{console.log(i);const n=!0;i.innerHTML="Done",i.style.backgroundColor="#4cae4c",r(e,i,n,t)}}))))}(d,a),function(e,t){let c=Array.from(document.getElementsByClassName("taskDelete"));console.log(c),c.forEach((c=>c.addEventListener("click",(c=>{let d=c.target.id.slice(6);t[e]._task.splice(d,1),i.storageMyProjects(t);let r=document.getElementById("taskList");console.log(r),n(e)}))))}(d,a),Array.from(document.getElementsByClassName("taskEdit")).forEach((t=>t.addEventListener("click",(t=>{let n=t.target,i=document.createElement("button");n.id.slice(6),n.innerHTML="",n.appendChild(e()),n.appendChild(i)}))))},currentTaskList:t,projects:function(){const e=document.getElementById("project"),t=document.createElement("button");t.classList.add("addButton"),e.innerHTML="<h2>Projects</h2>",t.innerHTML="+";const n=document.createElement("form"),i=document.createElement("label"),c=document.createElement("input");return i.innerHTML="<b>Add project</b>",i.setAttribute("for","ptitle"),c.setAttribute("type","text"),c.setAttribute("id","ptitle"),c.setAttribute("name","ptitle"),t.addEventListener("click",(()=>{d()})),n.appendChild(i),n.appendChild(c),e.appendChild(t),e.appendChild(n),e}}})();!function(){const e=document.getElementById("project"),t=document.createElement("div");t.addEventListener("click",(e=>{let t=e.target.id;r.showTask(t)})),r.projects(),r.showProjects(t),e.appendChild(t)}()})();