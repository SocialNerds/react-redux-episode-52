import { addTodo, changeName, deleteTodo, toggleTodo } from './logic'

export const mapper = (state, action) => {
  const maps = {
    'ADD_TODO': addTodo(state),
    'DELETE_TODO': deleteTodo(state, action),
    'TOGGLE_TODO': toggleTodo(state, action),
    'CHANGE_NAME': changeName(state, action),
    'DEFAULT': state
  };

  return maps[action.type] || state;
};
