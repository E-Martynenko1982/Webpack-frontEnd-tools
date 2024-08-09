import { onCreateTask } from './createTask';
import { onToggleTask } from './updateTask';
import { deleteTask } from './deleteTask';

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

export const initTodoListHandlers = () => {
  const createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', onCreateTask);

  const listElem = document.querySelector('.list');
  listElem.addEventListener('click', onListClick);
};
