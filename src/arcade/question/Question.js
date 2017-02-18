import React, { PropTypes } from 'react'


const Question = ({input, question}) =>
    <div className='arcade-question'>
        {question.operand1 + ' ' +  question.operator + ' ' + question.operand2} = {input ? input : '?'}
    </div>


Question.propTypes = {
    input: PropTypes.string.isRequired,
    question: PropTypes.object.isRequired,
}

export default Question
