import createOperation from '../../operations'

export const ARCADE_INPUT = 'ARCADE_INPUT'
export const ERASE_INPUT = 'ERASE_INPUT'
export const CREATE_TRIAL = 'CREATE_TRIAL'
export const SUBMIT_TRIAL = 'SUBMIT_TRIAL'
export const FINISH_TRIAL = 'FINISH_TRIAL'


export const createTrial = (level) => ({
    type: CREATE_TRIAL,
    operation: createOperation(level)
})


export const typeInput = (input) => ({
    type: ARCADE_INPUT,
    input
})

export const eraseInput = () => ({
    type: ERASE_INPUT,
})


export const submitTrial = (operation, input, time) => ({
    type: SUBMIT_TRIAL,
    trial: {operation, time, input:Number(input)}
})


export const finishTrial = () => ({
    type: FINISH_TRIAL,
})
