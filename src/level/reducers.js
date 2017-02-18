import { GENERATE_QUESTION } from './actions'
import { ADD_ANSWER, FINISH_LEVEL } from './actions'


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

    case FINISH_LEVEL:
      return {
        ...state,
        finished: true,
      }

    case ADD_ANSWER:
      return {
        ...state,
        submitted: true,
        answers: state.answers.concat(action.answer)
    }
        
    default:
      return state

  }

}
