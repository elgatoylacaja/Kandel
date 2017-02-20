import React, { PropTypes } from 'react'
import Arcade from '../arcade'
import Finished from '../finished'


const Level = props =>
    props.levelFinished
        ? <Finished {...props} />
        : <Arcade {...props} />
    

Level.propTypes = {
    level: PropTypes.number.isRequired,
    totalQuestions: PropTypes.number.isRequired,
    answers: PropTypes.array.isRequired,
    levelFinished: PropTypes.bool.isRequired,
    startLevel: PropTypes.func.isRequired,
}


export default Level
