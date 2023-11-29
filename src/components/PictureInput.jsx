import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addQuestionImageUrl } from './store/store';
import styles from './styles/pictureInput.module.css';

const PictureInput = ({ imgSrc, parentId, typeOfUsing }) => {
  const dispatch = useDispatch();
  const [pInput, setPinput] = useState(false);
  const [mainSrc, setMainSrc] = useState(
    'https://obzor.city/data/images/news_2023/11/1/kolupaev.jpg'
  );

  const addImgUrl = e => {
    e.preventDefault();
    const inputUrl = e.target.parentNode.pictureUrl.value;

    if (inputUrl.length !== 0) {
      typeOfUsing === 'questionPicture'
        ? dispatch(addQuestionImageUrl(inputUrl, parentId))
        : setMainSrc(inputUrl);
      e.target.parentNode.pictureUrl.value = '';
      setPinput(true);
    }
  };

  return (
    <div className={styles.pictureHolderMain}>
      <div
        onDoubleClick={() => {
          setPinput(false);
        }}
      >
        <img
          src={typeOfUsing === 'questionPicture' ? imgSrc : mainSrc}
          alt={`Вы пытались загрузить картинку по ссылке ${imgSrc}`}
        />
      </div>

      {!pInput && (
        <form>
          <input
            type='text'
            name='pictureUrl'
            placeholder='Надо добавить ссылку на картинку'
          />
          <button className='addImageUrl' onClick={addImgUrl}>
            {' '}
            Добавить{' '}
          </button>
        </form>
      )}
    </div>
  );
};

export default PictureInput;
