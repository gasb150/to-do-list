import Project, { project1 } from './project';

const Storage = (() => {
  function storageMyProjects(myProject) {
    localStorage.setItem('myProject', JSON.stringify(myProject));
  }

  function removeProject(id) {
    id = id;
    const myProject = JSON.parse(localStorage.getItem('myProject'));
    myProject.splice(id, 1);
    storageMyProjects(myProject);

    window.location.reload();
  }
  return {
    storageMyProjects,

    removeProject,
  };
})();

export default Storage;
