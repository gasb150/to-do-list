
import Project, {project1} from './project'
import Storage from './storage'

function projects() {
  const project = document.getElementById('project');
  const addProjectButton = document.createElement('button');

  project.innerHTML = '<h2>Projects</h2>';
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
  const taskForm = document.createElement('form');
  const taskLabelTitle = document.createElement('label');
  const taskTitle = document.createAttribute('input');
  const taskLabelDesc = document.createElement('label');
  const taskDesc = document.createAttribute('input');
  const taskLabelDate = document.createElement('label');
  const taskDate = document.createAttribute('input');
  const taskLabelPriority = document.createElement('label');
  const taskPriority = document.createAttribute('input');
  const taskLabelCheck = document.createElement('label');
  const taskCheck = document.createAttribute('checkbox');
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

  task.appendChild(taskForm);
  taskForm.appendChild(taskLabelTitle);
  taskForm.appendChild(taskTitle);
  taskForm.appendChild(taskLabelDesc);
  taskForm.appendChild(taskDesc);
  taskForm.appendChild(taskLabelDate);
  taskForm.appendChild(taskDate);
  taskForm.appendChild(taskLabelPriority);
  taskForm.appendChild(taskPriority);
  taskForm.appendChild(taskLabelCheck);
  taskForm.appendChild(taskCheck);

  addTaskButton.addEventListener('click',() => {
    addTask();
  })

  return task;
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

function addTask() {
  let myTask = [];
  
  const taskTitle = document.getElementById('ta')
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
   project.appendChild(content)

 }
}

function loadPage() {
  Storage.storageMyProjects([project1])
  const container = document.getElementById('container');

  showProjects(container)

  container.appendChild(projects());
  container.appendChild(task());
}

export default loadPage;

