import { useState } from 'react'
import './App.css'
import ResultsArray from './components/ResultsArray'
import TestArray from './components/TestArray'

function App() {
  const [route, setRoute] = useState(['test', 'results'])
  window.addEventListener('load', () => {
    setRoute('results')
  })

  return (
    <div className="App">
      <div className="button-holder">
        <button
          onClick={() => {
            setRoute('test')
          }}
        >
          Test
        </button>
        <button
          onClick={() => {
            setRoute('results')
          }}
        >
          Results
        </button>
      </div>

      {route === 'test' && <TestArray />}
      {route === 'results' && <ResultsArray />}
    </div>
  )
}

export default App
