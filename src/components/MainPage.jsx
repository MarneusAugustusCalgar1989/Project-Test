import styles from './styles/mainPage.module.css'
import PictureInput from './PictureInput'
import TypicalInput from './TypicalInput'

const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <h1 className="main-page-h1-divider">Название теста</h1>
      <PictureInput typeOfUsing="mainPage" />
      <TypicalInput stringType="mainPage" />
    </div>
  )
}

export default MainPage
