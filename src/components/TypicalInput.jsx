import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  addAnswer,
  addQuestion,
  addTestName,
  dataForRelation,
  removeAnswer,
} from './store/store'

import styles from './styles/typicalInput.module.css'
import ModalWindow from './ModalWindow'

const TypicalInput = ({ stringType, tCont, tId, parentId }) => {
  const dispatch = useDispatch()
  const currentState = useSelector((state) => state[1])
  const mainPageState = useSelector((state) => state[2])

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
    textAreaControl(e)
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

  const textAreaControl = (e) => {
    e.target.style.rows += 1
    if (e.target.value.length % 56 === 0) {
      e.target.rows += 1
    }
  }

  const addAnswerTextControlled = (e) => {
    const answer = e.target.parentNode.answer.value
    dispatch(addAnswer(answer, tId, parentId))
    textAreaControl(e)
  }

  const addPreviousValue = (e) => {
    setQinput(false)
  }

  const removeSelectedAnswer = (e) => {
    dispatch(removeAnswer(parentId, tId))
  }

  const addNameOfTest = (e) => {
    e.preventDefault()
    const testName = e.target.parentNode.nameOfTestField.value

    if (testName.length > 1) {
      dispatch(addTestName(testName.toUpperCase()))
      setQinput(true)
      e.target.parentNode.nameOfTestField.value = mainPageState[0].addNameOfTest
    } else {
      dispatch(addTestName('Здесь должно что-то быть'))
    }
  }

  const addNameOfTestControlled = (e) => {
    const testName = e.target.parentNode.nameOfTestField.value
    dispatch(addTestName(testName))
  }

  // Тестовая зона

  const rightClick = (e, tId, parentId) => {
    e.preventDefault()
    dispatch(dataForRelation(tId, parentId))

    document.querySelector('.modal-window').style.display = 'block'
    const windowSize = document.querySelector('.modal-window')

    document.querySelector('.modal-window').style.top = `${
      e.pageY - windowSize.getBoundingClientRect().height / 2
    }px`
    document.querySelector('.modal-window').style.left = `${
      e.clientX - windowSize.getBoundingClientRect().width / 2
    }px`
  }

  const chooseRelation = () => {
    document.querySelector('.modal-window').style.display = 'none'
  }

  return (
    <>
      {/* Обрабатываем вопросы */}
      {stringType === 'question' && (
        <div className={styles.questionInputStyle}>
          <ModalWindow />
          {qInput && (
            <h3
              onDoubleClick={addPreviousValue}
              title="Двойной клик для редактирования содержания"
            >
              {tCont}
            </h3>
          )}
          {!qInput && (
            <form>
              <textarea
                className="testQuest"
                rows={Math.round(tCont.length / 56) + 1}
                type="text"
                name="question"
                placeholder="Введите текст вопроса"
                onChange={addTextQuestionControlled}
                value={tCont}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setQinput(true)
                  }
                }}
              />
              <button onClick={addTextQuestion}> Добавить вопрос </button>
            </form>
          )}
        </div>
      )}
      {/* Обрабатываем ответы  */}
      {stringType === 'answer' && (
        <div
          className={styles.answerHolder}
          onContextMenu={(e) => rightClick(e, tId, parentId)}
        >
          <div className="modal-window" onClick={chooseRelation}></div>

          <div
            className={
              currentState[parentId].answers.length > 1
                ? styles.answerInputStyle
                : styles.lonelyAnswer
            }
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
                <textarea
                  type="text"
                  name="answer"
                  placeholder="Введите текст ответа"
                  rows={Math.round(tCont.length / 56) + 1}
                  value={tCont}
                  onChange={addAnswerTextControlled}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      setAinput(true)
                    }
                  }}
                />
                <button
                  onClick={addAnswerText}
                  className={styles.addAnswerTextStyle}
                >
                  Добавить ответ
                </button>
              </form>
            )}
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
      {/* Обрабатываем начальную кнопку */}
      {stringType === 'mainPage' && (
        <div className={styles.questionInputStyle}>
          {qInput && (
            <h2
              onDoubleClick={addPreviousValue}
              title="Двойной клик для редактирования содержания"
            >
              {mainPageState[0].nameOfTest}
            </h2>
          )}
          {!qInput && (
            <form>
              <input
                className="testQuest"
                type="text"
                name="nameOfTestField"
                placeholder="Введите название"
                onChange={addNameOfTestControlled}
                value={mainPageState[0].nameOfTest}
              />
              <button onClick={addNameOfTest}> Добавить вопрос </button>
            </form>
          )}
        </div>
      )}
    </>
  )
}

export default TypicalInput
