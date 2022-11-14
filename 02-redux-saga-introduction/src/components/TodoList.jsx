import React from 'react';

import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import * as todoActions from "../redux/actions/todos"

const TodoList = ({ todos, requestTodoList }) => (
  <div>
    <button onClick={() => requestTodoList("Fazer Café")}>Carregar Todo</button>

    {todos.loading && <p> Carregando...</p>}

    <ul>
      {todos.data.map(todo => (
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
