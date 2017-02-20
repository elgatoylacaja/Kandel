import math from 'mathjs'
export const ARCADE_INPUT = 'ARCADE_INPUT'
export const ERASE_INPUT = 'ERASE_INPUT'
export const SUBMIT_ANSWER = 'SUBMIT_ANSWER'
export const GENERATE_QUESTION = 'GENERATE_QUESTION'


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


const randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min


export const createQuestion = () => {
    let operators = ['+', '*']
    let operator = operators[Math.floor(Math.random() * operators.length)]
    let operand1 = randomInt(0,10)
    let operand2 = randomInt(0,10)
    let result = math.eval(operand1 + operator + operand2)
    return {
        type: GENERATE_QUESTION,
        question: {result, operator, operand1, operand2}
    }
}
