<<<<<<< HEAD
const Project = require('../src/project')

describe ('Project class', () =>{
    let project;
    beforeEach(() =>{
        project = new Project('data')
    })


it ('should create a project', () =>{
    expect(typeof project).toBe('object')
})


} )
=======
const Project = require('../src/project');

describe('Project class', () => {
  let todo;
  beforeEach(() => {
    todo = new Project('data');
  });

  it('should create a project', () => {
    expect(typeof todo).toBe('object');
  });
});
>>>>>>> 5101bb6e5c9d0d116991f61adaba1e0fd2c46609
