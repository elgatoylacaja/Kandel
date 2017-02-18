import { ARCADE_INPUT, SUBMIT_ANSWER } from './actions'


const defaultState = {
    input: '',
    question: {
        operation: '19 + 23',
        result: 42,
    },
    submitted: false,
}


export default (state = defaultState, action) => {

  switch (action.type) {

    case ARCADE_INPUT:
      return {
        ...state,
        input: state.input + action.input,
      }

    case SUBMIT_ANSWER:
      return {
        ...state,
        submitted: true
      }

    default:
      return state

  }

}
