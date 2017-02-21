export function getWeather(id) {
  return {
    type: 'GET_WEATHER',
    id
  }
}


// export function editTodo(id, text) {
//   return {
//     type: 'EDIT_TODO',
//     id,
//     text,
//     date: Date.now()
//   };
// }
// export function deleteTodo(id) {
//   return {
//     type: 'DELETE_TODO',
//     id
//   };
// }
