import React, { PropTypes } from 'react'
import Header from './header'
import { Input, Operation } from '../shared'
import { Countdown } from '../../timer'


const TypingArcade = props =>
    <div className='arcade'>
        <Header {...props} />
        <Countdown />
        <Operation {...props} />
        <Input {...props} />
    </div>


TypingArcade.propTypes = {
    input: PropTypes.string.isRequired,
    operation: PropTypes.object.isRequired,
    typeInput: PropTypes.func.isRequired,
    submitTrial: PropTypes.func.isRequired,
    eraseInput: PropTypes.func.isRequired,
    trials: PropTypes.array.isRequired,
    totalTrials: PropTypes.number.isRequired,
    time: PropTypes.number.isRequired,
}


export default TypingArcade
