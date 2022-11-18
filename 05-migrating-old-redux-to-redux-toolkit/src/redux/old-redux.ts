import { createStore } from "redux"

export const TYPES = {
  INCREMENT: "counter/increment",
  INCREMENT_AMOUNT: "counter/incrementAmount",
}

const initialState = {
  counter: {
    value: 0
  }
}

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.INCREMENT:
      return {
        ...state,
        counter: {
          value: state.counter.value + 1
        }
      }
    case TYPES.INCREMENT_AMOUNT:
      return {
        ...state,
        counter: {
          value: state.counter.value + action.payload
        }
      }
  
    default:
      return state;
  }
}

export const store = createStore(
  counterReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)