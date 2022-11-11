import React from 'react';
import { connect } from "react-redux"

const Counter = (props) => {
  return (
    <div>
      Voce tem {props.todos.length} todos.
    </div>
  )
}

const mapStateToProps = state => ({
  todos: state.todos
})
export default connect(mapStateToProps)(Counter)
