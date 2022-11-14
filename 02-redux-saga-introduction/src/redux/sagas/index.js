import { takeLatest, put, all, call, select } from "redux-saga/effects"

function apiGet(text, todosLength) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text + " " + todosLength)
    }, 2000)
  })
}

function* asyncAddTodo(action) {
  try {
    const todos = yield select(state => state.todos)

    const response = yield call(apiGet, action.payload.text, todos.length)

    yield put({ type: "ADD_TODO", payload: { text: response }})
  } catch (error) {
    yield put({ type: "ACTION_ERROR" })
  }
}

export default function* root() {
  yield all([
    takeLatest("ASYNC_ADD_TODO", asyncAddTodo)
  ])
}