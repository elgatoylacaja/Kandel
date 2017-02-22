import React, { PropTypes } from 'react'
import Feedback from './feedback'
import Header from './header'
import Input from './input'
import Operation from './operation'
import { Countdown } from '../timer'


const Arcade = props =>
    <div className='screen'>
        <div className='arcade'>
            <Feedback {...props} />
            <Header {...props} />
            <Countdown {...props} />
            <Operation {...props} />
            <Input {...props} />
        </div>
    </div>


Arcade.propTypes = {
    totalTrials: PropTypes.number.isRequired,
    time: PropTypes.number.isRequired,
    trial: PropTypes.object.isRequired,
    feedback: PropTypes.object.isRequired,
    typeInput: PropTypes.func.isRequired,
    submitTrial: PropTypes.func.isRequired,
    eraseInput: PropTypes.func.isRequired,
    trials: PropTypes.array.isRequired,
}


export default Arcade
