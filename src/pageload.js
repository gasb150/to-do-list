


import show from './display'

function projects() {
  const project = document.getElementById('project');
  const addProjectButton = document.createElement('button');
  addProjectButton.classList.add("addButton");

  project.innerHTML = '<h2>Projects</h2>';
  addProjectButton.innerHTML = '+';
  const form = document.createElement('form');
  const label = document.createElement('label');
  const input = document.createElement('input');

  label.setAttribute('for', 'ptitle');
  input.setAttribute('type', 'text');
  input.setAttribute('id', 'ptitle');
  input.setAttribute('name', 'ptitle');

  addProjectButton.addEventListener('click', () => {
    addProjectToProjects()
  })

  form.appendChild(label)
  form.appendChild(input)

  project.appendChild(addProjectButton)
  project.appendChild(form)

  return project
}













function loadPage () {
  const projectColumn = document.getElementById('project')
  const projectList = document.createElement('div')
  projectList.addEventListener('click', e => {
    let eId = e.target.id
    show.showTask(eId)
  })
  projects()
  show.showProjects(projectList)
  projectColumn.appendChild(projectList)
  
}

export default loadPage
