const Validation = (() => {
  function validateProject(Project) {
    let validation = true;
    if (Project._name === '') {
      const projectAlert = document.getElementById('projectMsj');
      projectAlert.innerHTML = "Project can't be blank";
      projectAlert.style.color = 'Red';

      validation = false;
    } else {
      const projectAlert = document.getElementById('projectMsj');
      projectAlert.innerHTML = '';
    }

    return validation;
  }

  function validateTask(task, type) {
    let validation = true;
    if (task._title === '') {
      const title = document.getElementById(`titlemsj${type}`);
      title.innerHTML = "Title can't be blank";
      title.style.color = 'Red';

      validation = false;
    } else {
      const projectAlert = document.getElementById(`titlemsj${type}`);
      projectAlert.innerHTML = '';
    }

    if (task._desc === '') {
      const title = document.getElementById(`descmsj${type}`);
      title.innerHTML = "Description can't be blank";
      title.style.color = 'Red';

      validation = false;
    } else {
      const title = document.getElementById(`descmsj${type}`);
      title.innerHTML = '';
    }

    if (task._date === '') {
      const title = document.getElementById(`datemsj${type}`);
      title.innerHTML = "Date can't be blank";
      title.style.color = 'Red';

      validation = false;
    } else {
      const title = document.getElementById(`datemsj${type}`);
      title.innerHTML = '';
    }
    return validation;
  }
  return {
    validateTask,
    validateProject,
  };
})();

export default Validation;
