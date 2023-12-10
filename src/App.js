import { useState } from 'react';
import './App.css';
import ResultsArray from './components/ResultsArray';
import TestArray from './components/TestArray';
import TestPreview from './components/TestPreview';
import TestBeauty from './components/TestBeauty';
import MainPage from './components/MainPage';
import Output from './components/Output';

function App() {
  const [route, setRoute] = useState(['test', 'results', 'preview']);

  const navBarDecor = e => {
    for (
      let i = 0;
      i < e.target.parentNode.querySelectorAll('button').length;
      i++
    ) {
      e.target.parentNode
        .querySelectorAll('button')
        [i].classList.remove('active-button');
    }

    e.target.classList.add('active-button');
  };

  window.addEventListener('load', () => {
    setRoute('mainPage');
    document.querySelector('.first').classList.add('active-button');
  });

  return (
    <div className='App'>
      <div className='button-holder'>
        <button
          className='navigate first'
          onClick={e => {
            navBarDecor(e);
            setRoute('mainPage');
          }}
        >
          Заглавная
        </button>

        <button
          className='navigate'
          onClick={e => {
            navBarDecor(e);
            setRoute('test');
          }}
        >
          Тест
        </button>

        <button
          className='navigate'
          onClick={e => {
            navBarDecor(e);
            setRoute('results');
          }}
        >
          Итоги
        </button>
        <button
          className='navigate'
          onClick={e => {
            navBarDecor(e);
            setRoute('preview');
          }}
        >
          Превью
        </button>
        <button
          className='navigate'
          onClick={e => {
            navBarDecor(e);
            setRoute('beauty');
          }}
        >
          BEAUTY
        </button>
        <button
          className='navigate'
          onClick={e => {
            navBarDecor(e);
            setRoute('testOut');
          }}
        >
          Test out
        </button>
      </div>

      {route === 'mainPage' && <MainPage />}
      {route === 'test' && <TestArray />}
      {route === 'results' && <ResultsArray />}
      {route === 'preview' && <TestPreview />}
      {route === 'beauty' && <TestBeauty />}
      {route === 'testOut' && <Output />}

    </div>
  );
}

export default App;
