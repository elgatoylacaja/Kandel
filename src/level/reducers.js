import { SUBMIT_ANSWER } from '../arcade/actions'
import { START_LEVEL } from './actions'


const defaultState = {
    level: 1,
    totalQuestions: 2,
    answers: [],
    finished: false,
}


export default (state = defaultState, action) => {

  switch (action.type) {

    case START_LEVEL:
      return {
        ...state,
        answers: [],
        finished: false,
        level: action.level,
    }
        
    case SUBMIT_ANSWER:
      return {
        ...state,
        answers: state.answers.concat(action.answer),
        finished: (state.answers.length + 1 === state.totalQuestions),
    }
        
    default:
      return state

  }

}
