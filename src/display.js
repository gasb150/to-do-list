// eslint-disable-next-line no-underscore-dangle

import add from './add';
import Storage from './storage';
import Project, { project1 } from './project';

const show = (() => {
  function showProjects(content) {
    const myProject = JSON.parse(localStorage.getItem('myProject'));

    if (myProject === null) {
      Storage.storageMyProjects([project1]);
    }

    for (let i = 0; i < myProject.length; i += 1) {
      const removeButton = document.createElement('button');
      removeButton.classList.add('remove');
      removeButton.id = i;
      const projectTitle = document.createElement('button');
      projectTitle.setAttribute('id', i);

      const buttonContent = document.createElement('div');
      projectTitle.innerHTML = myProject[i]._name;

      content.appendChild(buttonContent);
      buttonContent.appendChild(removeButton);
      buttonContent.appendChild(projectTitle);

      removeButton.addEventListener('click', () => {
        Storage.removeProject(this.id);
      });
      removeButton.innerHTML = 'Remove';
    }
  }

  function showTask(eId) {
    const task = document.getElementById('task');
    const taskEdit = document.createElement('div');
    taskEdit.id = 'editForm';
    const taskList = document.createElement('div');
    taskList.id = 'taskList';
    let myProject = JSON.parse(localStorage.getItem('myProject'));
    const addTaskButton = document.createElement('button');
    const taskForm = taskFormFields(eId, '');

    task.innerHTML = '<h2>Task</h2>';
    addTaskButton.innerHTML = 'Add task';

    addTaskButton.setAttribute('type', 'submit');
    addTaskButton.classList.add('submit');

    const allTask = currentTaskList(myProject, eId, taskList);

    taskForm.appendChild(addTaskButton);

    taskList.innerHTML = allTask;

    addTaskButton.addEventListener('click', (e) => {
      e.preventDefault();

      myProject = add.addTask(eId);

      if (myProject !== false) {
        taskList.innerHTML = '';
        taskList.innerHTML = currentTaskList(myProject, eId, taskList);
        showTask(eId);
      }
    });
    task.appendChild(taskEdit);
    task.appendChild(taskList);
    task.appendChild(taskForm);
    statusChange(eId, myProject);
    deleteTask(eId, myProject);
    UpdateAll(eId, myProject);
  }

  function taskFormFields(eId, type) {
    const taskForm = document.createElement('form');
    const taskLabelTitle = document.createElement('label');
    const taskTitle = document.createElement('input');
    const taskTitleMsj = document.createElement('p');
    const taskLabelDesc = document.createElement('label');
    const taskDesc = document.createElement('input');
    const taskDescMsj = document.createElement('p');
    const taskLabelDate = document.createElement('label');
    const taskDate = document.createElement('input');
    const taskDateMsj = document.createElement('p');
    const taskLabelPriority = document.createElement('label');
    const taskPriority = document.createElement('select');
    const taskHigh = document.createElement('option');
    const taskMedium = document.createElement('option');
    const taskLow = document.createElement('option');
    const taskLabelCheck = document.createElement('label');
    const taskCheck = document.createElement('input');

    taskLabelTitle.setAttribute('for', 'Title');
    taskTitle.setAttribute('type', 'text');
    taskTitle.setAttribute('id', `titleInput${type}`);
    taskTitle.setAttribute('name', 'title');

    taskLabelDesc.setAttribute('for', 'Description');
    taskDesc.setAttribute('type', 'text');
    taskDesc.setAttribute('id', `descriptionInput${type}`);
    taskDesc.setAttribute('name', 'description');

    taskLabelDate.setAttribute('for', 'Due date');
    taskDate.setAttribute('type', 'date');
    taskDate.setAttribute('id', `dateInput${type}`);
    taskDate.setAttribute('name', 'date');

    taskLabelPriority.setAttribute('for', 'Priority');
    taskPriority.setAttribute('type', 'text');
    taskPriority.setAttribute('id', `priorityInput${type}`);

    taskHigh.setAttribute('value', 'High');
    taskMedium.setAttribute('value', 'Medium');
    taskLow.setAttribute('value', 'Low');
    taskHigh.innerHTML = 'High';
    taskMedium.innerHTML = 'Medium';
    taskLow.innerHTML = 'Low';

    taskLabelCheck.setAttribute('for', 'Check');
    taskCheck.setAttribute('type', 'checkbox');
    taskCheck.setAttribute('id', `checkInput${type}`);
    taskCheck.setAttribute('name', 'check');
    taskCheck.setAttribute('value', 'done');
    taskCheck.classList.add('check');

    taskTitleMsj.id = `titlemsj${type}`;
    taskDescMsj.id = `descmsj${type}`;
    taskDateMsj.id = `datemsj${type}`;

    taskLabelTitle.innerHTML = '<h4>Title</h4>';
    taskLabelDesc.innerHTML = '<h4>Description</h4>';
    taskLabelDate.innerHTML = '<h4>Due Date</h4>';
    taskLabelPriority.innerHTML = '<h4>Priority</h4>';
    taskLabelCheck.innerHTML = '<h4>Complete</h4>';

    const checked = document.createElement('div');
    checked.classList.add('check-section');

    taskForm.appendChild(taskLabelTitle);

    taskForm.appendChild(taskTitle);
    taskForm.appendChild(taskTitleMsj);
    taskForm.appendChild(taskLabelDesc);
    taskForm.appendChild(taskDesc);
    taskForm.appendChild(taskDescMsj);

    taskForm.appendChild(taskLabelDate);
    taskForm.appendChild(taskDate);
    taskForm.appendChild(taskDateMsj);
    taskForm.appendChild(taskLabelPriority);
    taskForm.appendChild(taskPriority);
    taskLabelCheck.appendChild(taskCheck);
    checked.appendChild(taskLabelCheck);
    checked.appendChild(taskCheck);
    taskForm.appendChild(checked);

    taskPriority.appendChild(taskHigh);
    taskPriority.appendChild(taskMedium);
    taskPriority.appendChild(taskLow);

    return taskForm;
  }

  function currentTaskList(myProject, eId, taskList) {
    for (let i = 0; i < myProject[eId]._task.length; i += 1) {
      const currentTask = document.createElement('div');
      currentTask.classList.add('card');
      const currentTaskTitle = document.createElement('div');
      currentTaskTitle.classList.add('card-title');
      const currentTaskDesc = document.createElement('div');
      const currentTaskDate = document.createElement('div');
      const currentTaskPriority = document.createElement('div');
      const currentTaskCheck = document.createElement('div');
      const currentTaskDelete = document.createElement('div');
      const currentTaskEdit = document.createElement('div');

      currentTaskTitle.innerHTML = myProject[eId]._task[i]._title;
      currentTaskDesc.innerHTML = myProject[eId]._task[i]._desc;
      currentTaskDate.innerHTML = myProject[eId]._task[i]._date;
      currentTaskPriority.innerHTML = myProject[eId]._task[i]._priority;

      const status = myProject[eId]._task[i]._check;
      let value;
      let stats;
      if (status === true) {
        value = 'checked';
        stats = 'Done';
      } else {
        value = '';
        stats = 'Undone';
      }
      currentTaskCheck.innerHTML = `<button class="taskStatus" type='submit' id=myCheck${i} ${value}>${stats}</button>`;
      currentTaskDelete.innerHTML = `<button class="taskDelete" type='submit' id=delete${i} ${value}>Remove</button>`;
      currentTaskEdit.innerHTML = `<button class="taskEdit" type='submit' id=edit${i} ${value}>"."</button>`;
      currentTask.appendChild(currentTaskTitle);
      currentTask.appendChild(currentTaskDesc);
      currentTask.appendChild(currentTaskDate);
      currentTask.appendChild(currentTaskPriority);
      currentTask.appendChild(currentTaskCheck);
      currentTask.appendChild(currentTaskDelete);
      currentTask.appendChild(currentTaskEdit);
      taskList.appendChild(currentTask);
    }
    return taskList.outerHTML;
  }

  function statusChange(eId, myProject) {
    const statusBtns = Array.from(document.getElementsByClassName('taskStatus'));

    statusBtns.forEach(btn => btn.addEventListener('click', (e) => {
      const { target } = e;
      const status = target.innerHTML;
      if (status === 'Done') {
        target.innerHTML = 'Undone';
        target.style.backgroundColor = '#337ab7';
        const st = false;
        UpdateStatus(eId, target, st, myProject);
      } else {
        const st = true;
        target.innerHTML = 'Done';
        target.style.backgroundColor = '#4cae4c';
        UpdateStatus(eId, target, st, myProject);
      }
    }));
  }

  function UpdateStatus(eId, target, st, myProject) {
    const id = target.id.slice(7);

    myProject[eId]._task[id]._check = st;

    Storage.storageMyProjects(myProject);
  }

  function UpdateAll(eId, myProject) {
    const editBtns = Array.from(document.getElementsByClassName('taskEdit'));
    editBtns.forEach(btn => btn.addEventListener('click', (e) => {
      const { target } = e;
      const editForm = document.getElementById('editForm');
      const updateBtn = document.createElement('button');
      updateBtn.id = 'updateEditBtn';
      updateBtn.innerHTML = 'Update';
      const id = target.id.slice(6);
      editForm.innerHTML = '';
      editForm.appendChild(taskFormFields(eId, 'Edit'));
      editForm.appendChild(updateBtn);

      const i = e.target.id.slice(4);

      const editTaskTitle = document.getElementById('titleInputEdit');
      const editTaskDesc = document.getElementById('descriptionInputEdit');
      const editTaskDate = document.getElementById('dateInputEdit');
      const editTaskPriority = document.getElementById('priorityInputEdit');
      const currentTask = myProject[eId]._task[i];
      editTaskTitle.value = currentTask._title;
      editTaskDesc.value = currentTask._desc;
      editTaskDate.value = currentTask._date;
      editTaskPriority.value = currentTask._priority;

      updateBtn.addEventListener('click', () => {
        currentTask._title = editTaskTitle.value;
        currentTask._desc = editTaskDesc.value;
        currentTask._date = editTaskDate.value;
        currentTask._priority = editTaskPriority.value;
        Storage.storageMyProjects(myProject);
        showTask(eId);
      });
    }));
  }

  function deleteTask(eId, myProject) {
    const deleteBtns = Array.from(document.getElementsByClassName('taskDelete'));

    deleteBtns.forEach(btn => btn.addEventListener('click', (e) => {
      const { target } = e;
      const id = target.id.slice(6);

      myProject[eId]._task.splice(id, 1);
      Storage.storageMyProjects(myProject);
      const taskList = document.getElementById('taskList');

      showTask(eId);
    }));
  }

  function projects() {
    const project = document.getElementById('project');
    const addProjectButton = document.createElement('button');
    addProjectButton.classList.add('addButton');

    project.innerHTML = '<h2>Projects</h2>';
    addProjectButton.innerHTML = '+';
    const form = document.createElement('form');
    const label = document.createElement('label');
    const input = document.createElement('input');
    const projectMsj = document.createElement('p');
    label.innerHTML = '<b>Add project</b>';

    label.setAttribute('for', 'ptitle');
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'ptitle');
    input.setAttribute('name', 'ptitle');
    projectMsj.id = 'projectMsj';
    addProjectButton.addEventListener('click', () => {
      add.addProjectToProjects();
    });

    form.appendChild(label);
    form.appendChild(input);

    project.appendChild(addProjectButton);
    project.appendChild(form);
    project.appendChild(projectMsj);

    return project;
  }

  return {
    showProjects,
    showTask,
    currentTaskList,
    projects,

  };
})();

export default show;