export const addTodo = (state) => {
  const newItem = {
    id: Date.now(),
    name: state.name,
    done: false
  };
  return Object.assign({}, state, {items: [...state.items, newItem], name: ''});
}

export const changeName = (state, action) => {
  return Object.assign({}, state, {name: action.name})
}

export const deleteTodo = (state, action) => {
  const items = state.items.filter(i => i.id !== action.id)
  return Object.assign({}, state, {items})
}

export const toggleTodo = (state, action) => {
  const items = state.items.map((item) => {
    return action.id !== item.id ? item : Object.assign({}, item, {done: !item.done})
  })

  return Object.assign({}, state, {items})
}
