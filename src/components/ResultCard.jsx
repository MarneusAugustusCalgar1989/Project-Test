import React from 'react'
import ResultImage from './ResultImage'
import ResultHeader from './ResultHeader'
import ResultDescription from './ResultDescription'

const ResultCard = ({ cardId }) => {
  return (
    <>
      <button>Удалить результат</button>

      <div className="testHolder">
        <div className="testcard-header">
          <h1>Название результата</h1>
        </div>
        <ResultImage cardId={cardId} />
        <ResultHeader cardId={cardId} />
        <ResultDescription cardId={cardId} />
      </div>
    </>
  )
}

export default ResultCard
