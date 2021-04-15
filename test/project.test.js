const Project = require('../src/project');

describe('Project class', () => {
  let project;
  beforeEach(() => {
    project = new Project('data');
  });

  it('should create a project', () => {
    expect(typeof project).toBe('object');
  });
});
