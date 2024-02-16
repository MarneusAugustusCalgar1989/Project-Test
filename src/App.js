import { useState } from 'react'
import './App.css'
import ResultsArray from './components/ResultsArray'
import TestArray from './components/TestArray'
import TestPreview from './components/TestPreview'
import TestBeauty from './components/TestBeauty'
import MainPage from './components/MainPage'
import { useSelector } from 'react-redux'
import { testStyle } from './components/outputs/outputStyleOne'
import { testScript } from './components/outputs/outputScript'
import { outLayout } from './components/outputs/outLayout'

function App() {
  const [route, setRoute] = useState('mainPage')
  const [showPreview, setPreview] = useState(false)
  const state = useSelector((state) => state)

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
    setRoute('mainPage')
    document.querySelector('.first').classList.add('active-button')
  })

  function makeOutput() {
    let toOutput =
      testStyle +
      outLayout +
      `<script> const testObj = ${JSON.stringify(state)}</script>` +
      testScript

    navigator.clipboard.writeText(toOutput).then(() => {
      alert('Тест скопирован! Теперь его можно вставлять в вашу разметку.')
    })
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Dead' && e.ctrlKey) {
      console.log(showPreview)
      setPreview(!showPreview)
      document.body.focus()
    }
  })

  return (
    <div className="App">
      <div className="button-holder">
        <button
          className="navigate first"
          onClick={(e) => {
            navBarDecor(e)
            setRoute('mainPage')
          }}
          title="Здесь вводятся и редактируются название теста и открывающая картинка"
        >
          Заглавная
        </button>

        <button
          className="navigate"
          onClick={(e) => {
            navBarDecor(e)
            setRoute('results')
          }}
          title="Здесь вводятся результаты с их картинками и описанием."
        >
          Итоги
        </button>

        <button
          title="Здесь пишем вопросы, даем ответы и присваиваем их к определенным результатам"
          className="navigate"
          onClick={(e) => {
            navBarDecor(e)
            setRoute('test')
          }}
        >
          Тест
        </button>

        <button
          title="Здесь можно увидеть, как будет выглядеть сам тест"
          className="navigate"
          onClick={(e) => {
            navBarDecor(e)
            setRoute('beauty')
          }}
        >
          BEAUTY
        </button>
        <button
          title="Копировать тест для дальнейшего использования"
          className="navigate"
          onClick={(e) => {
            navBarDecor(e)
            makeOutput()
          }}
        >
          Test out
        </button>
        {showPreview && (
          <button
            className="navigate"
            onClick={(e) => {
              navBarDecor(e)
              setRoute('preview')
            }}
          >
            Превью
          </button>
        )}
      </div>

      {route === 'mainPage' && <MainPage />}
      {route === 'results' && <ResultsArray />}
      {route === 'test' && <TestArray />}
      {route === 'preview' && <TestPreview />}
      {route === 'beauty' && <TestBeauty />}
    </div>
  )
}

export default App
