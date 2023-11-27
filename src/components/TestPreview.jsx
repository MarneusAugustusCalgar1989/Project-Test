import { previewCounter, resetResults } from './store/store'
import './styles/preview.css'
import { useDispatch, useSelector } from 'react-redux'

const TestPreview = () => {
  const testObj = useSelector((state) => state[1])
  const testResult = useSelector((state) => state[0])
  const dispatch = useDispatch()

  const resetResultButton = (e) => {
    dispatch(resetResults())
  }

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
  }

  return (
    <>
      <div className="test-preview-holder">
        {testObj.map((el) => {
          return (
            <div className="tCard">
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

      <h1>Далее пока лежит дефолтный результат</h1>

      <div className="test-preview-holder">
        {testResult.map((el) => {
          return (
            <div className="tCard result">
              <h1>
                {el.resHeader} {el.resCount}
              </h1>
              <div className="iCard">
                <img src={el.resImg} alt="Картинка к результату" />
              </div>
              <div className="aCardresult">
                <p>{el.resDescr}</p>
              </div>

              <div className="qCard result">
                <p>{el.resHeader}</p>
              </div>
            </div>
          )
        })}
        <button className="reset" onClick={resetResultButton}>
          Сбросить результаты
        </button>
      </div>
    </>
  )
}

export default TestPreview
