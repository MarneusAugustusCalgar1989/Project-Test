import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setResultRelation } from './store/store'

const ModalWindow = () =>
  // Должен принимать какой-то айди
  {
    const dispatch = useDispatch()

    const currentValue = useSelector((state) => state[0])
    const relationState = useSelector((state) => state[2])

    const chooseRelation = (e) => {
      document.querySelector('.modal-window').style.display = 'none'
      const targetRelation =
        e.target.parentNode.parentNode.querySelector(
          '.thumb-header'
        ).textContent
      dispatch(
        setResultRelation(targetRelation, relationState[0], relationState[1])
      )
    }

    return (
      <div className="modal-window" onClick={chooseRelation}>
        {currentValue.map((el) => {
          return (
            <div className="preview-holder">
              <div className="thumb-image">
                <img src={el.resImg} />
              </div>
              <div className="thumb-header">
                <p>{el.resHeader}</p>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

export default ModalWindow
