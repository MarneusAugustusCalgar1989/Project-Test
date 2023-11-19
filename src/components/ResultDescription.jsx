import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addResultDescription } from './store/store'

const ResultDescription = ({ cardId }) => {
  const currentValue = useSelector((state) => state[0])
  const dispatch = useDispatch()
  const resultDescriptionText = currentValue[cardId].resDescr

  const addResultDescriptionValue = (e) => {
    e.preventDefault()

    dispatch(
      addResultDescription(
        e.target.parentNode.resultDescriptionField.value,
        cardId
      )
    )
    e.target.parentNode.resultDescriptionField.value = ''
  }
  return (
    <div>
      <p>{resultDescriptionText}</p>
      <form>
        <input type="text" name="resultDescriptionField" />
        <button onClick={addResultDescriptionValue}>
          {' '}
          Описание результата{' '}
        </button>
      </form>
    </div>
  )
}

export default ResultDescription
