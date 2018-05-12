import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import './index.css'
import TodoList from './TodoList'
import { todoApp } from './reducer'

const logger = store => next => action => {
  console.log(action, store.getState())
  next(action)
}

const middleware = applyMiddleware(logger)

const store = createStore(todoApp, middleware)

render(
  <Provider store={store}>
    <TodoList />
  </Provider>, document.getElementById('root'))
