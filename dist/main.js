(()=>{"use strict";class e{constructor(e,t,n,i,r){this._title=e,this._desc=t,this._date=n,this._priority=i,this._check=r}get title(){return this._title}get desc(){return this._desc}get date(){return this._date}get priority(){return this._priority}get check(){return this._check}set title(e){this._title=e}set desc(e){this._desc=e}set date(e){this._date=e}set priority(e){this._priority=e}set check(e){this._check=e}}class t{constructor(e){this._name=e,this._task=[]}get name(){return this._name}get task(){return this._task}set name(e){this._name=e}set task(e){this._task=e}}const n=(()=>{const n=new t("Project title"),i=new e("Task title","desc","date","priority","done"),r=new e("Task title2","desc2","date2","priority2","nodone");return n.task=[i,r],n})(),i=(()=>{function e(e){localStorage.setItem("myProject",JSON.stringify(e))}return{storageMyProjects:e,removeProject:function(t){t=t;const n=JSON.parse(localStorage.getItem("myProject"));n.splice(t,1),e(n),window.location.reload()}}})(),r=function(t,n,r){let d=JSON.parse(localStorage.getItem("myProject")),c=d[t]._task;const o=document.getElementById("titleInput").value,a=document.getElementById("descriptionInput").value,s=document.getElementById("dateInput").value,l=document.getElementById("priorityInput").value;let u;u=!0===document.getElementById("checkInput").checked;const m=new e(o,a,s,l,u);return c.push(m),i.storageMyProjects(d),d},d=function(){let e=JSON.parse(localStorage.getItem("myProject"));const n=document.getElementById("ptitle").value,r=new t(n);e.push(r),i.storageMyProjects(e),window.location.reload()},c=(()=>{function e(e,t,n){for(let i=0;i<e[t]._task.length;i+=1){const r=document.createElement("div");r.classList.add("card");const d=document.createElement("div");d.classList.add("card-title");const c=document.createElement("div"),o=document.createElement("div"),a=document.createElement("div"),s=document.createElement("div"),l=document.createElement("div");let u,m;d.innerHTML=e[t]._task[i]._title,c.innerHTML=e[t]._task[i]._desc,o.innerHTML=e[t]._task[i]._date,a.innerHTML=e[t]._task[i]._priority,!0===e[t]._task[i]._check?(u="checked",m="Done"):(u="",m="Undone"),s.innerHTML=`<button class="taskStatus" type='submit' id=myCheck${i} ${u}>${m}</button>`,l.innerHTML=`<button class="taskDelete" type='submit' id=delete${i} ${u}>Remove</button>`,r.appendChild(d),r.appendChild(c),r.appendChild(o),r.appendChild(a),r.appendChild(s),r.appendChild(l),n.appendChild(r)}return n.outerHTML}function t(e,t,n,r){console.log(e);let d=t.id.slice(7);r[e]._task[d]._check=n,i.storageMyProjects(r)}return{showProjects:function(e){let t=JSON.parse(localStorage.getItem("myProject"));null===t&&i.storageMyProjects([n]);for(let n=0;n<t.length;n+=1){const r=document.createElement("button");r.classList.add("remove"),r.id=n;let d=document.createElement("button");d.setAttribute("id",n);let c=document.createElement("div");d.innerHTML=t[n]._name,e.appendChild(c),c.appendChild(r),c.appendChild(d),r.addEventListener("click",(()=>{i.removeProject(this.id)})),r.innerHTML="Remove"}},showTask:function(n){const i=document.getElementById("task"),d=document.createElement("div");d.id="taskList";let c=JSON.parse(localStorage.getItem("myProject"));const o=document.createElement("form"),a=document.createElement("label"),s=document.createElement("input"),l=document.createElement("label"),u=document.createElement("input"),m=document.createElement("label"),p=document.createElement("input"),h=document.createElement("label"),E=document.createElement("select"),y=document.createElement("option"),b=document.createElement("option"),k=document.createElement("option"),g=document.createElement("label"),L=document.createElement("input"),C=document.createElement("button");a.setAttribute("for","Title"),s.setAttribute("type","text"),s.setAttribute("id","titleInput"),s.setAttribute("name","title"),l.setAttribute("for","Description"),u.setAttribute("type","text"),u.setAttribute("id","descriptionInput"),u.setAttribute("name","description"),m.setAttribute("for","Due date"),p.setAttribute("type","date"),p.setAttribute("id","dateInput"),p.setAttribute("name","date"),h.setAttribute("for","Priority"),E.setAttribute("type","text"),E.setAttribute("id","priorityInput"),y.setAttribute("value","High"),b.setAttribute("value","Medium"),k.setAttribute("value","Low"),y.innerHTML="High",b.innerHTML="Medium",k.innerHTML="Low",g.setAttribute("for","Check"),L.setAttribute("type","checkbox"),L.setAttribute("id","checkInput"),L.setAttribute("name","check"),L.setAttribute("value","done"),L.classList.add("check"),i.innerHTML="<h2>Task</h2>",C.innerHTML="Add task",a.innerHTML="<h4>Title</h4>",l.innerHTML="<h4>Description</h4>",m.innerHTML="<h4>Due Date</h4>",h.innerHTML="<h4>Priority</h4>",g.innerHTML="<h4>Complete</h4>",C.setAttribute("type","submit"),C.classList.add("submit");let v=document.createElement("div");v.classList.add("check-section");let T=e(c,n,d);o.appendChild(a),o.appendChild(s),o.appendChild(l),o.appendChild(u),o.appendChild(m),o.appendChild(p),o.appendChild(h),o.appendChild(E),g.appendChild(L),v.appendChild(g),v.appendChild(L),o.appendChild(v),o.appendChild(C),E.appendChild(y),E.appendChild(b),E.appendChild(k),d.innerHTML=T,C.addEventListener("click",(t=>{t.preventDefault(),c=r(n),d.innerHTML="",document.getElementById("titleInput").value="",document.getElementById("descriptionInput").value="",document.getElementById("dateInput").value="",document.getElementById("priorityInput").value="",document.getElementById("checkInput").value="",d.innerHTML=e(c,n,d)})),i.appendChild(d),i.appendChild(o),function(e,n){Array.from(document.getElementsByClassName("taskStatus")).forEach((i=>i.addEventListener("click",(i=>{let r=i.target;if("Done"===r.innerHTML)r.innerHTML="Undone",r.style.backgroundColor="#337ab7",t(e,r,!1,n);else{console.log(r);const i=!0;r.innerHTML="Done",r.style.backgroundColor="#4cae4c",t(e,r,i,n)}}))))}(n,c),Array.from(document.getElementsByClassName("taskDelete")).forEach((e=>e.addEventListener("click",(e=>{let t=e.target;console.log(t.parentNode.parentNode.remove())}))))},currentTaskList:e,projects:function(){const e=document.getElementById("project"),t=document.createElement("button");t.classList.add("addButton"),e.innerHTML="<h2>Projects</h2>",t.innerHTML="+";const n=document.createElement("form"),i=document.createElement("label"),r=document.createElement("input");return i.innerHTML="<b>Add project</b>",i.setAttribute("for","ptitle"),r.setAttribute("type","text"),r.setAttribute("id","ptitle"),r.setAttribute("name","ptitle"),t.addEventListener("click",(()=>{d()})),n.appendChild(i),n.appendChild(r),e.appendChild(t),e.appendChild(n),e}}})();!function(){const e=document.getElementById("project"),t=document.createElement("div");t.addEventListener("click",(e=>{let t=e.target.id;c.showTask(t)})),c.projects(),c.showProjects(t),e.appendChild(t)}()})();