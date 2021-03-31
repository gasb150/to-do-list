import Storage from './storage'
import Project, { project1 } from './project'

function projects() {
  const project = document.getElementById('project')
  const addProjectButton = document.createElement('button')

  project.innerHTML = '<h2>Projects</h2>'
  addProjectButton.innerHTML = 'Add Project'
  const form = document.createElement('form')
  const label = document.createElement('label')
  const input = document.createElement('input')

  label.setAttribute('for', 'ptitle')
  input.setAttribute('type', 'text')
  input.setAttribute('id', 'ptitle')
  input.setAttribute('name', 'ptitle')

  addProjectButton.addEventListener('click', () => {
    addProjectToProjects()
  })

  form.appendChild(label)
  form.appendChild(input)

  project.appendChild(addProjectButton)
  project.appendChild(form)

  return project
}

function task (eId) {
  // Test
  const task = document.getElementById('task')

  let myProject = JSON.parse(localStorage.getItem('myProject'))
  const taskForm = document.createElement('form')
  const taskLabelTitle = document.createElement('label')
  const taskTitle = document.createElement('input')
  const taskLabelDesc = document.createElement('label')
  const taskDesc = document.createElement('input')
  const taskLabelDate = document.createElement('label')
  const taskDate = document.createElement('input')
  const taskLabelPriority = document.createElement('label')
  const taskPriority = document.createElement('input')
  const taskLabelCheck = document.createElement('label')
  const taskCheck = document.createElement('checkbox')
  const addTaskButton = document.createElement('button')

  taskLabelTitle.setAttribute('for', 'Title')
  taskTitle.setAttribute('type', 'text')
  taskTitle.setAttribute('id', 'titleInput')
  taskTitle.setAttribute('name', 'title')

  taskLabelDesc.setAttribute('for', 'Description')
  taskDesc.setAttribute('type', 'text')
  taskDesc.setAttribute('id', 'descriptionInput')
  taskDesc.setAttribute('name', 'description')

  taskLabelDate.setAttribute('for', 'Due date')
  taskDate.setAttribute('type', 'text')
  taskDate.setAttribute('id', 'dateInput')
  taskDate.setAttribute('name', 'date')

  taskLabelPriority.setAttribute('for', 'Priority')
  taskPriority.setAttribute('type', 'text')
  taskPriority.setAttribute('id', 'priorityInput')
  taskPriority.setAttribute('name', 'priority')

  taskLabelCheck.setAttribute('for', 'Check')
  taskCheck.setAttribute('type', 'checkbox')
  taskCheck.setAttribute('id', 'checkInput')
  taskCheck.setAttribute('name', 'check')

  task.innerHTML = '<h2>Task</h2>'
  addTaskButton.innerHTML = 'Add task'

  for (let i = 0; i < myProject[eId]['_task'].length; i += 1) {
    const currentTask = document.createElement('div')
    const currentTaskTitle = document.createElement('div')
    const currentTaskDesc = document.createElement('div')
    const currentTaskDate = document.createElement('div')
    const currentTaskPriority = document.createElement('div')
    const currentTaskCheck = document.createElement('div')
    
    currentTaskTitle.innerHTML = myProject[eId]['_task'][i]['_title']
    currentTaskDesc.innerHTML = myProject[eId]['_task'][i]['_desc']
    currentTaskDate.innerHTML = myProject[eId]['_task'][i]['_date']
    currentTaskPriority.innerHTML = myProject[eId]['_task'][i]['_priority']
    currentTaskCheck.innerHTML = myProject[eId]['_task'][i]['_check']

    currentTask.appendChild(currentTaskTitle)
    currentTask.appendChild(currentTaskDesc)
    currentTask.appendChild(currentTaskDate)
    currentTask.appendChild(currentTaskPriority)
    currentTask.appendChild(currentTaskCheck)
    alert(currentTask)
    task.appendChild(currentTask)
    console.log(task)
  }
  

  



  task.appendChild(taskForm)
  taskForm.appendChild(taskLabelTitle)
  taskForm.appendChild(taskTitle)
  taskForm.appendChild(taskLabelDesc)
  taskForm.appendChild(taskDesc)
  taskForm.appendChild(taskLabelDate)
  taskForm.appendChild(taskDate)
  taskForm.appendChild(taskLabelPriority)
  taskForm.appendChild(taskPriority)
  taskForm.appendChild(taskLabelCheck)
  taskForm.appendChild(taskCheck)
  taskForm.appendChild(addTaskButton)
  addTaskButton.addEventListener('click', () => {
    addTask(eId)
  })

  return task
}

function addProjectToProjects () {
  let myProject = JSON.parse(localStorage.getItem('myProject'))
  console.log(myProject)

  const pTitle = document.getElementById('ptitle').value
  console.log(pTitle)
  const project = new Project(pTitle)
  myProject.push(project)
  Storage.storageMyProjects(myProject)
}

function addTask (eId) {
  let myTask = []
  let myProject = JSON.parse(localStorage.getItem('myProject'))
  myProject[eId][_task]
}

function showProjects (content) {
  let myProject = JSON.parse(localStorage.getItem('myProject'))

  if (myProject === null) {
    Storage.storageMyProjects([project1])
    console.log(myProject.length)
  }

  for (let i = 0; i < myProject.length; i += 1) {
    
    let projectTitle = document.createElement('button')
    projectTitle.setAttribute('id', i)

    let taskTitle = document.createElement('div')
    console.log(myProject[0]['_name'])
    projectTitle.innerHTML = myProject[i]['_name']

    content.appendChild(projectTitle)
    content.appendChild(taskTitle)
  }

}

function loadPage () {
  const projectColumn = document.getElementById('project')
  projectColumn.addEventListener('click', e => {
    let eId = e.target.id
    console.log(eId)
    task(eId)
  })
  projects()
  showProjects(projectColumn)
  
}

export default loadPage
