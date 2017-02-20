import createOperation from '../../operations'

export const ARCADE_INPUT = 'ARCADE_INPUT'
export const ERASE_INPUT = 'ERASE_INPUT'
export const SUBMIT_ANSWER = 'SUBMIT_ANSWER'
export const GENERATE_QUESTION = 'GENERATE_QUESTION'
export const FINISH_QUESTION = 'FINISH_QUESTION'


export const createQuestion = (level) => ({
    type: GENERATE_QUESTION,
    question: createOperation(level)
})


export const typeInput = (input) => ({
    type: ARCADE_INPUT,
    input
})

export const eraseInput = () => ({
    type: ERASE_INPUT,
})


export const submitAnswer = (question, input, time) => ({
    type: SUBMIT_ANSWER,
    answer: {question, input, time}
})


export const finishQuestion = () => ({
    type: FINISH_QUESTION,
})
