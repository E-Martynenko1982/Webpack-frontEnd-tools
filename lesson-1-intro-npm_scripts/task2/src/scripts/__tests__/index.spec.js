import { createTask } from "../index";

const renderTasks = jest.fn();
let tasks = [];

beforeEach(() => {
  // Очистка tasks и mock функций перед каждым тестом
  tasks = [];
  renderTasks.mockClear();
  document.body.innerHTML = '<input class="task-input" />';
});

test('createTask should add a task when input is not empty', () => {
  const taskInputElem = document.querySelector('.task-input');
  taskInputElem.value = 'New Task';

  createTask();

  expect(tasks.length).toBe(1);
  expect(tasks[0].text).toBe('New Task');
  expect(taskInputElem.value).toBe('');
  expect(renderTasks).toHaveBeenCalledWith(tasks);
});

test('createTask should not add a task when input is empty', () => {
  const taskInputElem = document.querySelector('.task-input');
  taskInputElem.value = '  ';

  createTask();

  expect(tasks.length).toBe(0);
  expect(renderTasks).not.toHaveBeenCalled();
});