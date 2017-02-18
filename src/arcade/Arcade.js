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
            <Header 
                submitted={props.submitted} 
                input={props.input} 
                question={props.question} 
            />
            <Question 
                question={props.question} 
                input={props.input} 
            />
            <Input 
                typeInput={props.typeInput} 
                submitAnswer={props.submitAnswer} 
                eraseInput={props.eraseInput} 
            />
            <GenerateQuestion
                generateQuestion={props.generateQuestion} 
            />
        </div>
    </div>


Arcade.propTypes = {
    input: PropTypes.string.isRequired,
    question: PropTypes.object.isRequired,
    typeInput: PropTypes.func.isRequired,
    submitAnswer: PropTypes.func.isRequired,
    eraseInput: PropTypes.func.isRequired,
    submitted: PropTypes.bool.isRequired,
}


export default Arcade
