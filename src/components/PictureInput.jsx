import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMainUrl, addQuestionImageUrl } from './store/store';
import styles from './styles/pictureInput.module.css';

const PictureInput = ({ imgSrc, parentId, typeOfUsing }) => {
  const dispatch = useDispatch();
  const currentState = useSelector(state => state[2]);
  const [pInput, setPinput] = useState(false);

  const addImgUrl = e => {
    e.preventDefault();
    const inputUrl = e.target.parentNode.pictureUrl.value;

    if (inputUrl.length !== 0) {
      dispatch(addQuestionImageUrl(inputUrl, parentId));

      e.target.parentNode.pictureUrl.value = '';
      setPinput(true);
    }
  };

  const addMainImageUrl = e => {
    e.preventDefault();
    const inputUrl = e.target.parentNode.pictureUrl.value;
    if (inputUrl !== '') {
      dispatch(addMainUrl(inputUrl));
    }
    setPinput(true);
  };

  return (
    <div className={styles.pictureHolderMain}>
      <div
        onDoubleClick={() => {
          setPinput(false);
        }}
      >
        <img
          src={
            typeOfUsing === 'questionPicture'
              ? imgSrc
              : currentState[0].mainPageUrl
          }
          alt={`Вы пытались загрузить картинку по ссылке ${
            typeOfUsing === 'questionPicture'
              ? imgSrc
              : currentState[0].mainPageUrl
          }`}
        />
      </div>

      {!pInput && (
        <form>
          <input
            type='text'
            name='pictureUrl'
            placeholder='Надо добавить ссылку на картинку'
          />
          <button
            className='addImageUrl'
            onClick={
              typeOfUsing === 'questionPicture' ? addImgUrl : addMainImageUrl
            }
          >
            {' '}
            Добавить{' '}
          </button>
        </form>
      )}
    </div>
  );
};

export default PictureInput;
