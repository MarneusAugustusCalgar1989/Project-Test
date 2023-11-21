import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addResultHeader } from './store/store';

import styles from './styles/resultTextsInput.module.css';

const ResultHeader = ({ cardId }) => {
  const currentValue = useSelector(state => state[0]);
  const dispatch = useDispatch();
  const resultHeaderText = currentValue[cardId].resHeader;

  const [resultHeader, setResultHeader] = useState(false);

  const addResultHeaderValue = e => {
    e.preventDefault();

    dispatch(
      addResultHeader(e.target.parentNode.resultHeaderField.value, cardId)
    );
    e.target.parentNode.resultHeaderField.value = '';
    setResultHeader(true);
  };
  return (
    <div
      className={styles.resultHeaderInputStyle}
      onDoubleClick={() => {
        setResultHeader(false);
      }}
      title='Двойной клик, чтобы отредактировать результат'
    >
      {resultHeader && (
        <div>
          <p>{resultHeaderText}</p>
        </div>
      )}
      {!resultHeader && (
        <form>
          <input
            type='text'
            name='resultHeaderField'
            placeholder='Введите название результата'
          />
          <button onClick={addResultHeaderValue}> Название результата </button>
        </form>
      )}
    </div>
  );
};

export default ResultHeader;
