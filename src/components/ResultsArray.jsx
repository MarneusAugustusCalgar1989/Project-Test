import React from 'react'
import ResultCard from './ResultCard'
import { useDispatch, useSelector } from 'react-redux'
import { addResultCard } from './store/store'

const ResultsArray = () => {
  const currentValue = useSelector((state) => state[0])
  let resultCardId = 0
  currentValue.length > 1
    ? (resultCardId = currentValue[currentValue.length - 1].resId + 1)
    : (resultCardId = 1)

  const dispatch = useDispatch()
  const addResult = (e) => {
    e.preventDefault()

    dispatch(addResultCard(resultCardId))

    let body = document.body
    let html = document.documentElement

    setTimeout(() => {
      let height = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      )
      window.scrollBy({ top: height, behavior: 'smooth' })
      console.log(height)
    }, 10)
  }

  return (
    <div className="results-holder">
      {currentValue.map((el) => {
        return <ResultCard key={el.resId} cardId={el.resId} />
      })}
      <button onClick={addResult}>Добавить результат</button>
    </div>
  )
}

export default ResultsArray
