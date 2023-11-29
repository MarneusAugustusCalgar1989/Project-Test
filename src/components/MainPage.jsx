import React, { useState } from 'react';
import styles from './styles/mainPage.module.css';
import PictureInput from './PictureInput';
import TypicalInput from './TypicalInput';

const MainPage = () => {
  const [imgSrc, setImgSrc] = useState(
    'https://obzor.city/data/images/news_2023/11/1/kolupaev.jpg'
  );

  return (
    <div className={styles.mainPage}>
      <PictureInput imgSrc={imgSrc} typeOfUsing='mainPage' />
      <TypicalInput stringType='mainPage' />
    </div>
  );
};

export default MainPage;
