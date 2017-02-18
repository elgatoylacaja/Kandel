export const ADD_ANSWER = 'ADD_ANSWER'
export const FINISH_LEVEL = 'FINISH_LEVEL'
export const GENERATE_QUESTION = 'GENERATE_QUESTION'


const addAnswer = () => ({
    type: ADD_ANSWER,
    answer: {}
})


const finishLevel = () => ({
    type: FINISH_LEVEL
})


export const submitAnswer = (input, answers, totalQuestions) => dispatch => {
    if (input) {
        dispatch(addAnswer())
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
