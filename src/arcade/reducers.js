import { ERASE_INPUT, ARCADE_INPUT } from './actions'
import { GENERATE_QUESTION } from '../level/actions'


const defaultState = {
    input: ''
}


export default (state = defaultState, action) => {

  switch (action.type) {

    case GENERATE_QUESTION:
      return {
        ...state,
        input: ''
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
        
    default:
      return state

  }

}
