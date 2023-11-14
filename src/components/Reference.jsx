import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addQuestionImageUrl, removeQuestionImageUrl } from './store/store';

const Second = ({ inputHeader }) => {
  const currentState = useSelector(state => state);
  const dispatch = useDispatch();

  const forSend = e => {
    e.preventDefault();
    let questionPictureUrl = e.target.parentNode.URLinput.value;
    dispatch(addQuestionImageUrl(questionPictureUrl));

    e.target.parentNode.URLinput.value = '';
  };

  const removeEl = e => {
    dispatch(
      removeQuestionImageUrl(
        e.target.parentNode.querySelector('.imgurl').textContent
      )
    );
    e.target.style.display = 'none';
  };

  return (
    <div>
      <h1>Hello from second component</h1>
      <form className='forminput'>
        <h2>{inputHeader}</h2>
        <input type='text' name='URLinput' placeholder='Это урл картинки' />
        <button type='submit' onClick={forSend}>
          SEND
        </button>
      </form>
      {currentState.map(el => {
        return (
          <div key={el.id}>
            <span>ID = {el.id}</span>, URL ={' '}
            <span className='imgurl'>{el.questionImageUrl}</span>
            <span onClick={removeEl} className='remove-button'>
              &#215;
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Second;
