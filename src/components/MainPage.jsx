import styles from './styles/mainPage.module.css';
import PictureInput from './PictureInput';
import TypicalInput from './TypicalInput';

const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <PictureInput typeOfUsing='mainPage' />
      <TypicalInput stringType='mainPage' />
    </div>
  );
};

export default MainPage;
