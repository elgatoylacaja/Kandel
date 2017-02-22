import React, { PropTypes } from 'react'


const Countdown = ({countdown}) =>
    <div className='countdown'>
        <div 
            className='countdown-bar'
            style={{'width': + countdown + '%'}}
        >
        </div>
    </div>


Countdown.propTypes = {
    countdown: PropTypes.number.isRequired,
}


export default Countdown
