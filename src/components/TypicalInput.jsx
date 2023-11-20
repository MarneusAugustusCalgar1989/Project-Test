import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  addAnswer,
  addNewAnswerLine,
  addQuestion,
  removeAnswer,
} from './store/store'

import styles from './styles/typicalInput.module.css'

const TypicalInput = ({ stringType, tCont, tId, parentId }) => {
  const dispatch = useDispatch()
  const currentState = useSelector((state) => state[1])

  const [qInput, setQinput] = useState(false)
  const [aInput, setAinput] = useState(false)

  // Добавляем вопрос
  const addTextQuestion = (e) => {
    e.preventDefault()
    const question = e.target.parentNode.question.value

    dispatch(addQuestion(question, parentId))
    e.target.parentNode.question.value = ''

    setQinput(true)
  }
  // Добавляем ответы
  const addAnswerText = (e) => {
    e.preventDefault()
    const answer = e.target.parentNode.answer.value

    if (answer.length !== 0) {
      dispatch(addAnswer(answer, tId, parentId))
      setAinput(true)
      e.target.parentNode.answer.value = ''
    }
  }

  const addNewAnswer = (e) => {
    dispatch(addNewAnswerLine(parentId))
  }

  const removeSelectedAnswer = (e) => {
    dispatch(removeAnswer(parentId, tId))
  }

  // Тестовая зона

  const rightClick = (e) => {
    e.preventDefault()
    alert('ПРАВАЯ КНОПКА МЫШИ!')
  }

  return (
    <>
      {/* Обрабатываем вопросы */}
      {stringType === 'question' && (
        <div className={styles.questionInputStyle}>
          {qInput && (
            <p
              onDoubleClick={() => {
                setQinput(false)
              }}
              title="Двойной клик для редактирования содержания"
            >
              {tCont}
            </p>
          )}
          {!qInput && (
            <form>
              <input type="text" name="question" placeholder="Введите вопрос" />
              <button onClick={addTextQuestion}> Добавить вопрос </button>
            </form>
          )}
        </div>
      )}
      {/* Обрабатываем ответы  */}
      {stringType === 'answer' && (
        <div className={styles.answerInputStyle} onContextMenu={rightClick}>
          {aInput && (
            <p
              onDoubleClick={() => setAinput(false)}
              title="Двойной клик для редактирования ответа"
            >
              {tCont}
              {currentState[parentId].answers.length > 1 && (
                <span
                  className="remove-answer-button"
                  onClick={removeSelectedAnswer}
                >
                  &#215;
                </span>
              )}
            </p>
          )}

          {!aInput && (
            <form>
              <input
                type="text"
                name="answer"
                placeholder="Введите текст ответа"
              />
              <button
                onClick={addAnswerText}
                className={styles.addAnswerTextStyle}
              >
                Добавить ответ
              </button>
            </form>
          )}
          {aInput && (
            <button
              onClick={addNewAnswer}
              className={styles.addNewAnswerButton}
            >
              +
            </button>
          )}
        </div>
      )}
    </>
  )
}

export default TypicalInput
