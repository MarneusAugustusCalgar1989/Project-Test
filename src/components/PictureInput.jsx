import React from 'react'
import { useDispatch } from 'react-redux'
import { addQuestionImageUrl } from './store/store'

const PictureInput = ({ typeOfUsing, imgSrc, parentId }) => {
  const dispatch = useDispatch()

  const addImgUrl = (e) => {
    e.preventDefault()
    const inputUrl = e.target.parentNode.pictureUrl.value

    dispatch(addQuestionImageUrl(inputUrl, parentId))

    e.target.parentNode.pictureUrl.value = ''
  }

  return (
    <div>
      <div className="image-holder">
        <img
          className="question-img"
          src={imgSrc}
          alt={`Вы пытались загрузить картинку по ссылке ${imgSrc}`}
        />
      </div>
      <p>URL</p>
      <form>
        <input type="text" name="pictureUrl" />
        <button className="addImageUrl" onClick={addImgUrl}>
          {' '}
          Добавить{' '}
        </button>
      </form>
    </div>
  )
}

export default PictureInput
