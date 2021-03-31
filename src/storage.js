import Project, {project1} from './project'

const Storage = (() => {
function storageMyTasks(myTask) {
    localStorage.setItem('myTask', JSON.stringify(myTask));
  }

  function storageMyProjects(myProject) {
    localStorage.setItem('myProject', JSON.stringify(myProject));
    
  }

   function removeTask(id) {
    id = id;
    const myTask = JSON.parse(localStorage.getItem('myTask'));
    myTask.splice(id, 1);
    storageMyTask(myTask);
  }
   function removeProject(id) {
    id = id;
    const myProject = JSON.parse(localStorage.getItem('myProject'));
    myProject.splice(id, 1);
    storageMyLibrary(myProject);
  }
 return {
     storageMyTasks,
     storageMyProjects,
     removeTask,
     removeProject

  }

})()

export default Storage;