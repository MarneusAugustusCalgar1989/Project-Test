import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addResultImage } from './store/store'

const ResultImage = () => {
  const dispatch = useDispatch()
  const currentValue = useSelector((state) => state[0])
  let resultImage = 'URL'

  const addResultImgUrl = (e) => {
    e.preventDefault()
    resultImage = e.target.parentNode.resultPictureUrl.value
    dispatch(addResultImage(resultImage))
  }

  return (
    <div>
      <div className="image-holder">
        <img
          className="question-img"
          src="src"
          alt={`Вы пытались загрузить картинку по ссылке {src}`}
        />
      </div>
      <p>{resultImage}</p>
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
