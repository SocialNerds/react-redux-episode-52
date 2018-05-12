import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import TodoList from './TodoList'
import { createStore } from 'redux'
import { todoApp } from './reducer'

const defaultState = {
  items: [
    {name: 'test', id: 1, done: false}
  ],
  name: ''
};

const store = createStore(todoApp, defaultState)
store.subscribe(() => {
  console.log(store.getState())
})
store.dispatch({type: 'CHANGE_NAME', name: 'Hello world'})
store.dispatch({type: 'ADD_TODO'})

ReactDOM.render(<TodoList item={{test: 'name'}}/>, document.getElementById('root'))
