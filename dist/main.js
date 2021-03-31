(()=>{"use strict";class t{constructor(t,e,n,i,r){this._title=t,this._desc=e,this._date=n,this._priority=i,this._check=r}get title(){return this._title}get desc(){return this._desc}get date(){return this._date}get priority(){return this._priority}get check(){return this._check}set title(t){this._title=t}set desc(t){this._desc=t}set date(t){this._date=t}set priority(t){this._priority=t}set check(t){this._check=t}}class e{constructor(t){this._name=t,this._task=[]}get name(){return this._name}get task(){return this._task}set name(t){this._name=t}set task(t){this._task=t}}const n=(()=>{const n=new e("Project title"),i=new t("Task title","desc","date","priority","check"),r=new t("Task title2","desc2","date2","priority2","check2");return n.task=[i,r],n})(),i=function(t){localStorage.setItem("myProject",JSON.stringify(t))},r=function(e,n,r){let d=JSON.parse(localStorage.getItem("myProject")),c=d[e]._task;const a=document.getElementById("titleInput").value,l=document.getElementById("descriptionInput").value,s=document.getElementById("dateInput").value,u=document.getElementById("priorityInput").value,o=document.getElementById("checkInput").value,p=new t(a,l,s,u,o);return c.push(p),i(d),d},d=function(){let t=JSON.parse(localStorage.getItem("myProject"));const n=document.getElementById("ptitle").value,r=new e(n);t.push(r),i(t),window.location.reload()},c=(()=>{function t(t,e,n){for(let i=0;i<t[e]._task.length;i+=1){const r=document.createElement("div"),d=document.createElement("div"),c=document.createElement("div"),a=document.createElement("div"),l=document.createElement("div"),s=document.createElement("div");d.innerHTML=t[e]._task[i]._title,c.innerHTML=t[e]._task[i]._desc,a.innerHTML=t[e]._task[i]._date,l.innerHTML=t[e]._task[i]._priority,s.innerHTML=t[e]._task[i]._check,r.appendChild(d),r.appendChild(c),r.appendChild(a),r.appendChild(l),r.appendChild(s),n.appendChild(r)}return n.outerHTML}return{showProjects:function(t){let e=JSON.parse(localStorage.getItem("myProject"));null===e&&i([n]);for(let n=0;n<e.length;n+=1){let i=document.createElement("button");i.setAttribute("id",n);let r=document.createElement("div");i.innerHTML=e[n]._name,t.appendChild(i),t.appendChild(r)}},showTask:function(e){const n=document.getElementById("task"),i=document.createElement("div");i.id="taskList";let d=JSON.parse(localStorage.getItem("myProject"));const c=document.createElement("form"),a=document.createElement("label"),l=document.createElement("input"),s=document.createElement("label"),u=document.createElement("input"),o=document.createElement("label"),p=document.createElement("input"),m=document.createElement("label"),h=document.createElement("input"),E=document.createElement("label"),k=document.createElement("checkbox"),y=document.createElement("button");a.setAttribute("for","Title"),l.setAttribute("type","text"),l.setAttribute("id","titleInput"),l.setAttribute("name","title"),s.setAttribute("for","Description"),u.setAttribute("type","text"),u.setAttribute("id","descriptionInput"),u.setAttribute("name","description"),o.setAttribute("for","Due date"),p.setAttribute("type","text"),p.setAttribute("id","dateInput"),p.setAttribute("name","date"),m.setAttribute("for","Priority"),h.setAttribute("type","text"),h.setAttribute("id","priorityInput"),h.setAttribute("name","priority"),E.setAttribute("for","Check"),k.setAttribute("type","checkbox"),k.setAttribute("id","checkInput"),k.setAttribute("name","check"),n.innerHTML="<h2>Task</h2>",y.innerHTML="Add task",y.setAttribute("type","submit");let b=t(d,e,i);console.log(b),c.appendChild(a),c.appendChild(l),c.appendChild(s),c.appendChild(u),c.appendChild(o),c.appendChild(p),c.appendChild(m),c.appendChild(h),c.appendChild(E),c.appendChild(k),c.appendChild(y),i.innerHTML=b,y.addEventListener("click",(n=>{n.preventDefault(),d=r(e),i.innerHTML="",document.getElementById("titleInput").value="",document.getElementById("descriptionInput").value="",document.getElementById("dateInput").value="",document.getElementById("priorityInput").value="",document.getElementById("checkInput").value="",i.innerHTML=t(d,e,i)})),n.appendChild(i),n.appendChild(c)},currentTaskList:t,projects:function(){const t=document.getElementById("project"),e=document.createElement("button");e.classList.add("addButton"),t.innerHTML="<h2>Projects</h2>",e.innerHTML="+";const n=document.createElement("form"),i=document.createElement("label"),r=document.createElement("input");return i.setAttribute("for","ptitle"),r.setAttribute("type","text"),r.setAttribute("id","ptitle"),r.setAttribute("name","ptitle"),e.addEventListener("click",(()=>{d()})),n.appendChild(i),n.appendChild(r),t.appendChild(e),t.appendChild(n),t}}})();!function(){const t=document.getElementById("project"),e=document.createElement("div");e.addEventListener("click",(t=>{let e=t.target.id;c.showTask(e)})),c.projects(),c.showProjects(e),t.appendChild(e)}()})();