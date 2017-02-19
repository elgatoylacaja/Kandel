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
    question: PropTypes.object.isRequired,
    typeInput: PropTypes.func.isRequired,
    submitAnswer: PropTypes.func.isRequired,
    eraseInput: PropTypes.func.isRequired,
    submitted: PropTypes.bool.isRequired,
    answers: PropTypes.array.isRequired,
}


export default Arcade
