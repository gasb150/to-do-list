const ToDO = require('../src/todo');

describe('ToDO class', () => {
  let todo;
  beforeEach(() => {
    todo = new ToDO('data');
  });

  it('should create a task', () => {
    expect(typeof todo).toBe('object');
  });
});