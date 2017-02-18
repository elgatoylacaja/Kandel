import { ARCADE_INPUT } from './actions'


const defaultState = {
    answer: null,
}


export default (state = defaultState, action) => {

  switch (action.type) {

    case ARCADE_INPUT:
      return {
        ...state,
        answer: state.answer ? '' + state.answer + action.input : action.input
      }

    default:
      return state

  }

}
