import React from 'react'
import ResultImage from './ResultImage'
import ResultHeader from './ResultHeader'
import ResultDescription from './ResultDescription'
import { removeResultCard } from './store/store'
import { useDispatch, useSelector } from 'react-redux'

const ResultCard = ({ cardId }) => {
  const currentValue = useSelector((state) => state[0])
  const dispatch = useDispatch()

  const removeResCard = (e) => {
    dispatch(removeResultCard(cardId))
  }

  return (
    <>
      {currentValue.length > 1 && (
        <button onClick={removeResCard}>Удалить результат</button>
      )}

      <div className="testHolder">
        <div className="testcard-header">
          <h1>{currentValue[cardId].resHeader}</h1>
        </div>
        <ResultImage cardId={cardId} />
        <ResultHeader cardId={cardId} />
        <ResultDescription cardId={cardId} />
      </div>
    </>
  )
}

export default ResultCard
