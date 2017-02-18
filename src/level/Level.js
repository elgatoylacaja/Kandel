import React, { PropTypes } from 'react'
import Arcade from '../arcade'


const Finished = () =>
    <div>
        Finished
    </div>


const Level = props =>
    props.finished
        ? <Finished />
        : <Arcade {...props} />
    

Level.propTypes = {
    totalQuestions: PropTypes.number.isRequired,
    answers: PropTypes.array.isRequired,
    finished: PropTypes.bool.isRequired,
    submitAnswer: PropTypes.func.isRequired,
    submitted: PropTypes.bool.isRequired,
}

export default Level
