(()=>{"use strict";class t{constructor(t,e,n,i,c){this._title=t,this._desc=e,this._date=n,this._priority=i,this._check=c}get title(){return this._title}get desc(){return this._desc}get date(){return this._date}get priority(){return this._priority}get check(){return this._check}set title(t){this._title=t}set desc(t){this._desc=t}set date(t){this._date=t}set priority(t){this._priority=t}set check(t){this._check=t}}class e{constructor(t){this._name=t,this._task=[]}get name(){return this._name}get task(){return this._task}set name(t){this._name=t}set task(t){this._task=t}}const n=(()=>{const n=new e("Project title"),i=new t("Task title","desc","date","priority","check"),c=new t("Task title2","desc2","date2","priority2","check2");return n.task=[i,c],n})(),i=function(t){localStorage.setItem("myProject",JSON.stringify(t))};function c(t){const e=document.getElementById("task");let n=JSON.parse(localStorage.getItem("myProject"));const i=document.createElement("form"),c=document.createElement("label"),d=document.createElement("input"),l=document.createElement("label"),o=document.createElement("input"),a=document.createElement("label"),s=document.createElement("input"),u=document.createElement("label"),p=document.createElement("input"),m=document.createElement("label"),h=document.createElement("checkbox"),g=document.createElement("button");c.setAttribute("for","Title"),d.setAttribute("type","text"),d.setAttribute("id","titleInput"),d.setAttribute("name","title"),l.setAttribute("for","Description"),o.setAttribute("type","text"),o.setAttribute("id","descriptionInput"),o.setAttribute("name","description"),a.setAttribute("for","Due date"),s.setAttribute("type","text"),s.setAttribute("id","dateInput"),s.setAttribute("name","date"),u.setAttribute("for","Priority"),p.setAttribute("type","text"),p.setAttribute("id","priorityInput"),p.setAttribute("name","priority"),m.setAttribute("for","Check"),h.setAttribute("type","checkbox"),h.setAttribute("id","checkInput"),h.setAttribute("name","check"),e.innerHTML="<h2>Task</h2>",g.innerHTML="Add task",g.setAttribute("type","submit");for(let i=0;i<n[t]._task.length;i+=1){const c=document.createElement("div"),r=document.createElement("div"),d=document.createElement("div"),l=document.createElement("div"),o=document.createElement("div"),a=document.createElement("div");r.innerHTML=n[t]._task[i]._title,d.innerHTML=n[t]._task[i]._desc,l.innerHTML=n[t]._task[i]._date,o.innerHTML=n[t]._task[i]._priority,a.innerHTML=n[t]._task[i]._check,c.appendChild(r),c.appendChild(d),c.appendChild(l),c.appendChild(o),c.appendChild(a),e.appendChild(c),console.log(e)}return e.appendChild(i),i.appendChild(c),i.appendChild(d),i.appendChild(l),i.appendChild(o),i.appendChild(a),i.appendChild(s),i.appendChild(u),i.appendChild(p),i.appendChild(m),i.appendChild(h),i.appendChild(g),g.addEventListener("click",(e=>{e.preventDefault(),r(t),alert(e.target)})),e}function r(e){let n=JSON.parse(localStorage.getItem("myProject")),r=n[e]._task;const d=document.getElementById("titleInput").value,l=document.getElementById("descriptionInput").value,o=document.getElementById("dateInput").value,a=document.getElementById("priorityInput").value,s=document.getElementById("checkInput").value;c=new t(d,l,o,a,s),r.push(c),console.log(r),console.log(n[e]),console.log(n),i(n)}!function(){const t=document.getElementById("project"),r=document.createElement("div");r.addEventListener("click",(t=>{let e=t.target.id;console.log(e),c(e)})),function(){const t=document.getElementById("project"),n=document.createElement("button");n.classList.add("addButton"),t.innerHTML="<h2>Projects</h2>",n.innerHTML="+";const c=document.createElement("form"),r=document.createElement("label"),d=document.createElement("input");r.setAttribute("for","ptitle"),d.setAttribute("type","text"),d.setAttribute("id","ptitle"),d.setAttribute("name","ptitle"),n.addEventListener("click",(()=>{!function(){let t=JSON.parse(localStorage.getItem("myProject"));console.log(t);const n=document.getElementById("ptitle").value;console.log(n);const c=new e(n);t.push(c),i(t)}()})),c.appendChild(r),c.appendChild(d),t.appendChild(n),t.appendChild(c)}(),function(t){let e=JSON.parse(localStorage.getItem("myProject"));null===e&&(i([n]),console.log(e.length));for(let n=0;n<e.length;n+=1){let i=document.createElement("button");i.setAttribute("id",n);let c=document.createElement("div");console.log(e[0]._name),i.innerHTML=e[n]._name,t.appendChild(i),t.appendChild(c)}}(r),t.appendChild(r)}()})();