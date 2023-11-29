import { useState } from 'react'
import { previewCounter, resetResults } from './store/store'
import './styles/preview-beauty.css'
import { useDispatch, useSelector } from 'react-redux'

const TestBeauty = () => {
  const [reloadHandler, setReloadHandler] = useState(false)
  const [showResult, setShowResult] = useState(false)

  const testObj = useSelector((state) => state[1])
  const testResult = useSelector((state) => state[0])
  const dispatch = useDispatch()

  const makeDecisionBut = (e) => {
    const parentContent =
      e.target.parentNode.querySelector('.qCard').textContent

    const clientAnswer = e.target.textContent

    const findParent = testObj.find((el) => {
      return el.question === parentContent
    })

    const findChild = findParent.answers.find((ans) => {
      return ans.answer === clientAnswer
    })

    dispatch(previewCounter(findChild.answerRelation))
    e.target.parentNode.remove()
    gotResult()

    if (document.querySelector('.tCardBeauty')) {
      document.querySelector('.tCardBeauty').classList.add('fade-in-item')
    }
  }

  const gotResult = () => {
    if (document.querySelectorAll('.tCardBeauty').length > 0) {
      console.log('ПРодолжаем')
    } else {
      setReloadHandler(true)

      setTimeout(() => {
        const sortedResults = testResult.sort((a, b) => {
          return b.resCount - a.resCount
        })
        const winnerIs = testResult.find((el) => {
          return el.resCount === sortedResults[0].resCount
        })

        setShowResult(true)

        setTimeout(() => {
          const resultsNode = document.querySelectorAll('.itog')
          const toRem = document.querySelectorAll('.test-preview-holder-beauty')
          toRem[0].style.display = 'none'

          for (let i = 0; i < resultsNode.length; i++) {
            if (
              resultsNode[i].querySelector('.qCard').textContent ===
              winnerIs.resHeader
            ) {
              resultsNode[i].style.display = 'flex'
              resultsNode[i].style.visibility = 'visible'
              resultsNode[i].classList.add('fade-in-item')
            } else {
              resultsNode[i].style.display = 'none'
            }
          }
        }, 500)
      }, 500)
    }
  }

  const beautyAgain = () => {
    document.querySelector('.test-preview-holder')

    setReloadHandler(false)
    setShowResult(false)
    dispatch(resetResults())
  }

  return (
    <>
      <div className="test-preview-holder-beauty">
        {testObj.map((el) => {
          return (
            <div className="tCardBeauty">
              <h1>Вопрос № {el.id + 1}</h1>

              <div className="iCard">
                <img src={el.questionImage} alt="Картинка к вопросу" />
              </div>
              <div className="qCard">
                <p>{el.question}</p>
              </div>
              {el.answers.map((ans) => {
                return (
                  <div className="aCard" onClick={makeDecisionBut}>
                    {ans.answer}
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>

      {showResult && (
        <div className="test-preview-holder-beauty">
          {testResult.map((el) => {
            return (
              <div className="tCard result itog" key={el.resHeader}>
                {/* <h1>{el.resHeader}</h1> */}
                <div className="iCard">
                  <img src={el.resImg} alt="Картинка к результату" />
                </div>
                <div className="ancor-block">
                  <div className="aCardresult">
                    <p>{el.resDescr}</p>
                  </div>

                  <div className="qCard result">
                    <p>{el.resHeader}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
      {/* {reloadHandler && (
        <button onClick={beautyAgain} className="beauty-again-button">
          Пройти еще раз
        </button>
      )} */}
    </>
  )
}

export default TestBeauty