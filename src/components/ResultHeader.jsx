import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addResultHeader } from './store/store'

import styles from './styles/resultTextsInput.module.css'

const ResultHeader = ({ cardId }) => {
  const currentValue = useSelector((state) => state[0])
  const dispatch = useDispatch()
  const resultHeaderText = currentValue[cardId].resHeader

  const [resultHeader, setResultHeader] = useState(false)

  const addResultHeaderValue = (e) => {
    e.preventDefault()

    if (e.target.parentNode.resultHeaderField.value.length !== 0) {
      dispatch(
        addResultHeader(e.target.parentNode.resultHeaderField.value, cardId)
      )
      e.target.parentNode.resultHeaderField.value = ''
      setResultHeader(true)
    }
  }

  const addResultHeaderValueControlled = (e) => {
    dispatch(
      addResultHeader(e.target.parentNode.resultHeaderField.value, cardId)
    )
    e.target.parentNode.resultHeaderField.value = ''
  }

  return (
    <div
      className={styles.resultHeaderInputStyle}
      onDoubleClick={() => {
        setResultHeader(false)
      }}
      title="Двойной клик, чтобы отредактировать результат"
    >
      {resultHeader && (
        <div>
          <h3>{resultHeaderText}</h3>
        </div>
      )}
      {!resultHeader && (
        <form>
          <input
            type="text"
            name="resultHeaderField"
            placeholder="Введите название результата"
            onChange={addResultHeaderValueControlled}
            value={resultHeaderText}
          />
          <button onClick={addResultHeaderValue}> Название результата </button>
        </form>
      )}
    </div>
  )
}

export default ResultHeader
