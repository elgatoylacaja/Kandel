import { 
    ARCADE_INPUT, 
    ERASE_INPUT, 
    CREATE_TRIAL,
    SUBMIT_TRIAL, 
    FINISH_TRIAL, 
} from './actions'



const defaultState = {
    input: '',
    operation: {
        operand1: null,
        operand2: null,
        operator: null,
        result: null,
    },
    submitted: false,
}


export default (state = defaultState, action) => {

  switch (action.type) {

    case CREATE_TRIAL:
      return {
        ...state,
        operation: action.operation,
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

    case SUBMIT_TRIAL:
      return {
        ...state,
        submitted: true,
    }

    case FINISH_TRIAL:
      return {
        ...state,
        input: '',
        operation: {
            operand1: null,
            operand2: null,
            operator: null,
            result: null,
        },
        submitted: false,
    }

    default:
      return state

  }

}
