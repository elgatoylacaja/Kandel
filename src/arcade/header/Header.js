import React, { PropTypes } from 'react'


const IncorrectResult = ({input, question}) =>
    <div className='arcade-result-incorrect'>
        {'La respuesta era ' + question.result + ', no ' + input}
    </div>


const CorrectResult = () =>
    <div className='arcade-result-correct'>
        ¡Correcto!
    </div>


const Result = ({submitted, input, question}) =>
    question.result === Number(input)
        ? <CorrectResult />
        : <IncorrectResult input={input} question={question} />


const HeaderTyping = () =>
    <div className='arcade-header-typing'>
        <div className='arcade-header-typing-time'>
            00:23:15
        </div>
        <div className='arcade-header-typing-hints'>
            pistas: 3/3
        </div>
        <div className='arcade-header-typing-remaining-questions'>
            5/20
        </div>
    </div>


const Header = ({submitted, input, question}) =>
    submitted 
        ? <Result input={input} question={question} />
        : <HeaderTyping />


Header.propTypes = {
    submitted: PropTypes.bool.isRequired,
    input: PropTypes.string.isRequired,
    question: PropTypes.object.isRequired,
}

export default Header
