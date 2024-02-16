import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addResultImage } from './store/store'
import styles from './styles/resultImageInput.module.css'

const ResultImage = ({ cardId }) => {
  const currentValue = useSelector((state) => state[0])
  const imgUrl = currentValue[cardId].resImg

  const dispatch = useDispatch()
  const [rpInput, setRpInput] = useState(false)

  const addResultImgUrl = (e) => {
    e.preventDefault()
    const inputUrl = e.target.parentNode.resultPictureUrl.value

    dispatch(addResultImage(inputUrl, cardId))
    e.target.parentNode.resultPictureUrl.value = ''
    setRpInput(true)
  }

  return (
    <div
      title="Здесь добавляем иллюстрацию к вопросу"
      className={styles.resultImg}
    >
      <div className={styles.imageHolder}>
        <img
          src={imgUrl}
          alt={`Вы пытались загрузить картинку по ссылке ${imgUrl}`}
          title="Двойной клик, чтобы ввести новый URL картинки"
          onDoubleClick={() => {
            setRpInput(false)
          }}
        />
      </div>
      {!rpInput && (
        <form>
          <input
            type="text"
            name="resultPictureUrl"
            placeholder="Введите URL подходящей картиночки"
          />
          <button className="addResultImageUrl" onClick={addResultImgUrl}>
            Добавить
          </button>
        </form>
      )}
    </div>
  )
}

export default ResultImage
