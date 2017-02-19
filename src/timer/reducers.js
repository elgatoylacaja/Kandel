import { RESET_TIMER, UPDATE_TIMER, STOP_TIMER } from './actions'


const defaultState = {
    time: 0,
    startTime: null,
}


export default (state = defaultState, action) => {

  switch (action.type) {

    case RESET_TIMER:
      return {
        ...state,
        time: 0,
        startTime: Date.now()
      }

    case UPDATE_TIMER:
      return {
        ...state,
        time: Date.now() - state.startTime
      }

    case STOP_TIMER:
      return {
        ...state,
    }
        
    default:
      return state

  }

}
