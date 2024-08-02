const tasks = [
  {
    id: 1,
    text: 'Test a car',
    done: false,
  },
  {
    id: 2,
    text: 'Swim in river',
    done: false,
  },
  {
    id: 3,
    text: 'Dinner with wife',
    done: false,
  },
  {
    id: 4,
    text: 'Learn task with Gromcode',
    done: true,
  },
  {
    id: 5,
    text: 'Take a hour of english lesson',
    done: true,
  }
];

// Функція renderTasks приймає масив завдань (tasksList) та відображає їх у вигляді списку на сторінці.
const listElem = document.querySelector(".list"); // елемент списку ul
const renderTasks = tasksList => {

  listElem.innerHTML = ""; // очистка списку перед повторним рендерингом

  const listItemsElems = tasksList
    // сортування - невиконані таски ідуть перші
    .sort((a, b) => a.done - b.done)
    // створює елементи списку для кожного завдання
    .map(({ id, text, done }) => {
      // створюємо елементи списку і додаємо для них класи з перевіркою якщо статус done-true то навішуємо інший класс для елементів що зроблені(зачеркнуті)

      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');

      // створення і налаштування чекбокса
      const checkboxElem = document.createElement('input');
      checkboxElem.setAttribute('type', 'checkbox');
      checkboxElem.setAttribute('data-id', id);
      checkboxElem.checked = done;
      checkboxElem.dataset.taskId = id;
      checkboxElem.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      // додавання чекбокса і тексту задачі в елемент списку
      listItemElem.append(checkboxElem, text);

      return listItemElem;
    });
  // додає всі створені елементи до списку на сторінці.
  listElem.append(...listItemsElems);

};

// Ця функція перемикає стан завдання (виконана/невиконана) при натисканні на чекбокс
const onCheckboxClick = e => {

  const isCheckbox = e.target.matches('.list__item-checkbox'); // Перевіряємо, чи елемент, на який клацнули, є чекбоксом з класом 'list__item-checkbox'

  if (!isCheckbox) {
    return; // Якщо елемент не є чекбоксом, виходимо з функції
  }
  const taskId = parseInt(e.target.dataset.taskId, 10); // Отримуємо значення атрибуту data-task-id, яке зберігає id завдання
  const taskData = tasks.find(task => task.id === taskId); // Знаходимо відповідне завдання в масиві tasks за допомогою функції find
  // Порівнюємо task.id (яке є числом) з taskId (також числом після parseInt)

  if (taskData) { // Якщо завдання знайдено (taskData не є undefined)
    taskData.done = e.target.checked; // Оновлюємо значення властивості 'done' завдання відповідно до стану чекбокса
    renderTasks(tasks); // повторне оновлення задач
  }
};

listElem.addEventListener('click', onCheckboxClick); // вішаємо обробник чекбоксу на потрібний елемент списку

// Ця функція створює нове завдання і додає її до масиву завдань при натисканні на кнопку "Create".
export const createTask = () => {
  const taskInputElem = document.querySelector('.task-input');
  const text = taskInputElem.value.trim(); // отримання значень вводу без пробілів

  if (!text) return; // перевірка що поле не пусте

  tasks.push({
    id: Date.now(), // замість ід - поточна дата
    text,
    done: false,
  }); // додавання задачі в масив + створення нової задачі
  taskInputElem.value = ''; // очистка поля вводу
  renderTasks(tasks); // повторний рендеринг списку
};

// Додавання обробника події на кнопку Create. При натисканні на кнопку викликається функція createTask.
const createBtnElem = document.querySelector('.create-task-btn');
createBtnElem.addEventListener('click', createTask); //

// Виклик функції renderTasks для початкового рендерингу списку завдань, навіть якщо він порожній
renderTasks(tasks);