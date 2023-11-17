import React from 'react'
import ResultCard from './ResultCard'
import { useSelector } from 'react-redux'

const ResultsArray = () => {
  const currentValue = useSelector((state) => state[0])
  return (
    <div>
      <h1>Здесь будут результаты перечисляться</h1>
      {currentValue.map((el) => {
        return <ResultCard key={currentValue.resId} />
      })}
    </div>
  )
}

export default ResultsArray
