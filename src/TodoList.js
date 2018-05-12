import React, { Component } from 'react'
import { addTodo, changeName, deleteTodo, toggleTodo } from './logic'

export default class TodoList extends Component {
  state = {
    items: [
      {id: 1, name: 'Todo something', done: false},
      {id: 2, name: 'Todo something else', done: false},
      {id: 3, name: 'Todo something more', done: false},
    ]
  }
  renderItems = () => {
    return this.state.items.map((i) => {
      return (
        <li key={i.id}>
          <input
            type="checkbox"
            checked={i.done}
            onChange={() => {this.toggleItem(i.id)}}
          />
          {i.name}
          <button onClick={(e) => this.removeItem(i.id)}>Remove</button>
        </li>
      )
    })
  }

  removeItem = (id) => {
    this.setState(deleteTodo(id))
  }

  addItem = () => {
    this.setState(addTodo)
    this.name.value = ''
  }

  toggleItem = (id) => {
    this.setState(toggleTodo(id))
  }

  handleName = (e) => {
    this.setState(changeName(e.target.value))
  }

  render () {
    return (
      <React.Fragment>
        <div>
          <input ref={(c) => this.name = c} type="text" onChange={this.handleName} autoFocus={true}/>
          <button onClick={this.addItem}>Add item</button>
        </div>
        <ul>
          {this.renderItems()}
        </ul>
      </React.Fragment>
    )
  }
}