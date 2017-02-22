import React, { PropTypes } from 'react'


const IncorrectFeedback = ({result}) =>
    <div className='arcade-feedback-incorrect'>
        La respuesta era <b>{result}</b>
    </div>


const CorrectFeedback = () =>
    <div className='arcade-feedback-correct'>
        ¡Correcto!
    </div>


const Feedback = ({feedback}) =>
    feedback.input === feedback.result
        ? <CorrectFeedback />
        : <IncorrectFeedback result={feedback.result} />


const FeedbackWrapper = ({feedback}) =>
    feedback.visible
        ? <Feedback feedback={feedback} />
        : null


FeedbackWrapper.propTypes = {
    feedback: PropTypes.object.isRequired,
}


export default FeedbackWrapper
