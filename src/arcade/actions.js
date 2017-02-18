export const ARCADE_INPUT = 'ARCADE_INPUT'
export const SUBMIT_ANSWER = 'SUBMIT_ANSWER'
export const GENERATE_QUESTION = 'GENERATE_QUESTION'
export const ERASE_INPUT = 'ERASE_INPUT'


export const typeInput = (input) => ({
    type: ARCADE_INPUT,
    input
})


export const submitAnswer = () => ({
    type: SUBMIT_ANSWER,
})


export const eraseInput = () => ({
    type: ERASE_INPUT,
})


export const generateQuestion = () => {

    const question = {
        result: 42,
        operator: '+',
        operand1: '19',
        operand2: '23',
    }

    return {
        type: GENERATE_QUESTION,
        question
    }

}
