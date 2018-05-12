import { addTodo, changeName, deleteTodo, toggleTodo } from './logic'

const defaultState = {
  items: [],
  name: ''
}
export const todoApp = (state = defaultState, action) => {
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
      return state
  }
}
