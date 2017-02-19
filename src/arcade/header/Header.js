import React, { PropTypes } from 'react'


const timeToString = time => {
    let minutes = Math.floor(time / (1000 * 60)).toString()
    minutes = minutes.length < 2 ? '0' + minutes : minutes
    let seconds = Math.floor(time / 1000 % 60 ).toString()
    seconds = seconds.length < 2 ? '0' + seconds : seconds
    return minutes + ':' + seconds
}


const CountdownBar = () =>
    <div className='arcade-countdownbar'>
        <div 
            className='arcade-countdownbar-line'
            style={{'width': '30%'}}
        >
        </div>
    </div>


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


const HeaderTyping = ({answers, totalQuestions, time}) =>
    <div className='arcade-header-typing'>
        <div className='arcade-header-typing-time'>
            { timeToString(time) }
        </div>
        <div className='arcade-header-typing-hints'>
            pistas: 3/3
        </div>
        <div className='arcade-header-typing-remaining-questions'>
            {answers.length} / {totalQuestions}
        </div>
    </div>


const Header = (props) =>
    props.submitted 
        ? <Result {...props} />
        : <HeaderTyping {...props} />


const HeaderWrapper = (props) =>
    <div>
        <Header {...props} />
        <CountdownBar {...props} />
    </div>


HeaderWrapper.propTypes = {
    submitted: PropTypes.bool.isRequired,
    input: PropTypes.string.isRequired,
    question: PropTypes.object.isRequired,
    totalQuestions: PropTypes.number.isRequired,
    answers: PropTypes.array.isRequired,
    time: PropTypes.number.isRequired,
}

export default HeaderWrapper
