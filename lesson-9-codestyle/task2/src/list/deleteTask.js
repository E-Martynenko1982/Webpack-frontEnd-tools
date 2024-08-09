import { getItem, setItem } from './storage';
import { renderTasks } from './render';

export const deleteTask = (e) => {
  const taskId = e.target.dataset.id;
  const tasksList = getItem('tasksList') || [];
  const updateTasksList = tasksList.filter((task) => task.id !== taskId);

  setItem('tasksItem', updateTasksList);
  renderTasks();
};
