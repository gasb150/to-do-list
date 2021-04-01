// eslint-disable-next-line no-underscore-dangle

import ToDo from './todo';
import Storage from './storage';
import show from './display';
import Project from './project';
import Validation from './validation';

const add = (() => {
  function addProjectToProjects() {
    const myProject = JSON.parse(localStorage.getItem('myProject'));

    const pTitle = document.getElementById('ptitle').value;
    const project = new Project(pTitle);

    if (Validation.validateProject(project) !== false) {
      myProject.push(project);
      Storage.storageMyProjects(myProject);

      window.location.reload();
    } else {
      Validation.validateProject(project);
    }
  }

  function addTask(eId, taskList, taskForm) {
    const add = true;
    const myProject = JSON.parse(localStorage.getItem('myProject'));
    const tasks = myProject[eId]._task;
    const inTaskTitle = document.getElementById('titleInput').value;
    const inTaskDesc = document.getElementById('descriptionInput').value;
    const inTaskDate = document.getElementById('dateInput').value;
    const inTaskPriority = document.getElementById('priorityInput').value;
    const inTaskCheck = document.getElementById('checkInput');

    let checkStatus;
    if (inTaskCheck.checked === true) {
      checkStatus = true;
    } else {
      checkStatus = false;
    }

<<<<<<< HEAD
    const task = new ToDo(inTaskTitle, inTaskDesc, inTaskDate, inTaskPriority, checkStatus);
=======
    const task = new ToDo (inTaskTitle, inTaskDesc, inTaskDate, inTaskPriority, checkStatus)
   
 
     if (Validation.validateTask(task, '') === true) {
    tasks.push(task)
    Storage.storageMyProjects(myProject)
   
    return (myProject)
  
     } else {
>>>>>>> 47134e3ca7d144bd74e675466e46952bc531097c

    if (Validation.validateTask(task) === true) {
      tasks.push(task);
      Storage.storageMyProjects(myProject);

      return (myProject);
    }

    return Validation.validateTask(task);
  }
  return {
    addTask,
    addProjectToProjects,
  };
})();

export default add;