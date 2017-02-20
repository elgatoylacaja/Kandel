import { 
    ERASE_INPUT, 
    ARCADE_INPUT, 
    SUBMIT_ANSWER, 
    GENERATE_QUESTION 
} from './actions'



const defaultState = {
    input: '',
    question: {
        operand1: null,
        operand2: null,
        operator: null,
        result: null,
    },
    submitted: false,
}


export default (state = defaultState, action) => {

  switch (action.type) {

    case GENERATE_QUESTION:
      return {
        ...state,
        question: action.question,
        submitted: false,
        input: '',
      }
        
    case ARCADE_INPUT:
      return {
        ...state,
        input: state.input + action.input,
      }

    case ERASE_INPUT:
      return {
        ...state,
        input: state.input.slice(0, -1),
      }

    case SUBMIT_ANSWER:
      return {
        ...state,
        submitted: true,
    }

    default:
      return state

  }

}
