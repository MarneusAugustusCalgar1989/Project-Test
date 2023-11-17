import React from 'react'
import ResultImage from './ResultImage'
import ResultHeader from './ResultHeader'
import ResultDescription from './ResultDescription'
import { useDispatch, useSelector } from 'react-redux'
import { addResultCard } from './store/store'

const ResultCard = ({ cardId }) => {
  return (
    <>
      <button>Удалить результат</button>

      <div className="testHolder">
        <div className="testcard-header">
          <h1>Название результата</h1>
        </div>
        <ResultImage cardId={cardId} />
        <ResultHeader />
        <ResultDescription />
      </div>
    </>
  )
}

export default ResultCard
