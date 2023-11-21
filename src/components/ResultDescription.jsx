import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addResultDescription } from './store/store';

import styles from './styles/resultTextsInput.module.css';

const ResultDescription = ({ cardId }) => {
  const currentValue = useSelector(state => state[0]);
  const dispatch = useDispatch();
  const resultDescriptionText = currentValue[cardId].resDescr;

  const [resDescr, setResDescr] = useState(false);

  const addResultDescriptionValue = e => {
    e.preventDefault();

    dispatch(
      addResultDescription(
        e.target.parentNode.resultDescriptionField.value,
        cardId
      )
    );
    e.target.parentNode.resultDescriptionField.value = '';
    setResDescr(true);
  };
  return (
    <div
      className={styles.resultDescriptionInputStyle}
      onDoubleClick={() => {
        setResDescr(false);
      }}
      title='Двойной клик для редактирования описания результата'
    >
      {resDescr && <p>{resultDescriptionText}</p>}
      {!resDescr && (
        <form>
          <input
            type='text'
            name='resultDescriptionField'
            placeholder='Описание результата'
          />
          <button onClick={addResultDescriptionValue}>
            {' '}
            Описание результата{' '}
          </button>
        </form>
      )}
    </div>
  );
};

export default ResultDescription;
