
import Project, {project1} from './project'
import Storage from './storage'

function header() {
  const header = document.createElement('header');
  header.classList.add('header');

  const name = document.createElement('h1');
  name.classList.add('name');
  name.innerHTML = '<b>To Do List</b>';

  header.appendChild(name);
  header.appendChild(navBar());
  return header;
}

function navBar() {
  const nav = document.createElement('nav');
  return nav;
}

function addProjectToProjects(){

  let myProject = JSON.parse(localStorage.getItem('myProject'));
  console.log(myProject)
  if (myProject === null) {
    myProject = []
  }
  const pTitle=document.getElementById('ptitle').value;
  console.log(pTitle)
  const project = new Project(pTitle)
  myProject.push(project)
 Storage.storageMyProjects(myProject)
}


function projects() {
  const project = document.getElementById('project');
  const addProjectButton = document.createElement('button');

  addProjectButton.innerHTML = 'Add Project';
  const form = document.createElement('form');
  const label = document.createElement('label');
  const input = document.createElement('input');

  label.setAttribute('for', 'ptitle');
  input.setAttribute('type', 'text');
  input.setAttribute('id', 'ptitle');
  input.setAttribute('name', 'ptitle');

  addProjectButton.addEventListener('click',() => {
    addProjectToProjects();
  })
  form.appendChild(label);
  form.appendChild(input);
  
  project.appendChild(addProjectButton);
  project.appendChild(form);
  return project;
}

function task() {
  const task = document.getElementById('task');
  
  return task;
}


function showProjects(content){
  let myProject = JSON.parse(localStorage.getItem('myProject'));
  for (let i=0; i<myProject.length; i+=1){
  
  let projectTitle  = document.createElement('div')
  let taskTitle = document.createElement('div')
  console.log(myProject[0]['_name'])
  projectTitle.innerHTML = myProject[i]['_name'];

   content.appendChild(projectTitle);
   content.appendChild(taskTitle);
 }
}

function loadPage() {

  Storage.storageMyProjects([project1])
  const content = document.getElementById('content');
  const container = document.getElementById('container');

  showProjects(content)

  content.appendChild(header());
  content.appendChild(projects());

}

export default loadPage;

