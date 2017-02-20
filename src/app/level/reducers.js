import { SUBMIT_ANSWER, FINISH_QUESTION } from '../arcade/actions'
import { START_LEVEL } from './actions'


const defaultState = {
    level: 1,
    totalQuestions: 2,
    answers: [],
    levelFinished: false,
}


export default (state = defaultState, action) => {

  switch (action.type) {

    case START_LEVEL:
      return {
        ...state,
        answers: [],
        levelFinished: false,
        level: action.level,
    }
        
    case SUBMIT_ANSWER:
      return {
        ...state,
        answers: state.answers.concat(action.answer)
    }

    case FINISH_QUESTION:
      return {
        ...state,
        levelFinished: (state.answers.length === state.totalQuestions)
    }
        
    default:
      return state

  }

}
