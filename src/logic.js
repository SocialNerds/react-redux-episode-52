export const addTodo = (state) => {
  const newItem = {
    id: Date.now(),
    name: state.name,
    done: false
  };
  return {...state, items: [...state.items, newItem], name: ''};
}

export const changeName = (state, action) => {
  return {...state, name: action.name}
}

export const deleteTodo = (state, action) => {
  const items = state.items.filter(i => i.id !== action.id)
  return {...state, items}
}

export const toggleTodo = (state, action) => {
  const items = state.items.map((item) => {
    return action.id !== item.id ? item : {...item, done: !item.done}
  })

  return {...state, items}
}
