import { renderTasks } from './render.js';
import { setItem } from './storage.js';
import { createTask, getTasksList } from './tasksGateWay.js';

export const onCreateTask = () => {
  const taskInputElem = document.querySelector('.task-input');
  const text = taskInputElem.value.trim();

  if (!text) return;
  taskInputElem.value = '';

  // 1
  const newTask = {
    text,
    done: false,
    createDate: new Date().toISOString(),
  };
  // 2
  createTask(newTask)
    .then(() => getTasksList()) // 3
    .then(newTasksList => {
      setItem('tasksList', newTasksList); // 4
      renderTasks(); // 5
    });

};

// 1. Prepare data
// 2. Write data to DB
// 3. Read new data from server
// 4. Save new data to front-end storage
// 5. Update UI based on new data