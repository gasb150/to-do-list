import ToDo from './todo'

export default class Project {
  constructor (name) {
    this._name = name
    this._task = []
  }
  get name () {
    return this._name
  }
  get task () {
    return this._task
  }
  set name (name) {
    this._name = name
  }
  set task (task) {
    this._task = task
  }
}

export const project1 = (() => {
  const projectdef = new Project('Project title')
  const todo1 = new ToDo('Task title', 'desc', 'date', 'priority', 'done')
  const todo2 = new ToDo('Task title2', 'desc2', 'date2', 'priority2', 'nodone')
  projectdef.task = [todo1, todo2]

  return projectdef
})()
