import { initTodoListHandlers } from './list/todoList';
import { renderTasks } from './list/render';
import { getTasksList } from './list/tasksGateWay';
import { setItem } from './list/storage';
import './index.scss';
import './list/list.scss';

document.addEventListener('DOMContentLoaded', () => {
  getTasksList()
    .then((tasksList) => {
      setItem('tasksList', tasksList);
      renderTasks();
    });

  initTodoListHandlers();
});

const onStorageChange = (e) => {
  if (e.key === 'tasksList') {
    renderTasks();
  }
};
window.addEventListener('storage', onStorageChange);

// 1.Get data from server
// 2.Save data to front-end storage