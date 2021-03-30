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

function project() {
  const project = document.getElementById('project');
  const addProjectButton = document.createElement('button');

  addProjectButton.innerHTML = 'Add Project';
  
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
  content.appendChild(project());
}

export default loadPage;