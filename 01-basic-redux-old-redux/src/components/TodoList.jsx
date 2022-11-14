import React, { Component } from 'react';

import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import * as todoActions from "../redux/actions/todos"

class TodoList extends Component {
  state = {
    newTodoText: "",
  }

  constructor(props) {
    super(props)

    console.log(props)
  }

  addNewTodo = () => {
    this.props.addTodo(this.state.newTodoText)
    this.setState({ newTodoText: "" })
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map(todo => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>

        <input
          type="text"
          value={this.state.newTodoText}
          onChange={(e) => this.setState({ newTodoText: e.target.value })}
        />

        <button onClick={this.addNewTodo}>Criar Todo</button>
      </div>
    )
  }
}


// Esse method mapea o estado que queremos da store para as props do component
const mapStateToProps = state => ({
  todos: state.todos
})

// Esse method mapea as actions que queremos da store para as props do component
// Usamos o bindActionCreators para criar essa estrutura.
const mapDispatchToProps = dispatch => bindActionCreators(todoActions, dispatch)

// Por fim com o connect deixamos nosso component linkado com a store passando nossos maps, e o componente em questao.
// Dessa forma se o estado alterar, ou se dispararmos uma action, ele responderá de acordo.
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)