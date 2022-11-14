import React from 'react';

import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import * as todoActions from "../redux/actions/todos"

const TodoList = ({ todos, addTodo }) => (
  <div>
    <button onClick={() => addTodo("Fazer Café")}>Novo Todo</button>

    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  </div>
)

const mapStateToProps = state => ({
  todos: state.todos
})
const mapDispatchToProps = dispatch => bindActionCreators(todoActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
