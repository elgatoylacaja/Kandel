import React, { PropTypes } from 'react'


const calculatePercentage = (time, maxCounter) => {
    let countdown = 100 * (maxCounter - time) / maxCounter
    if (countdown > 0)
        return countdown
    return 0
}
    

const Countdown = ({time, maxCounter}) =>
    <div className='countdown'>
        <div 
            className='countdown-bar'
            style={{'width': + calculatePercentage(time, maxCounter) + '%'}}
        >
        </div>
    </div>


Countdown.propTypes = {
    time: PropTypes.number.isRequired,
    maxCounter: PropTypes.number.isRequired,
}


export default Countdown
