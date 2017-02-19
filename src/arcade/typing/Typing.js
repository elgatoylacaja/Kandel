import React, { PropTypes } from 'react'
import Header from './header'
import { Input, Question } from '../shared'
import { Countdown } from '../../timer'


const TypingArcade = props =>
    <div className='arcade'>
        <Header {...props} />
        <Countdown />
        <Question {...props} />
        <Input {...props} />
    </div>


TypingArcade.propTypes = {
    input: PropTypes.string.isRequired,
    question: PropTypes.object.isRequired,
    typeInput: PropTypes.func.isRequired,
    submitAnswer: PropTypes.func.isRequired,
    eraseInput: PropTypes.func.isRequired,
    answers: PropTypes.array.isRequired,
    time: PropTypes.number.isRequired,
}


export default TypingArcade
