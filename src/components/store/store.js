import { createStore } from 'redux'

//CONSTANTS - константы, которые можно было бы вынести, но я не стал
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_PICTURE_URL = 'ADD_PICTURE_URL'
export const REMOVE_PICTURE_URL = 'REMOVE_PICTURE_URL'

export const ADD_TEST_CARD = 'ADD_TEST_CARD'
export const REMOVE_TEST_CARD = 'REMOVE_TEST_CARD'

export const ADD_ANSWER = 'ADD_ANSWER'
export const ADD_ANSWER_LINE = 'ADD_ANSWER_LINE'
export const REMOVE_ANSWER = 'REMOVE_ANSWER'

export const ADD_RESULT_CARD = 'ADD_RESULT_CARD'
export const ADD_RESULT_IMAGE = 'ADD_RESULT_IMAGE'
export const ADD_RESULT_HEADER = 'ADD_RESULT_HEADER'
export const ADD_RESULT_DESCRIPTION = 'ADD_RESULT_DESCRIPTION'
export const REMOVE_RESULT_CARD = 'REMOVE_RESULT_CARD'
export const SET_RESULT_RELATION = 'SET_RESULT_RELATION'

//Базовые значения

const initValue = [
  [
    {
      resId: 0,
      resHeader: '',
      resDescr: '',
      resImg: 'https://obzor.city/data/images/news_2023/zgl/hackaton/gotor.jpg',
    },
  ],
  [
    {
      id: 0,
      questionImage:
        'https://ic.pics.livejournal.com/shichengaru/82230564/1654969/1654969_original.jpg',
      question: 'Текст вопроса',
      answers: [{ answerId: 0, answer: 'Текст ответа', answerRelation: 0 }],
    },
  ],
]

//ACTION CREATORS

export const addQuestion = (textOfTheQuestion, qusetionId) => ({
  type: ADD_QUESTION,
  textOfTheQuestion,
  qusetionId,
})
export const addQuestionImageUrl = (questionImageUrl, id) => ({
  type: ADD_PICTURE_URL,
  questionImageUrl,
  id,
})

export const removeQuestionImageUrl = (questionImageUrl) => ({
  type: REMOVE_PICTURE_URL,
  questionImageUrl,
})

export const addAnswer = (textOftheAnswer, answerId, answerBlockId) => ({
  type: ADD_ANSWER,
  textOftheAnswer,
  answerId,
  answerBlockId,
})

export const addNewAnswerLine = (answerBlockId) => ({
  type: ADD_ANSWER_LINE,
  answerBlockId,
})

export const addTestCard = (testCardId) => ({
  type: ADD_TEST_CARD,
  testCardId,
})

export const removeTestCard = (testCardId) => ({
  type: REMOVE_TEST_CARD,
  testCardId,
})

export const removeAnswer = (answerBlockId, answerId) => ({
  type: REMOVE_ANSWER,
  answerBlockId,
  answerId,
})

export const addResultCard = (resultCardId) => ({
  type: ADD_RESULT_CARD,
  resultCardId,
})

export const removeResultCard = (resultCardId) => ({
  type: REMOVE_RESULT_CARD,
  resultCardId,
})

export const addResultImage = (resultImageUrl, resultCardId) => ({
  type: ADD_RESULT_IMAGE,
  resultImageUrl,
  resultCardId,
})

export const addResultHeader = (resultHeader, resultCardId) => ({
  type: ADD_RESULT_HEADER,
  resultHeader,
  resultCardId,
})

export const addResultDescription = (resultDescription, resultCardId) => ({
  type: ADD_RESULT_DESCRIPTION,
  resultDescription,
  resultCardId,
})

export const setResultRelation = (resultId) => ({
  type: SET_RESULT_RELATION,
  resultId,
})

//REDUCER

