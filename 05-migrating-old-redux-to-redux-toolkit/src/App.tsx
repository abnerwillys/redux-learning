import reactLogo from './assets/react.svg'
import './App.css'
import { connect } from 'react-redux'
import { TYPES } from './redux/old-redux'

function App({ count, increment, incrementAmount }) {
  const handleIncrement = () => {
    increment()
  }
  const handleIncrementAmount = () => {
    incrementAmount(5)
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

const mapStateToProps = (state) => ({
  count: state.counter.value
})

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: TYPES.INCREMENT }),
  incrementAmount: (amount) => dispatch({ type: TYPES.INCREMENT_AMOUNT, payload: amount })
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
