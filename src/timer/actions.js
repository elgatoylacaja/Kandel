export const RESET_TIMER = 'RESET_TIMER'
export const UPDATE_TIMER = 'UPDATE_TIMER'
export const STOP_TIMER = 'STOP_TIMER'


let timer = null


export const resetTimer = limit => ({
    type: RESET_TIMER,
    limit,
})


export const updateTimer = () => ({
    type: UPDATE_TIMER
})


export const stopTimer = () => {
    clearInterval(timer)
    return { type: STOP_TIMER }
}


export const startTimer = limit => dispatch => {
    clearInterval(timer)
    dispatch(resetTimer(limit))
    timer = setInterval(() => dispatch(updateTimer()), 1000)
}
