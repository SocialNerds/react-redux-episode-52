export const addTodo = (state) => ({items: [...state.items, {id: Date.now(), name: state.name, done: false}], name: '' })
export const changeName = (name) => () => ({name})

export const deleteTodo = (id) => (state) => ({items: state.items.filter(i => i.id !== id)})

export const toggleTodo = (id) => (state) => {
  const items = state.items.map((item) => {
    return id !== item.id ? item : Object.assign({}, item, {done: !item.done});
  })

  return {items}
}
