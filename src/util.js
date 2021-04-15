const Project = require('./project');

const ToDo = require('./todo');

const project1 = () => {
  const projectdef = new Project('Project Default');
  const todo1 = new ToDo('Task title', 'desc', '2021-04-19  ', 'High', 'done');
  const todo2 = new ToDo('Task title2', 'desc2', '2021-04-11  ', 'Medium', 'nodone');
  projectdef.task = [todo1, todo2];

  return projectdef;
};

module.exports = project1;