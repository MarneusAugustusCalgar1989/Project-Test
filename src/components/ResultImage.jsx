import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addResultImage } from './store/store'

const ResultImage = ({ cardId }) => {
  const currentValue = useSelector((state) => state[0])
  const imgUrl = currentValue[cardId].resImg

  const dispatch = useDispatch()

  const addResultImgUrl = (e) => {
    e.preventDefault()
    const inputUrl = e.target.parentNode.resultPictureUrl.value

    dispatch(addResultImage(inputUrl, cardId))
    e.target.parentNode.resultPictureUrl.value = ''
  }

  return (
    <div>
      <div className="image-holder">
        <img
          className="question-img"
          src={imgUrl}
          alt={`Вы пытались загрузить картинку по ссылке ${imgUrl}`}
        />
      </div>
      <p>{imgUrl}</p>
      <form>
        <input type="text" name="resultPictureUrl" />
        <button className="addResultImageUrl" onClick={addResultImgUrl}>
          Добавить
        </button>
      </form>
    </div>
  )
}

export default ResultImage
