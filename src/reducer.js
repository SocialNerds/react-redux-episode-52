import { addTodo, changeName, deleteTodo, toggleTodo } from './logic'

export const todoApp = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return addTodo(state)
    case 'DELETE_TODO':
      return deleteTodo(state, action)
    case 'TOGGLE_TODO':
      return toggleTodo(state, action)
    case 'CHANGE_NAME':
      return changeName(state, action)
    default:
      return state;
  }
}
