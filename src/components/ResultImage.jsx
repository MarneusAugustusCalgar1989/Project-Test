import React from 'react'

const ResultImage = () => {
  const addResultImgUrl = (e) => {
    console.log('!!!')
  }

  return (
    <div>
      <div className="image-holder">
        <img
          className="question-img"
          src={'imgSrc'}
          alt={`Вы пытались загрузить картинку по ссылке {источник картинки}`}
        />
      </div>
      <p>URL</p>
      <form>
        <input type="text" name="resultPictureUrl" />
        <button className="addResultImageUrl" onClick={addResultImgUrl}>
          {' '}
          Добавить{' '}
        </button>
      </form>
    </div>
  )
}

export default ResultImage
