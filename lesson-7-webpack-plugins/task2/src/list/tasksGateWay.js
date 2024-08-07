const baseUrl = 'https://6698d3872069c438cd7036bb.mockapi.io/api/V1/tasks';

export const getTasksList = () => {
  return fetch(baseUrl)
    .then(response => response.json())
  // .then(tasks => mapTasks(tasks))
}
export const createTask = taskData => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(taskData)
  });
}


export const updateTask = (taskId, taskData) =>
  fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(taskData)
  });

export const deleteTask = taskId =>
  fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  });

// const mapTasks = tasks => tasks
//   .map(({ _id, ...rest }) => ({ id: _id, ...rest }));




