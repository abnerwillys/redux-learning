import reactLogo from './assets/react.svg'
import './App.css'
import { useDispatch } from 'react-redux'
import { increment, incrementAmount } from './redux/toolkit-redux/features/counter/counter-slice'
import { useAppSelector } from './redux/toolkit-redux/hooks'

function App() {
  const count = useAppSelector(state => state.counter.value)
  const dispatch = useDispatch()

  const handleIncrement = () => {
    dispatch(increment())
  }
  const handleIncrementAmount = () => {
    dispatch(incrementAmount(5))
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          count is {count}
        </p>
        <button onClick={handleIncrement}>
          increment 1
        </button>
        <button onClick={handleIncrementAmount}>
          increment 5
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App

/* === Redux Antigo === */

/* const mapStateToProps = (state) => ({
  count: state.counter.value
})

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: TYPES.INCREMENT }),
  incrementAmount: (amount) => dispatch({ type: TYPES.INCREMENT_AMOUNT, payload: amount })
})

export default connect(mapStateToProps, mapDispatchToProps)(App) */
