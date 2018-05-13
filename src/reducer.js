import { mapper } from './reducerMapper';

const defaultState = {
  items: [],
  name: ''
}
export const todoApp = (state = defaultState, action) => {
  return mapper(state, action);
}
