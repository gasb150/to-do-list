import add from './add'
import Storage from './storage'
import Project, { project1 } from './project'
const show = (() => {
  function showProjects(content) {
    let myProject = JSON.parse(localStorage.getItem('myProject'))

    if (myProject === null) {
      Storage.storageMyProjects([project1])
    }

    for (let i = 0; i < myProject.length; i += 1) {
      const removeButton = document.createElement('button');
      removeButton.id = i;
      let projectTitle = document.createElement('button')
      projectTitle.setAttribute('id', i)

      let taskTitle = document.createElement('div')
      projectTitle.innerHTML = myProject[i]['_name']
         let br = document.createElement('p')
      content.appendChild(removeButton)
      content.appendChild(br)
      content.appendChild(projectTitle)

      removeButton.addEventListener('click',() =>{
        Storage.removeProject(this.id);
      });
      removeButton.innerHTML = 'Remove';
    }

  }

  function clean() {

    document.getElementById('titleInput').value = ''
    document.getElementById('descriptionInput').value = ''
    document.getElementById('dateInput').value = ''
    document.getElementById('priorityInput').value = ''
    document.getElementById('checkInput').value = ''
  }

  function showTask(eId) {
    // Test

    const task = document.getElementById('task');

    const taskList = document.createElement('div');
    taskList.id = "taskList";
    let myProject = JSON.parse(localStorage.getItem('myProject'));
    const taskForm = document.createElement('form');
    const taskLabelTitle = document.createElement('label');
    const taskTitle = document.createElement('input');
    const taskLabelDesc = document.createElement('label');
    const taskDesc = document.createElement('input');
    const taskLabelDate = document.createElement('label');
    const taskDate = document.createElement('input');
    const taskLabelPriority = document.createElement('label');
    const taskPriority = document.createElement('select');
    const taskHigh = document.createElement('option');
    const taskMedium = document.createElement('option');
    const taskLow = document.createElement('option');
    const taskLabelCheck = document.createElement('label');
    const taskCheck = document.createElement('input');
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
    taskDate.setAttribute('type', 'date');
    taskDate.setAttribute('id', 'dateInput');
    taskDate.setAttribute('name', 'date');

    taskLabelPriority.setAttribute('for', 'Priority');
    taskPriority.setAttribute('type', 'text');
    taskPriority.setAttribute('id', 'priorityInput');

    taskHigh.setAttribute('value', 'High');
    taskMedium.setAttribute('value', 'Medium');
    taskLow.setAttribute('value', 'Low');
    taskHigh.innerHTML = 'High';
    taskMedium.innerHTML = 'Medium';
    taskLow.innerHTML = 'Low';

    taskLabelCheck.setAttribute('for', 'Check');
    taskCheck.setAttribute('type', 'checkbox');
    taskCheck.setAttribute('id', 'checkInput');
    taskCheck.setAttribute('name', 'check');
    taskCheck.setAttribute('value', 'done')

    task.innerHTML = '<h2>Task</h2>';
    addTaskButton.innerHTML = 'Add task';
    taskLabelTitle.innerHTML = '<h4>Title</h4>';
    taskLabelDesc.innerHTML = '<h4>Description</h4>';
    taskLabelDate.innerHTML = '<h4>Due Date</h4>';
    taskLabelPriority.innerHTML = '<h4>Priority</h4>';
    taskLabelCheck.innerHTML = 'Complete'
    addTaskButton.setAttribute('type', 'submit');
    addTaskButton.classList.add("submit");

    let allTask = currentTaskList(myProject, eId, taskList)


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
    taskForm.appendChild(addTaskButton);
    taskPriority.appendChild(taskHigh);
    taskPriority.appendChild(taskMedium);
    taskPriority.appendChild(taskLow);
    taskList.innerHTML = allTask;


    addTaskButton.addEventListener('click', (e) => {
      e.preventDefault();

      myProject = add.addTask(eId)
      taskList.innerHTML = ''
      clean()
      taskList.innerHTML = currentTaskList(myProject, eId, taskList)
    })
    task.appendChild(taskList);
    task.appendChild(taskForm);

     statusChange(eId, myProject) 
     deleteTask(eId, myProject)
  }

  function currentTaskList(myProject, eId, taskList) {
    for (let i = 0; i < myProject[eId]['_task'].length; i += 1) {
      const currentTask = document.createElement('div')
      currentTask.classList.add('card')
      const currentTaskTitle = document.createElement('div')
      const currentTaskDesc = document.createElement('div')
      const currentTaskDate = document.createElement('div')
      const currentTaskPriority = document.createElement('div')
      const currentTaskCheck = document.createElement('div')
      const currentTaskDelete = document.createElement('div')

      currentTaskTitle.innerHTML = myProject[eId]['_task'][i]['_title']
      currentTaskDesc.innerHTML = myProject[eId]['_task'][i]['_desc']
      currentTaskDate.innerHTML = myProject[eId]['_task'][i]['_date']
      currentTaskPriority.innerHTML = myProject[eId]['_task'][i]['_priority']

      let status = myProject[eId]['_task'][i]['_check']
      let value
      let stats
      if (status === true) {
        value = 'checked'
        stats = 'Done'
      } else {

        value = ''
        stats = 'Undone'
      }
      currentTaskCheck.innerHTML = `<button class="taskStatus" type='submit' id=myCheck${i} ${value}>${stats}</button>` 
      currentTaskDelete.innerHTML = `<button class="taskDelete" type='submit' id=delete${i} ${value}>Remove</button>` 


      currentTask.appendChild(currentTaskTitle)
      currentTask.appendChild(currentTaskDesc)
      currentTask.appendChild(currentTaskDate)
      currentTask.appendChild(currentTaskPriority)
      currentTask.appendChild(currentTaskCheck)
      currentTask.appendChild(currentTaskDelete)
      taskList.appendChild(currentTask)

    }
    return taskList.outerHTML
  }


   function statusChange(eId, myProject) {
    
     let statusBtns = Array.from(document.getElementsByClassName('taskStatus'))
    
     statusBtns.forEach(btn => btn.addEventListener('click', (e) =>{
      let target = e.target
      let status = target.innerHTML
      if (status === "Done"){
        target.innerHTML = "Undone"
       const st = false
        UpdateStatus(eId,target, st, myProject)
      } else {
        console.log(target)
        const st = true
       target.innerHTML = "Done"
       UpdateStatus(eId,target, st, myProject)
      }
    }))
 
   }

   function UpdateStatus(eId, target, st, myProject) {
     console.log(eId)
     let id = target.id.slice(7)
    
    myProject[eId]['_task'][id]['_check']=st
   
    Storage.storageMyProjects(myProject)
  }

  function deleteTask(eId, myProject) {
    
    let deleteBtns = Array.from(document.getElementsByClassName('taskDelete'))
   
    deleteBtns.forEach(btn => btn.addEventListener('click', (e) =>{
     let target = e.target
    console.log(target.parentNode.parentNode.remove())
    //  if (status === "Done"){
    //    target.innerHTML = "Undone"
    //   const st = false
    //   deleteMyTask(eId,target, st, myProject)
    //  } else {
    //    console.log(target)
    //    const st = true
    //   target.innerHTML = "Done"
    //   deleteMyTask(eId,target, st, myProject)
    //  }
   }))

  }

//   function deleteMyTask(eId, target, st, myProject) {
//     console.log(eId)
//     let id = target.id.slice(7)
   
//    myProject[eId]['_task'][id]['_check']=st
  
//    Storage.storageMyProjects(myProject)
//  }


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
      add.addProjectToProjects()
    })

    form.appendChild(label)
    form.appendChild(input)

    project.appendChild(addProjectButton)
    project.appendChild(form)

    return project
  }



  return {
    showProjects,
    showTask,
    currentTaskList,
    projects,
    // statusChange
  }
})()

export default show