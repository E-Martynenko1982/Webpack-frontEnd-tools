import { renderTasks } from './render.js';
import { getItem, setItem } from './storage.js';
import { getTasksList, updateTask, deleteTask } from './tasksGateWay.js';

export const onToggleTask = e => {
  const isCheckbox = e.target.classList.contains('list__item-checkbox');
  if (!isCheckbox) {
    return;
  }
  const taskId = e.target.dataset.id;
  const tasksList = getItem('tasksList');
  const { text, createDate } = tasksList
    .find(task => task.id === taskId);

  const done = e.target.checked;

  const updatedTask = {
    text,
    createDate,
    done,
    finishDate: done ? new Date().toISOString() : null,
  };

  updateTask(taskId, updatedTask)
    .then(() => getTasksList())
    .then(newTasksList => {
      setItem('tasksList', newTasksList);
      renderTasks()
    });

  deleteTask(taskId)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};

// 1. Prepare data
// 2. WUpdate data in  DB
// 3. Read new data from server
// 4. Save new data to front-end storage
// 5. Update UI based on new data