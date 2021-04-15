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