import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addResultHeader } from './store/store'

const ResultHeader = ({ cardId }) => {
  const currentValue = useSelector((state) => state[0])
  const dispatch = useDispatch()
  const resultHeaderText = currentValue[cardId].resHeader

  const addResultHeaderValue = (e) => {
    e.preventDefault()

    dispatch(
      addResultHeader(e.target.parentNode.resultHeaderField.value, cardId)
    )
    e.target.parentNode.resultHeaderField.value = ''
  }
  return (
    <div>
      <p>{resultHeaderText}</p>
      <form>
        <input type="text" name="resultHeaderField" />
        <button onClick={addResultHeaderValue}> Название результата </button>
      </form>
    </div>
  )
}

export default ResultHeader
