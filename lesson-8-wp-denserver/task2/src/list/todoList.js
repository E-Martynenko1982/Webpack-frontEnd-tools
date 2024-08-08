import { onCreateTask } from './createTask.js';
import { onToggleTask } from './updateTask.js';
import { deleteTask } from './deleteTask.js';

export const initTodoListHandlers = () => {
  const createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', onCreateTask);

  const listElem = document.querySelector(".list");
  listElem.addEventListener("click", onListClick);
};

const onListClick = (event) => {
  const isCheckbox = event.target.classList.contains('list__item-checkbox');
  const isDeleteBtn = event.target.classList.contains('list__item__delete-btn');

  if (isCheckbox) {
    onToggleTask(event);
  }

  if (isDeleteBtn) {
    deleteTask(event);
  }
};