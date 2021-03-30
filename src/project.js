import ToDo from './todo'



export default class Project {
    constructor(name){
        this._name = name;
        this._task = []
    }
    get name (){
        return this._name;
    }
    get task(){
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
  const projectdef = new Project('title');
  const todo1 = new ToDo("title","desc","date","priority","check");
  projectdef.task = todo1;
  return projectdef;
  })();


  
