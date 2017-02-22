import React, { PropTypes } from 'react'
import Feedback from './feedback'
import Header from './header'
import Countdown from './countdown'
import Input from './input'
import Operation from './operation'


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
    trials: PropTypes.array.isRequired,
    totalTrials: PropTypes.number.isRequired,
    time: PropTypes.number.isRequired,
    trial: PropTypes.object.isRequired,
    feedback: PropTypes.object.isRequired,
    typeInput: PropTypes.func.isRequired,
    eraseInput: PropTypes.func.isRequired,
    submitTrial: PropTypes.func.isRequired,
}


export default Arcade
