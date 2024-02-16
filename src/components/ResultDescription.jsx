import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addResultDescription } from './store/store'

import styles from './styles/resultTextsInput.module.css'

const ResultDescription = ({ cardId }) => {
  const currentValue = useSelector((state) => state[0])
  const dispatch = useDispatch()
  const resultDescriptionText = currentValue[cardId].resDescr

  const [resDescr, setResDescr] = useState(false)

  const textAreaControl = (e) => {
    if (e.target.value.length % 56 === 0) {
      e.target.rows += 1
    }
  }

  const addResultDescriptionValue = (e) => {
    e.preventDefault()

    if (e.target.parentNode.resultDescriptionField.value.length !== 0) {
      dispatch(
        addResultDescription(
          e.target.parentNode.resultDescriptionField.value,
          cardId
        )
      )
      e.target.parentNode.resultDescriptionField.value = ''
      setResDescr(true)
    }
  }

  const addResultDescriptionValueControlled = (e) => {
    dispatch(
      addResultDescription(
        e.target.parentNode.resultDescriptionField.value,
        cardId
      )
    )
    textAreaControl(e)
  }
  return (
    <div
      className={styles.resultDescriptionInputStyle}
      onDoubleClick={() => {
        setResDescr(false)
      }}
      title="Сюда вводится описание результата. Двойной клик для редактирования."
    >
      {resDescr && <p>{resultDescriptionText}</p>}
      {!resDescr && (
        <form>
          <textarea
            type="text"
            name="resultDescriptionField"
            placeholder="Описание результата"
            onChange={addResultDescriptionValueControlled}
            value={resultDescriptionText}
            rows={Math.round(resultDescriptionText.length / 56) + 1}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setResDescr(true)
              }
            }}
          />
          <button onClick={addResultDescriptionValue}>
            {' '}
            Описание результата{' '}
          </button>
        </form>
      )}
    </div>
  )
}

export default ResultDescription
