import { Provider } from 'react-redux'
import Cart from './components/Cart';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Cart />
      </div>
    </Provider>
  );
}

export default App;
