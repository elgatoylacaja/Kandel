import { GENERATE_QUESTION } from './actions'
import { SUBMIT_ANSWER } from './actions'


const defaultState = {
    totalQuestions: 3,
    answers: [],
    finished: false,
    submitted: false,
    question: {
        operand1: null,
        operand2: null,
        operator: null,
        result: null,
    },
}


export default (state = defaultState, action) => {

  switch (action.type) {

    case GENERATE_QUESTION:
      return {
        ...state,
        question: action.question,
        submitted: false,
      }

    case SUBMIT_ANSWER:
      return {
        ...state,
        submitted: true,
        answers: state.answers.concat(action.answer),
        finished: (state.answers.length + 1 === state.totalQuestions),
    }
        
    default:
      return state

  }

}
