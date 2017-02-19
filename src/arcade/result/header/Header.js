import React, { PropTypes } from 'react'


const IncorrectHeader = ({input, question}) =>
    <div className='arcade-result-incorrect'>
        La respuesta era <b>{question.result}</b>
    </div>


const CorrectHeader = () =>
    <div className='arcade-result-correct'>
        ¡Correcto!
    </div>


const Header = props =>
    props.question.result === Number(props.input)
        ? <CorrectHeader />
        : <IncorrectHeader input={props.input} question={props.question} />


Header.propTypes = {
    submitted: PropTypes.bool.isRequired,
    input: PropTypes.string.isRequired,
    question: PropTypes.object.isRequired,
}


export default Header
