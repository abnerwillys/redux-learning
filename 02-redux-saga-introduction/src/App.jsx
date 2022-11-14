import React, { Component } from 'react';
import { Provider } from 'react-redux'
import TodoList from './components/TodoList';
import store from './redux/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h1>App</h1>
          <TodoList />
        </div>
      </Provider>
    )
  }
}

export default App
