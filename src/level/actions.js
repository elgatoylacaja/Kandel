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
