(()=>{"use strict";class e{constructor(e,t,n,i,d){this._title=e,this._desc=t,this._date=n,this._priority=i,this._check=d}get title(){return this._title}get desc(){return this._desc}get date(){return this._date}get priority(){return this._priority}get check(){return this._check}set title(e){this._title=e}set desc(e){this._desc=e}set date(e){this._date=e}set priority(e){this._priority=e}set check(e){this._check=e}}class t{constructor(e){this._name=e,this._task=[]}get name(){return this._name}get task(){return this._task}set name(e){this._name=e}set task(e){this._task=e}}const n=(()=>{const n=new t("Project title"),i=new e("Task title","desc","date","priority","done"),d=new e("Task title2","desc2","date2","priority2","nodone");return n.task=[i,d],n})(),i=(()=>{function e(e){localStorage.setItem("myProject",JSON.stringify(e))}return{storageMyProjects:e,removeProject:function(t){t=t;const n=JSON.parse(localStorage.getItem("myProject"));n.splice(t,1),e(n),window.location.reload()}}})(),d=function(e,t){let n=!0;if(""===e._title){const e=document.getElementById(`titlemsj${t}`);e.innerHTML="Author can't be blank",e.style.color="Red",n=!1}else document.getElementById(`titlemsj${t}`).innerHTML="";if(""===e._desc){const e=document.getElementById(`descmsj${t}`);e.innerHTML="Title can't be blank",e.style.color="Red",n=!1}else document.getElementById(`descmsj${t}`).innerHTML="";if(""===e._date){const e=document.getElementById(`datemsj${t}`);e.innerHTML="Create a book with more than 0 pages",e.style.color="Red",n=!1}else document.getElementById(`datemsj${t}`).innerHTML="";return n},c=function(e){let t=!0;if(""===e._name){const e=document.getElementById("projectMsj");e.innerHTML="Author can't be blank",e.style.color="Red",t=!1}else document.getElementById("projectMsj").innerHTML="";return t},r=function(t,n,c){const r=JSON.parse(localStorage.getItem("myProject")),o=r[t]._task,s=document.getElementById("titleInput").value,a=document.getElementById("descriptionInput").value,l=document.getElementById("dateInput").value,u=document.getElementById("priorityInput").value;let m;m=!0===document.getElementById("checkInput").checked;const p=new e(s,a,l,u,m);return!0===d(p,"")?(o.push(p),i.storageMyProjects(r),r):d(p)},o=function(){const e=JSON.parse(localStorage.getItem("myProject")),n=document.getElementById("ptitle").value,d=new t(n);!1!==c(d)?(e.push(d),i.storageMyProjects(e),window.location.reload()):c(d)},s=(()=>{function e(e,t){const n=document.createElement("form"),i=document.createElement("label"),d=document.createElement("input"),c=document.createElement("p"),r=document.createElement("label"),o=document.createElement("input"),s=document.createElement("p"),a=document.createElement("label"),l=document.createElement("input"),u=document.createElement("p"),m=document.createElement("label"),p=document.createElement("select"),h=document.createElement("option"),E=document.createElement("option"),y=document.createElement("option"),b=document.createElement("label"),g=document.createElement("input");i.setAttribute("for","Title"),d.setAttribute("type","text"),d.setAttribute("id",`titleInput${t}`),d.setAttribute("name","title"),r.setAttribute("for","Description"),o.setAttribute("type","text"),o.setAttribute("id",`descriptionInput${t}`),o.setAttribute("name","description"),a.setAttribute("for","Due date"),l.setAttribute("type","date"),l.setAttribute("id",`dateInput${t}`),l.setAttribute("name","date"),m.setAttribute("for","Priority"),p.setAttribute("type","text"),p.setAttribute("id",`priorityInput${t}`),h.setAttribute("value","High"),E.setAttribute("value","Medium"),y.setAttribute("value","Low"),h.innerHTML="High",E.innerHTML="Medium",y.innerHTML="Low",b.setAttribute("for","Check"),g.setAttribute("type","checkbox"),g.setAttribute("id",`checkInput${t}`),g.setAttribute("name","check"),g.setAttribute("value","done"),g.classList.add("check"),c.id=`titlemsj${t}`,s.id=`descmsj${t}`,u.id=`datemsj${t}`,i.innerHTML="<h4>Title</h4>",r.innerHTML="<h4>Description</h4>",a.innerHTML="<h4>Due Date</h4>",m.innerHTML="<h4>Priority</h4>",b.innerHTML="<h4>Complete</h4>";const k=document.createElement("div");return k.classList.add("check-section"),n.appendChild(i),n.appendChild(d),n.appendChild(c),n.appendChild(r),n.appendChild(o),n.appendChild(s),n.appendChild(a),n.appendChild(l),n.appendChild(u),n.appendChild(m),n.appendChild(p),b.appendChild(g),k.appendChild(b),k.appendChild(g),n.appendChild(k),p.appendChild(h),p.appendChild(E),p.appendChild(y),n}function t(e,t,n){for(let i=0;i<e[t]._task.length;i+=1){const d=document.createElement("div");d.classList.add("card");const c=document.createElement("div");c.classList.add("card-title");const r=document.createElement("div"),o=document.createElement("div"),s=document.createElement("div"),a=document.createElement("div"),l=document.createElement("div"),u=document.createElement("div");let m,p;c.innerHTML=e[t]._task[i]._title,r.innerHTML=e[t]._task[i]._desc,o.innerHTML=e[t]._task[i]._date,s.innerHTML=e[t]._task[i]._priority,!0===e[t]._task[i]._check?(m="checked",p="Done"):(m="",p="Undone"),a.innerHTML=`<button class="taskStatus" type='submit' id=myCheck${i} ${m}>${p}</button>`,l.innerHTML=`<button class="taskDelete" type='submit' id=delete${i} ${m}>Remove</button>`,u.innerHTML=`<button class="taskEdit" type='submit' id=edit${i} ${m}>"."</button>`,d.appendChild(c),d.appendChild(r),d.appendChild(o),d.appendChild(s),d.appendChild(a),d.appendChild(l),d.appendChild(u),n.appendChild(d)}return n.outerHTML}function c(e,t,n,d){const c=t.id.slice(7);d[e]._task[c]._check=n,i.storageMyProjects(d)}return{showProjects:function(e){const t=JSON.parse(localStorage.getItem("myProject"));null===t&&i.storageMyProjects([n]);for(let n=0;n<t.length;n+=1){const d=document.createElement("button");d.classList.add("remove"),d.id=n;const c=document.createElement("button");c.setAttribute("id",n);const r=document.createElement("div");c.innerHTML=t[n]._name,e.appendChild(r),r.appendChild(d),r.appendChild(c),d.addEventListener("click",(()=>{i.removeProject(this.id)})),d.innerHTML="Remove"}},showTask:function n(o){const s=document.getElementById("task"),a=document.createElement("div");a.id="editForm";const l=document.createElement("div");l.id="taskList";let u=JSON.parse(localStorage.getItem("myProject"));const m=document.createElement("button"),p=e(0,"");s.innerHTML="<h2>Task</h2>",m.innerHTML="Add task",m.setAttribute("type","submit"),m.classList.add("submit");const h=t(u,o,l);p.appendChild(m),l.innerHTML=h,m.addEventListener("click",(e=>{e.preventDefault(),u=r(o),!1!==u&&(l.innerHTML="",l.innerHTML=t(u,o,l),n(o))})),s.appendChild(a),s.appendChild(l),s.appendChild(p),function(e,t){Array.from(document.getElementsByClassName("taskStatus")).forEach((n=>n.addEventListener("click",(n=>{const{target:i}=n;if("Done"===i.innerHTML)i.innerHTML="Undone",i.style.backgroundColor="#337ab7",c(e,i,!1,t);else{const n=!0;i.innerHTML="Done",i.style.backgroundColor="#4cae4c",c(e,i,n,t)}}))))}(o,u),function(e,t){Array.from(document.getElementsByClassName("taskDelete")).forEach((d=>d.addEventListener("click",(d=>{const{target:c}=d,r=c.id.slice(6);t[e]._task.splice(r,1),i.storageMyProjects(t),document.getElementById("taskList"),n(e)}))))}(o,u),function(t,c){Array.from(document.getElementsByClassName("taskEdit")).forEach((r=>r.addEventListener("click",(r=>{const{target:o}=r,s=document.getElementById("editForm"),a=document.createElement("button");a.id="updateEditBtn",a.innerHTML="Update",o.id.slice(6),s.innerHTML="",s.appendChild(e(0,"Edit")),s.appendChild(a);const l=r.target.id.slice(4),u=document.getElementById("titleInputEdit"),m=document.getElementById("descriptionInputEdit"),p=document.getElementById("dateInputEdit"),h=document.getElementById("priorityInputEdit"),E=c[t]._task[l];u.value=E._title,m.value=E._desc,p.value=E._date,h.value=E._priority,a.addEventListener("click",(()=>(E._title=u.value,E._desc=m.value,E._date=p.value,E._priority=h.value,!0===d(E,"Edit")?(i.storageMyProjects(c),n(t),c):d(E,"Edit"))))}))))}(o,u)},currentTaskList:t,projects:function(){const e=document.getElementById("project"),t=document.createElement("button");t.classList.add("addButton"),e.innerHTML="<h2>Projects</h2>",t.innerHTML="+";const n=document.createElement("form"),i=document.createElement("label"),d=document.createElement("input"),c=document.createElement("p");return i.innerHTML="<b>Add project</b>",i.setAttribute("for","ptitle"),d.setAttribute("type","text"),d.setAttribute("id","ptitle"),d.setAttribute("name","ptitle"),c.id="projectMsj",t.addEventListener("click",(()=>{o()})),n.appendChild(i),n.appendChild(d),e.appendChild(t),e.appendChild(n),e.appendChild(c),e}}})();!function(){const e=document.getElementById("project"),t=document.createElement("div");t.addEventListener("click",(e=>{const t=e.target.id;s.showTask(t)})),s.projects(),s.showProjects(t),e.appendChild(t)}()})();