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

    if (question.length !== 0) {
      dispatch(addQuestion(question, parentId))
      setQinput(true)
    }
  }

  const addTextQuestionControlled = (e) => {
    const question = e.target.parentNode.question.value

    dispatch(addQuestion(question, parentId))
  }

  // Добавляем ответы
  const addAnswerText = (e) => {
    e.preventDefault()
    const answer = e.target.parentNode.answer.value

    if (answer.length !== 0) {
      dispatch(addAnswer(answer, tId, parentId))
      setAinput(true)
      e.target.parentNode.answer.value = tCont
    }
  }

  const addAnswerTextControlled = (e) => {
    const answer = e.target.parentNode.answer.value

    dispatch(addAnswer(answer, tId, parentId))
  }

  const addPreviousValue = (e) => {
    setQinput(false)
    console.log(e.target.parentNode.querySelector('form'))
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
              onDoubleClick={addPreviousValue}
              title="Двойной клик для редактирования содержания"
            >
              {tCont}
            </p>
          )}
          {!qInput && (
            <form>
              <input
                className="testQuest"
                type="text"
                name="question"
                placeholder="Введите текст вопроса"
                onChange={addTextQuestionControlled}
                value={tCont}
              />
              <button onClick={addTextQuestion}> Добавить вопрос </button>
            </form>
          )}
        </div>
      )}
      {/* Обрабатываем ответы  */}
      {stringType === 'answer' && (
        <div className={styles.answerHolder}>
          <div
            className={
              currentState[parentId].answers.length > 1
                ? styles.answerInputStyle
                : styles.lonelyAnswer
            }
            onContextMenu={rightClick}
          >
            {aInput && (
              <p
                onDoubleClick={() => setAinput(false)}
                title="Двойной клик для редактирования ответа"
              >
                {tCont}
              </p>
            )}

            {!aInput && (
              <form>
                <input
                  type="text"
                  name="answer"
                  placeholder="Введите текст ответа"
                  value={tCont}
                  onChange={addAnswerTextControlled}
                />
                <button
                  onClick={addAnswerText}
                  className={styles.addAnswerTextStyle}
                >
                  Добавить ответ
                </button>
              </form>
            )}

            {/* {aInput && (
            <button
              onClick={addNewAnswer}
              className={styles.addNewAnswerButton}
            >
              +
            </button>
          )} */}
          </div>

          {currentState[parentId].answers.length > 1 && (
            <span
              className={styles.removeAnswerButton}
              onClick={removeSelectedAnswer}
            >
              <p>&#215;</p>
            </span>
          )}
        </div>
      )}
    </>
  )
}

export default TypicalInput
