import React from 'react'
import PictureInput from './PictureInput'
import TypicalInput from './TypicalInput'
import { useSelector, useDispatch } from 'react-redux'
import { addTestCard, removeTestCard } from './store/store'

const TestPage = ({ el }) => {
  const currentState = useSelector((state) => state)
  const dispatch = useDispatch()
  const addCard = (e) => {
    if (currentState.length !== 0) {
      dispatch(addTestCard(currentState[currentState.length - 1].id))
    } else {
      dispatch(addTestCard(0))
    }
  }
  const removeCard = (el) => {
    dispatch(removeTestCard(el))
  }

  return (
    <>
      <div className="testHolder" key={el.id + 'question'}>
        <div className="testcard-header" key={el.id + 'testcard-header'}>
          <h1 className="headers">
            Вопрос № <span className="element-id">{el.id + 1}</span>
          </h1>
        </div>

        <button
          className="remove-test-card"
          onClick={() => removeCard(el.id)}
          key={el.id + 'remove-test-card'}
          title={`Удалить карточку с вопросом №${el.id + 1}`}
        >
          &#215;
        </button>

        <PictureInput
          typeOfUsing="questionPicture"
          key={el.id + 'picInput'}
          imgSrc={el.questionImage}
          parentId={el.id}
        />
        <TypicalInput
          stringType="question"
          tCont={el.question}
          key={el.id + 'questionInput'}
          parentId={el.id}
        />
        {el.answers.map((ans) => {
          return (
            <TypicalInput
              stringType="answer"
              tCont={ans.answer}
              tId={ans.answerId}
              parentId={el.id}
              key={ans.answerId + 'answerInput'}
            />
          )
        })}
      </div>

      <button className="add-test-card" onClick={addCard}>
        Добавить тестовую карточку
      </button>
    </>
  )
}

export default TestPage
