import show from './display'

function loadPage () {
  const projectColumn = document.getElementById('project')
  const projectList = document.createElement('div')
  projectList.addEventListener('click', e => {
    let eId = e.target.id
    show.showTask(eId)
  })
  show.projects()
  show.showProjects(projectList)
  projectColumn.appendChild(projectList)
  
}

export default loadPage
