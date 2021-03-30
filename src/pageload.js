
import {project1} from './project'
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
    alert("yess")
    myProject = [] ;
    myProject.push(project1)
  }
 Storage.storageMyProjects(myProject)
}


function projects() {
  const project = document.getElementById('project');
  const addProjectButton = document.createElement('button');

  addProjectButton.innerHTML = 'Add Project';
const form = document.createElement('form')
const label = document.createElement('label')
const input = document.createElement('input')

label.setAttribute('for', 'ptitle')
input.setAttribute('type', 'text')
input.setAttribute('id', 'ptitle')
input.setAttribute('name', 'ptitle')




  addProjectButton.addEventListener('click',() => {
    addProjectToProjects()
  })
  project.appendChild(label)
  project.appendChild(input)
  
  project.appendChild(addProjectButton);
  return project;
}

function task() {
  
  return task;
}

function loadPage() {

  const content = document.getElementById('content');
  const container = document.getElementById('container');
 
  content.appendChild(header());
  content.appendChild(projects());

}

export default loadPage;

