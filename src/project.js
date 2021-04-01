import ToDo from './todo';

export default class Project {
  constructor(name) {
    this._name = name;
    this._task = [];
  }

  get name() {
    return this._name;
  }

  get task() {
    return this._task;
  }

  set name(name) {
    this._name = name;
  }

  set task(task) {
    this._task = task;
  }
}

export const project1 = (() => {
  const projectdef = new Project('Project Default');
  const todo1 = new ToDo('Task title', 'desc', '2021-04-19  ', 'High', 'done');
  const todo2 = new ToDo('Task title2', 'desc2', '2021-04-11  ', 'Medium', 'nodone');
  projectdef.task = [todo1, todo2];

  return projectdef;
})();
