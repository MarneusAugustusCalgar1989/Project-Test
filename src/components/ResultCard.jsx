import React from 'react'
import ResultImage from './ResultImage'
import ResultHeader from './ResultHeader'
import ResultDescription from './ResultDescription'
import { useDispatch, useSelector } from 'react-redux'
import { addResultCard } from './store/store'

const ResultCard = () => {
  const currentValue = useSelector((state) => state[0])
  let resultCardId = 0
  currentValue.length > 1
    ? (resultCardId = currentValue[currentValue.length - 1].resId + 1)
    : (resultCardId = 1)

  const dispatch = useDispatch()
  const addResult = (e) => {
    e.preventDefault()

    dispatch(addResultCard(resultCardId))
  }
  return (
    <>
      <button>Удалить результат</button>

      <div className="testHolder">
        <div className="testcard-header">
          <h1>Название результата</h1>
        </div>
        <ResultImage />
        <ResultHeader />
        <ResultDescription />
      </div>

      <button onClick={addResult}>Добавить результат</button>
    </>
  )
}

export default ResultCard
