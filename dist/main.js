(()=>{"use strict";class e{constructor(e,t,n,i,d){this._title=e,this._desc=t,this._date=n,this._priority=i,this._check=d}get title(){return this._title}get desc(){return this._desc}get date(){return this._date}get priority(){return this._priority}get check(){return this._check}set title(e){this._title=e}set desc(e){this._desc=e}set date(e){this._date=e}set priority(e){this._priority=e}set check(e){this._check=e}}class t{constructor(e){this._name=e,this._task=[]}get name(){return this._name}get task(){return this._task}set name(e){this._name=e}set task(e){this._task=e}}const n=(()=>{const n=new t("Project title"),i=new e("Task title","desc","date","priority","done"),d=new e("Task title2","desc2","date2","priority2","nodone");return n.task=[i,d],n})(),i=function(e){localStorage.setItem("myProject",JSON.stringify(e))},d=function(t,n,d){let c=JSON.parse(localStorage.getItem("myProject")),r=c[t]._task;const l=document.getElementById("titleInput").value,o=document.getElementById("descriptionInput").value,a=document.getElementById("dateInput").value,s=document.getElementById("priorityInput").value,u=document.getElementById("checkInput");let p;console.log(u.checked),p=!0===u.checked?"done":"un-done";const m=new e(l,o,a,s,p);return r.push(m),i(c),c},c=function(){let e=JSON.parse(localStorage.getItem("myProject"));const n=document.getElementById("ptitle").value,d=new t(n);e.push(d),i(e),window.location.reload()},r=(()=>{function e(e,t,n){for(let i=0;i<e[t]._task.length;i+=1){const d=document.createElement("div");d.classList.add("card");const c=document.createElement("div"),r=document.createElement("div"),l=document.createElement("div"),o=document.createElement("div"),a=document.createElement("div");let s,u;c.innerHTML=e[t]._task[i]._title,r.innerHTML=e[t]._task[i]._desc,l.innerHTML=e[t]._task[i]._date,o.innerHTML=e[t]._task[i]._priority,!0===e[t]._task[i]._check?(s="checked",u="Done"):(s="",u="Undone"),a.innerHTML=`<input type='checkbox' id=myCheck${i} ${s}></input>`+u,d.appendChild(c),d.appendChild(r),d.appendChild(l),d.appendChild(o),d.appendChild(a),n.appendChild(d)}return n.outerHTML}function t(e){console.log(e);let t=document.querySelectorAll("input[type='checkbox']");for(let n=0;n<t.length;n+=1)t[n].addEventListener("click",(t=>{r(t,e)}))}function r(t,n){let d=JSON.parse(localStorage.getItem("myProject")),c=document.getElementById("taskList"),r=document.getElementById(t.target.id),l=parseInt(t.target.id.slice(7),10);d[n]._task[l]._check=r.checked,i(d),console.log(c),c.innerHTML="",c.innerHTML=e(d,n,c)}return{showProjects:function(e){let t=JSON.parse(localStorage.getItem("myProject"));null===t&&i([n]);for(let n=0;n<t.length;n+=1){let i=document.createElement("button");i.setAttribute("id",n);let d=document.createElement("div");i.innerHTML=t[n]._name,e.appendChild(i),e.appendChild(d)}},showTask:function(n){const i=document.getElementById("task"),c=document.createElement("div");c.id="taskList";let r=JSON.parse(localStorage.getItem("myProject"));const l=document.createElement("form"),o=document.createElement("label"),a=document.createElement("input"),s=document.createElement("label"),u=document.createElement("input"),p=document.createElement("label"),m=document.createElement("input"),h=document.createElement("label"),E=document.createElement("select"),k=document.createElement("option"),g=document.createElement("option"),y=document.createElement("option"),b=document.createElement("label"),I=document.createElement("input"),L=document.createElement("button");o.setAttribute("for","Title"),a.setAttribute("type","text"),a.setAttribute("id","titleInput"),a.setAttribute("name","title"),s.setAttribute("for","Description"),u.setAttribute("type","text"),u.setAttribute("id","descriptionInput"),u.setAttribute("name","description"),p.setAttribute("for","Due date"),m.setAttribute("type","date"),m.setAttribute("id","dateInput"),m.setAttribute("name","date"),h.setAttribute("for","Priority"),E.setAttribute("type","text"),E.setAttribute("id","priorityInput"),k.setAttribute("value","High"),g.setAttribute("value","Medium"),y.setAttribute("value","Low"),k.innerHTML="High",g.innerHTML="Medium",y.innerHTML="Low",b.setAttribute("for","Check"),I.setAttribute("type","checkbox"),I.setAttribute("id","checkInput"),I.setAttribute("name","check"),I.setAttribute("value","done"),i.innerHTML="<h2>Task</h2>",L.innerHTML="Add task",o.innerHTML="<h4>Title</h4>",s.innerHTML="<h4>Description</h4>",p.innerHTML="<h4>Due Date</h4>",h.innerHTML="<h4>Priority</h4>",b.innerHTML="Complete",L.setAttribute("type","submit"),L.classList.add("submit");let _=e(r,n,c);l.appendChild(o),l.appendChild(a),l.appendChild(s),l.appendChild(u),l.appendChild(p),l.appendChild(m),l.appendChild(h),l.appendChild(E),l.appendChild(b),l.appendChild(I),l.appendChild(L),E.appendChild(k),E.appendChild(g),E.appendChild(y),c.innerHTML=_,L.addEventListener("click",(t=>{t.preventDefault(),r=d(n),c.innerHTML="",document.getElementById("titleInput").value="",document.getElementById("descriptionInput").value="",document.getElementById("dateInput").value="",document.getElementById("priorityInput").value="",document.getElementById("checkInput").value="",c.innerHTML=e(r,n,c)})),i.appendChild(c),i.appendChild(l),t(n)},currentTaskList:e,projects:function(){const e=document.getElementById("project"),t=document.createElement("button");t.classList.add("addButton"),e.innerHTML="<h2>Projects</h2>",t.innerHTML="+";const n=document.createElement("form"),i=document.createElement("label"),d=document.createElement("input");return i.setAttribute("for","ptitle"),d.setAttribute("type","text"),d.setAttribute("id","ptitle"),d.setAttribute("name","ptitle"),t.addEventListener("click",(()=>{c()})),n.appendChild(i),n.appendChild(d),e.appendChild(t),e.appendChild(n),e},statusChange:t}})();!function(){const e=document.getElementById("project"),t=document.createElement("div");t.addEventListener("click",(e=>{let t=e.target.id;r.showTask(t)})),r.projects(),r.showProjects(t),e.appendChild(t)}()})();