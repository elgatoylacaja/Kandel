import React, { PropTypes } from 'react'
import Header from './header/Header'
import Question from './question/Question'
import Input from './input/Input'


const GenerateQuestion = ({generateQuestion}) =>
    <div onClick={generateQuestion}>
        Generate Question
    </div>


const Arcade = props =>
    <div className='screen'>
        <div className='arcade'>
            <Header {...props} />
            <Question {...props} />
            <Input {...props} />
            <GenerateQuestion {...props} />
        </div>
    </div>


Arcade.propTypes = {
    input: PropTypes.string.isRequired,
    question: PropTypes.object.isRequired,
    typeInput: PropTypes.func.isRequired,
    submitAnswer: PropTypes.func.isRequired,
    eraseInput: PropTypes.func.isRequired,
    submitted: PropTypes.bool.isRequired,
    answers: PropTypes.array.isRequired,
    countdown: PropTypes.number.isRequired,
    time: PropTypes.number.isRequired,
}


export default Arcade
