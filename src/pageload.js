import Storage from './storage'
import Project, { project1 } from './project'
import ToDo from './todo'

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
    addProjectToProjects();
  })

  form.appendChild(label)
  form.appendChild(input)

  project.appendChild(addProjectButton)
  project.appendChild(form)

  return project
}

function task (eId) {
  // Test
  const task = document.getElementById('task');

  let myProject = JSON.parse(localStorage.getItem('myProject'));
  const taskForm = document.createElement('form');
  const taskLabelTitle = document.createElement('label');
  const taskTitle = document.createElement('input');
  const taskLabelDesc = document.createElement('label');
  const taskDesc = document.createElement('input');
  const taskLabelDate = document.createElement('label');
  const taskDate = document.createElement('input');
  const taskLabelPriority = document.createElement('label');
  const taskPriority = document.createElement('input');
  const taskLabelCheck = document.createElement('label');
  const taskCheck = document.createElement('checkbox');
  const addTaskButton = document.createElement('button');

  taskLabelTitle.setAttribute('for', 'Title');
  taskTitle.setAttribute('type', 'text');
  taskTitle.setAttribute('id', 'titleInput');
  taskTitle.setAttribute('name', 'title');

  taskLabelDesc.setAttribute('for', 'Description');
  taskDesc.setAttribute('type', 'text');
  taskDesc.setAttribute('id', 'descriptionInput');
  taskDesc.setAttribute('name', 'description');

  taskLabelDate.setAttribute('for', 'Due date');
  taskDate.setAttribute('type', 'text');
  taskDate.setAttribute('id', 'dateInput');
  taskDate.setAttribute('name', 'date');

  taskLabelPriority.setAttribute('for', 'Priority');
  taskPriority.setAttribute('type', 'text');
  taskPriority.setAttribute('id', 'priorityInput');
  taskPriority.setAttribute('name', 'priority');

  taskLabelCheck.setAttribute('for', 'Check');
  taskCheck.setAttribute('type', 'checkbox');
  taskCheck.setAttribute('id', 'checkInput');
  taskCheck.setAttribute('name', 'check');

  task.innerHTML = '<h2>Task</h2>';
  addTaskButton.innerHTML = 'Add task';
  taskLabelTitle.innerHTML = '<h4>Title</h4><br>';
  taskLabelDesc.innerHTML = '<h4>Description</h4><br>';
  taskLabelDate.innerHTML = '<h4>Due Date</h4><br>';
  taskLabelPriority.innerHTML = '<h4>Priority</h4><br>';
  addTaskButton.setAttribute('type', 'submit');
  addTaskButton.classList.add("submit");

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

  addTaskButton.addEventListener('click', (e) => {
    e.preventDefault();

     addTask(eId)
     alert (e.target)
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

  myProject.appendChild(toggler());
}

function toggler() {
  let toggle = document.getElementById("pTitle");
  if (toggle.style.display === "none") {
    toggle.style.display = "block";
  } else {
    toggle.style.display = "none";
  }
  return toggler
}

function addTask (eId) {
  let myProject = JSON.parse(localStorage.getItem('myProject'))
  let tasks = myProject[eId]['_task']
  const inTaskTitle = document.getElementById('titleInput').value
  const inTaskDesc = document.getElementById('descriptionInput').value
  const inTaskDate = document.getElementById('dateInput').value
  const inTaskPriority = document.getElementById('priorityInput').value
  const inTaskCheck = document.getElementById('checkInput').value

  task = new ToDo (inTaskTitle, inTaskDesc, inTaskDate, inTaskPriority, inTaskCheck)

  tasks.push(task)

  console.log(tasks)
  console.log(myProject[eId])
  console.log(myProject)
  Storage.storageMyProjects(myProject)
  
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
  const projectList = document.createElement('div')
  projectList.addEventListener('click', e => {
    let eId = e.target.id
    console.log(eId)
    task(eId)
  })
  projects()
  showProjects(projectList)
  projectColumn.appendChild(projectList)
  
}

export default loadPage
