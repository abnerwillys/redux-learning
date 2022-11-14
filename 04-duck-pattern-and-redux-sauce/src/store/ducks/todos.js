import { createActions, createReducer } from "reduxsauce"

/**
 * Creating Action types & creators(actions)
 */
export const { Types, Creators } = createActions({
  addTodo: ["text"], // Text is the parameter of the action
  toggleTodo: ["id"], // id is the parameter of the action
  removeTodo: ["id"], // id is the parameter of the action
})

/**
 * Creating Reducer Handlers
 */

// Instead of use SwitchCase, we define separated the function and just map on the end!

const INITIAL_STATE = []

const add = (state = INITIAL_STATE, action) => [
  ...state,
  { id: Math.random(), text: action.text, complete: false }
]

const toggle = (state = INITIAL_STATE, action) => state.map(
  todo => todo.id === action.id 
  ? { ...todo, complete: !todo.complete } 
  : todo
)

const remove = (state = INITIAL_STATE, action) => state.filter(
  todo => todo.id !== action.id
)

/**
 * Creating Reducer
 */
export default createReducer(INITIAL_STATE, {
  [Types.ADD_TODO]: add,
  [Types.TOGGLE_TODO]: toggle,
  [Types.REMOVE_TODO]: remove,
})