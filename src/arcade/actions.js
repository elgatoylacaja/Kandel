export const ARCADE_INPUT = 'ARCADE_INPUT'
export const SUBMIT_ANSWER = 'SUBMIT_ANSWER'


export const typeInput = (input) => ({
    type: ARCADE_INPUT,
    input
})


export const submitAnswer = () => ({
    type: SUBMIT_ANSWER,
})
