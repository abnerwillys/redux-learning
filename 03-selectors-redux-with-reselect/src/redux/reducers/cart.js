const INITIAL_STATE = {
  items: [],
  shipping_values: 0
}

function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD":
      return { ...state, items: [...state.items, { price: Math.floor(Math.random() * 400) + 1 } ] }
    case "SET_SHIPPING":
      return { ...state, shipping_value: Math.floor(Math.random() * 100) + 1 }
 
    default:
      return state
  }
}

export default cart