import { GENERATE_QUESTION, ERASE_INPUT, ARCADE_INPUT, SUBMIT_ANSWER } from './actions'


const defaultState = {
    input: '',
    question: {
        operand1: null,
        operand2: null,
        operator: null,
        result: null,
    },
    answer: {
        value: null,
        correct: null,
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
        answer: {value: null, correct: null},
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
        if (state.input)
          return {
            ...state,
            submitted: true
          }
        else return {...state}
        

    default:
      return state

  }

}
