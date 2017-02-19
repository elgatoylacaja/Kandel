import React, { PropTypes } from 'react'


const fillZeroes = string =>
    string.length < 2 ? '0' + string : string


const timeToString = time => {
    let minutes = Math.floor(time / (1000 * 60)).toString()
    let seconds = Math.floor(time / 1000 % 60 ).toString()
    return fillZeroes(minutes) + ':' + fillZeroes(seconds)
}


const Time = ({time}) =>
    <div className='arcade-header-typing-time'>
        { timeToString(time) }
    </div>


const Hints = () =>
    <div className='arcade-header-typing-hints'>
        pistas: 3/3
    </div>


const LevelState = ({totalQuestions, answers}) =>
    <div className='arcade-header-typing-remaining-questions'>
        {answers.length} / {totalQuestions}
    </div>


const Typing = props =>
    <div className='arcade-header-typing'>
        <Time time={props.time} />
        <Hints />
        <LevelState 
            totalQuestions={props.totalQuestions} 
            answers={props.answers} 
        />
    </div>


Typing.propTypes = {
    answers: PropTypes.array.isRequired,
    totalQuestions: PropTypes.number.isRequired,
    time: PropTypes.number.isRequired,
}


export default Typing
