import createOperation from '../../operations'

export const ARCADE_TYPE_INPUT = 'ARCADE_TYPE_INPUT'
export const ARCADE_ERASE_INPUT = 'ARCADE_ERASE_INPUT'
export const CREATE_TRIAL = 'CREATE_TRIAL'
export const SUBMIT_TRIAL = 'SUBMIT_TRIAL'
export const SHOW_FEEDBACK = 'SHOW_FEEDBACK'
export const HIDE_FEEDBACK = 'HIDE_FEEDBACK'


export const createTrial = (level) => ({
    type: CREATE_TRIAL,
    trial: {
        input: null,
        operation: createOperation(level),
        time: 0,
    }
})


export const typeInput = input => ({
    type: ARCADE_TYPE_INPUT,
    input
})

export const eraseInput = () => ({
    type: ARCADE_ERASE_INPUT,
})


export const submitTrial = trial => ({
    type: SUBMIT_TRIAL,
    trial
})


export const showFeedback = trial => ({
    type: SHOW_FEEDBACK,
    trial
})


export const hideFeedback = () => ({
    type: HIDE_FEEDBACK
})
