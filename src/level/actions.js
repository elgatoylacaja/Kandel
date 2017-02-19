import { startTimer } from '../timer/actions'

export const ADD_ANSWER = 'ADD_ANSWER'
export const FINISH_LEVEL = 'FINISH_LEVEL'
export const GENERATE_QUESTION = 'GENERATE_QUESTION'


const addAnswer = (question, input, time) => ({
    type: ADD_ANSWER,
    answer: {question, input, time}
})


const finishLevel = () => ({
    type: FINISH_LEVEL
})


export const submitAnswer = (question, input, answers, totalQuestions, time) => dispatch => {
    if (input) {
        dispatch(addAnswer(question, input, time))
        if (answers.length + 1 === totalQuestions)
            dispatch(finishLevel()) 
    }
}


const randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min


const generateQuestion = () => {
    let operators = ['+', '*']
    let operator = operators[Math.floor(Math.random() * operators.length)]
    let operand1 = randomInt(0,10)
    let operand2 = randomInt(0,10)
    let result = eval(operand1 + operator + operand2)
    return {
        type: GENERATE_QUESTION,
        question: {result, operator, operand1, operand2}
    }
}


export const createQuestion = () => dispatch => {
    dispatch(generateQuestion())
    dispatch(startTimer())
}
