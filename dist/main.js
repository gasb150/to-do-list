(()=>{"use strict";class t{constructor(t,e,n,i,s){this._title=t,this._desc=e,this._date=n,this._priority=i,this._check=s}get title(){return this._title}get desc(){return this._desc}get date(){return this._date}get priority(){return this._priority}get check(){return this._check}set title(t){this._title=t}set desc(t){this._desc=t}set date(t){this._date=t}set priority(t){this._priority=t}set check(t){this._check=t}}class e{constructor(t){this._name=t,this._task=[]}get name(){return this._name}get task(){return this._task}set name(t){this._name=t}set task(t){this._task=t}}const n=(()=>{const n=new e("Project title"),i=new t("Task title","desc","date","priority","check");return n.task=i,n})(),i=function(t){localStorage.setItem("myProject",JSON.stringify(t))};!function(){i([n]);const t=document.getElementById("content"),s=(document.getElementById("container"),document.createElement("div")),c=document.createElement("div");s.innerHTML=n.name,c.innerHTML=n.task.title,t.appendChild(s),t.appendChild(c),t.appendChild(function(){const t=document.createElement("header");t.classList.add("header");const e=document.createElement("h1");return e.classList.add("name"),e.innerHTML="<b>To Do List</b>",t.appendChild(e),t.appendChild(document.createElement("nav")),t}()),t.appendChild(function(){const t=document.getElementById("project"),n=document.createElement("button");n.innerHTML="Add Project",document.createElement("form");const s=document.createElement("label"),c=document.createElement("input");return s.setAttribute("for","ptitle"),c.setAttribute("type","text"),c.setAttribute("id","ptitle"),c.setAttribute("name","ptitle"),n.addEventListener("click",(()=>{!function(){let t=JSON.parse(localStorage.getItem("myProject"));console.log(t),null===t&&(t=[]);const n=document.getElementById("ptitle").value;console.log(n);const s=new e(n);t.push(s),i(t)}()})),t.appendChild(s),t.appendChild(c),t.appendChild(n),t}())}()})();