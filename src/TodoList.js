import React, { Component } from 'react'
import { connect } from 'react-redux'

class TodoList extends Component {

  renderItems = () => {
    return this.props.items.map((i) => {
      return (
        <li key={i.id}>
          <input
            type="checkbox"
            checked={i.done}
            onChange={() => {this.props.onItemToggle(i.id)}}
          />
          {i.name}
          <button onClick={(e) => this.props.onItemDelete(i.id)}>Remove</button>
        </li>
      )
    })
  }

  render () {
    return (
      <React.Fragment>
        <div>
          <input value={this.props.name} type="text" onChange={(e) => this.props.onNameChange(e.target.value)} autoFocus/>
          <button onClick={this.props.onItemAdd}>Add item</button>
        </div>
        <ul>
          {this.renderItems()}
        </ul>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
    name: state.name
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onItemAdd: () => dispatch({type: 'ADD_TODO'}),
    onItemDelete: id => dispatch({type: 'DELETE_TODO', id}),
    onNameChange: name => dispatch({type: 'CHANGE_NAME', name}),
    onItemToggle: id => dispatch({type: 'TOGGLE_TODO', id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
