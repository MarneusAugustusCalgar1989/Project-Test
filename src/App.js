import { useState } from 'react'
import './App.css'
import ResultsArray from './components/ResultsArray'
import TestArray from './components/TestArray'
import TestPreview from './components/TestPreview'

function App() {
  const [route, setRoute] = useState(['test', 'results', 'preview'])
  const navBarDecor = (e) => {
    for (
      let i = 0;
      i < e.target.parentNode.querySelectorAll('button').length;
      i++
    ) {
      e.target.parentNode
        .querySelectorAll('button')
        [i].classList.remove('active-button')
    }

    e.target.classList.add('active-button')
  }

  window.addEventListener('load', () => {
    setRoute('preview')
  })

  return (
    <div className="App">
      <div className="button-holder">
        <button
          className="navigate"
          onClick={(e) => {
            navBarDecor(e)
            setRoute('test')
          }}
        >
          Тест
        </button>
        <button
          className="navigate"
          onClick={(e) => {
            navBarDecor(e)
            setRoute('results')
          }}
        >
          Итоги
        </button>
        <button
          className="navigate"
          onClick={(e) => {
            navBarDecor(e)
            setRoute('preview')
          }}
        >
          Превью
        </button>
      </div>

      {route === 'test' && <TestArray />}
      {route === 'results' && <ResultsArray />}
      {route === 'preview' && <TestPreview />}
    </div>
  )
}

export default App
