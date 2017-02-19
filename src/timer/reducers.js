import { RESET_TIMER, UPDATE_TIMER, STOP_TIMER } from './actions'


const defaultState = {
    time: 0,
    startTime: 0,
    limit: 0,
    countdown: 100,
    running: false,
}


export default (state = defaultState, action) => {


    switch (action.type) {


        case RESET_TIMER:
            return {
                ...state,
                time: 0,
                startTime: Date.now(),
                limit: action.limit,
                countdown: 100,
                running: true,
            }


        case UPDATE_TIMER:
            let time = Date.now() - state.startTime
            let countdown = state.limit > time 
                ? 100 * (state.limit - time) / state.limit
                : 0
            return {
                ...state,
                time,
                countdown,
            }


        case STOP_TIMER:
            return {
                ...state,
                running: false,
            }


        default:
            return state

    }

}
