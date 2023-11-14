import React from 'react'
import ResultImage from './ResultImage'
import ResultHeader from './ResultHeader'
import ResultDescription from './ResultDescription'

const ResultCard = () => {
  return (
    <>
      <button>Удалить a;kjsdf результат</button>

      <div className="testHolder">
        <div className="testcard-header">
          <h1>Название результата</h1>
        </div>
        <ResultImage />
        <ResultHeader />
        <ResultDescription />
      </div>

      <button>Добавить результат</button>
    </>
  )
}

export default ResultCard
