class Project {

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

};

module.exports = Project
