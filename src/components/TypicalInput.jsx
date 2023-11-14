import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addAnswer,
  addNewAnswerLine,
  addQuestion,
  removeAnswer,
} from './store/store';

const TypicalInput = ({ stringType, tCont, tId, parentId }) => {
  const dispatch = useDispatch();
  const currentState = useSelector(state => state);

  // Добавляем вопрос
  const addTextQuestion = e => {
    e.preventDefault();
    const question = e.target.parentNode.question.value;

    dispatch(addQuestion(question, parentId));
    e.target.parentNode.question.value = '';
  };
  // Добавляем ответы
  const addAnswerText = e => {
    e.preventDefault();
    const answer = e.target.parentNode.answer.value;

    dispatch(addAnswer(answer, tId, parentId));
    e.target.parentNode.answer.value = '';
  };

  const addNewAnswer = e => {
    dispatch(addNewAnswerLine(parentId));
  };

  const removeSelectedAnswer = e => {
    dispatch(removeAnswer(parentId, tId));
  };

  return (
    <>
      {/* Обрабатываем вопросы */}
      {stringType === 'question' && (
        <div>
          <p>{tCont}</p>
          <form>
            <input type='text' name='question' />
            <button onClick={addTextQuestion}> Добавить вопрос </button>
          </form>
        </div>
      )}
      {/* Обрабатываем ответы  */}
      {stringType === 'answer' && (
        <div>
          <div className='answer-id'> {tId}</div>
          <p>
            {tCont}
            {currentState[parentId].answers.length > 1 && (
              <span
                className='remove-answer-button'
                onClick={removeSelectedAnswer}
              >
                &#215;
              </span>
            )}
          </p>

          <form>
            <input type='text' name='answer' />
            <button onClick={addAnswerText}> Добавить ответ </button>
          </form>
          <button onClick={addNewAnswer}>ADD NEW ANSWER</button>
        </div>
      )}
    </>
  );
};

export default TypicalInput;
