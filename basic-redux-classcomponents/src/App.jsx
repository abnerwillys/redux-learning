import React, { Component } from 'react';
import { Provider } from 'react-redux'
import Counter from './components/Counter';
import TodoList from './components/TodoList';
import store from './redux/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <TodoList />
          <Counter />
        </div>
      </Provider>
    )
  }
}

export default App
