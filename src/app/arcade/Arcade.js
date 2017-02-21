import React, { PropTypes } from 'react'
import Result from './result'
import Typing from './typing'


const Arcade = props =>
    <div className='screen'>
        {props.submitted
            ? <Result {...props} />
            : <Typing {...props} /> 
        }
    </div>


Arcade.propTypes = {
    input: PropTypes.string.isRequired,
    operation: PropTypes.object.isRequired,
    typeInput: PropTypes.func.isRequired,
    submitTrial: PropTypes.func.isRequired,
    eraseInput: PropTypes.func.isRequired,
    submitted: PropTypes.bool.isRequired,
    trials: PropTypes.array.isRequired,
    levelFinished: PropTypes.bool.isRequired,
}


export default Arcade
