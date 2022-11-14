import { takeLatest, put, all, call } from "redux-saga/effects"

function apiGet() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { id: 1, text: "Fazer café 1" },
        { id: 2, text: "Fazer café 2" },
        { id: 3, text: "Fazer café 3" },
        { id: 4, text: "Fazer café 4" },
      ])
    }, 2000)
  })
}

function* getTodoList() {
  try {
    const response = yield call(apiGet)

    yield put({ type: "SUCCESS_TODO_LIST", payload: { data: response }})
  } catch (error) {
    yield put({ type: "FAILURE_TODO_LIST" })
  }
}

export default function* root() {
  yield all([
    takeLatest("REQUEST_TODO_LIST", getTodoList)
  ])
}