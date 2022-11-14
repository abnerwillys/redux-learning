function todos(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Math.random(), text: action.payload }]
  
    default:
      return state
  }
}

export default todos