const testStore = (state = [], action) => {
  switch (action.type) {
    case ADD_PICTURE_URL:
      if (state[1].length === 0) {
        return [
          ...state[0],
          [{ ...state[1], questionImageUrl: action.questionImageUrl, id: 0 }],
        ]
      } else {
        state[1][action.id].questionImage = action.questionImageUrl
        return [...state]
      }
    case REMOVE_PICTURE_URL:
      let found = state.find(
        (el) => el.questionImageUrl === action.questionImageUrl
      )
      return state.filter(
        (el) => el.questionImageUrl !== found.questionImageUrl
      )

    case REMOVE_TEST_CARD:
      if (state[1].length > 1) {
        if (action.testCardId === state[1][state.length - 1].id) {
          state[1] = state[1].filter((el) => el.id !== action.testCardId)

          return [...state]
        } else {
          state[1] = state[1].filter((el) => el.id !== action.testCardId)
          state[1].map((el) => {
            el.id === 0 ? (el.id = 0) : (el.id -= 1)
            return [...state]
          })
        }

        return [...state]
      } else {
        state[1][0].id = 0

        return [...state]
      }

    case ADD_TEST_CARD:
      if (state.length === 0) {
        state[1] = initValue
        return [...state]
      } else {
        return [
          [...state[0]],
          [...state[1]].concat({
            id: state[1][state[1].length - 1].id + 1,
            questionImage:
              'https://ic.pics.livejournal.com/shichengaru/82230564/1654969/1654969_original.jpg',
            question: 'Текст вопроса',
            answers: [
              { answerId: 0, answer: 'Текст ответа', answerRelation: 0 },
            ],
          }),
        ]
      }
    case ADD_QUESTION:
      state[1][action.qusetionId].question = action.textOfTheQuestion
      return [...state]

    case ADD_ANSWER_LINE:
      let newId =
        state[1][action.answerBlockId].answers[
          state[1][action.answerBlockId].answers.length - 1
        ].answerId

      state[1][action.answerBlockId].answers.push({
        answerId: (newId += 1),
        answer: '',
        answerRelation: 0,
      })

      return [...state]

    case ADD_ANSWER:
      // textOftheAnswer,
      // answerId,
      // answerBlockId,

      state[1] = state[1].map((el) => {
        if (el.id === action.answerBlockId) {
          el.answers.map((elem) => {
            if (elem.answerId === action.answerId) {
              elem.answer = action.textOftheAnswer
            }
          })
        }

        return el
      })
      return [...state]

    case REMOVE_ANSWER:
      // answerBlockId
      // answerId

      let toRemove = state[1][action.answerBlockId].answers[action.answerId]

      state[1][action.answerBlockId].answers = state[1][
        action.answerBlockId
      ].answers.filter((el) => {
        return el !== toRemove
      })

      state[1][action.answerBlockId].answers.map((el) => {
        if (el.answerId > action.answerId) {
          el.answerId -= 1
        }
        return el
      })

      return [...state]

    case ADD_RESULT_CARD:
      state[0] = [...state[0]].concat({
        resId: action.resultCardId,
        resHeader: '',
        resDescr: '',
        resImg:
          'https://obzor.city/data/images/news_2023/zgl/hackaton/gotor.jpg',
      })

      return [...state]

    case ADD_RESULT_IMAGE:
      state[0] = state[0].map((el) => {
        if (el.resId === action.resultCardId) {
          el.resImg = action.resultImageUrl
        }
        return el
      })

      return [...state]

    case ADD_RESULT_HEADER:
      state[0] = state[0].map((el) => {
        if (el.resId === action.resultCardId) {
          el.resHeader = action.resultHeader
        }

        return el
      })
      return [...state]

    case ADD_RESULT_DESCRIPTION:
      state[0] = state[0].map((el) => {
        if (el.resId === action.resultCardId) {
          el.resDescr = action.resultDescription
        }

        return el
      })
      return [...state]

    case SET_RESULT_RELATION:
      return [...state]

    case REMOVE_RESULT_CARD:
      state[0] = state[0].filter((el) => {
        return el.resId !== action.resultCardId
      })

      state[0].map((el) => {
        if (el.resId > action.resultCardId) {
          el.resId -= 1
        }

        return el
      })

      return [...state]

    default: {
      return state
    }
  }
}

//STORE - пока без тулкита

export const store = createStore(
  testStore,
  initValue,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
