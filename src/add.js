import ToDo from './todo'
import Storage from './storage'
import show from './display'
import Project from './project'
const add = (() => {
     function addProjectToProjects () {
    let myProject = JSON.parse(localStorage.getItem('myProject'))
  
    const pTitle = document.getElementById('ptitle').value
    const project = new Project(pTitle)
    myProject.push(project)
    Storage.storageMyProjects(myProject)

    window.location.reload();
  }

  function addTask (eId,taskList, taskForm) {
    let myProject = JSON.parse(localStorage.getItem('myProject'))
    let tasks = myProject[eId]['_task']
    const inTaskTitle = document.getElementById('titleInput').value
    const inTaskDesc = document.getElementById('descriptionInput').value
    const inTaskDate = document.getElementById('dateInput').value
    const inTaskPriority = document.getElementById('priorityInput').value
    const inTaskCheck = document.getElementById('checkInput')
    
    let checkStatus
     if (inTaskCheck.checked === true){
       checkStatus = true
        
    } else {
        checkStatus = false
    }
  
    const task = new ToDo (inTaskTitle, inTaskDesc, inTaskDate, inTaskPriority, checkStatus)
  
    tasks.push(task)
    Storage.storageMyProjects(myProject)

    return (myProject)
  }
  return {
      addTask,
      addProjectToProjects
  }
 
})()

export default add