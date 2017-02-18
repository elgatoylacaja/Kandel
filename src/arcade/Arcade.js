import React, { PropTypes } from 'react'


const Result = ({submitted, input, question}) =>
    submitted 
    ? <div className='arcade-result'>
{question.result === Number(input)
    ? <div>Correct</div>
    : <div>Incorrect</div>
}
    </div>
    : null


const SubmitButton = ({submitAnswer}) =>
    <div 
        className='arcade-buttons-row-button'
        onClick={submitAnswer}
    >
        { String.fromCharCode('8629') }
    </div>


const BackButton = () =>
    <div className='arcade-buttons-row-button'>
        { String.fromCharCode('8592') }
    </div>


const InputButton = ({value, typeInput}) =>
    <div 
        className='arcade-buttons-row-button'
        onClick={e => typeInput(value)}
    >
        <span>{value}</span>
    </div>


const Row1 = ({typeInput}) =>
    <div className='arcade-buttons-row'>
        <InputButton value={7} typeInput={typeInput} />
        <InputButton value={8} typeInput={typeInput} />
        <InputButton value={9} typeInput={typeInput} />
    </div>


const Row2 = ({typeInput}) =>
    <div className='arcade-buttons-row'>
        <InputButton value={4} typeInput={typeInput} />
        <InputButton value={5} typeInput={typeInput} />
        <InputButton value={6} typeInput={typeInput} />
    </div>


const Row3 = ({typeInput}) =>
    <div className='arcade-buttons-row'>
        <InputButton value={1} typeInput={typeInput} />
        <InputButton value={2} typeInput={typeInput} />
        <InputButton value={3} typeInput={typeInput} />
    </div>


const Row4 = ({typeInput, submitAnswer}) =>
    <div className='arcade-buttons-row'>
        <BackButton /> 
        <InputButton value={0} typeInput={typeInput} />
        <SubmitButton submitAnswer={submitAnswer} />
    </div>


const Buttons = ({typeInput, submitAnswer}) =>
    <div className='arcade-buttons'>
        <Row1 typeInput={typeInput} />
        <Row2 typeInput={typeInput} />
        <Row3 typeInput={typeInput} />
        <Row4 typeInput={typeInput} submitAnswer={submitAnswer} />

    </div>


const Question = ({input, question}) =>
    <div className='arcade-question'>
        {question.operation} = {input ? input : '?'}
    </div>


const Arcade = props =>
    <div className='screen'>
        <div className='arcade'>
            <Result 
                submitted={props.submitted} 
                input={props.input} 
                question={props.question} 
            />
            <Question 
                question={props.question} 
                input={props.input} 
            />
            <Buttons 
                typeInput={props.typeInput} 
                submitAnswer={props.submitAnswer} 
            />
        </div>
    </div>


Arcade.propTypes = {
    input: PropTypes.string.isRequired,
    question: PropTypes.object.isRequired,
    typeInput: PropTypes.func.isRequired,
    submitAnswer: PropTypes.func.isRequired,
    submitted: PropTypes.bool.isRequired,
}


export default Arcade
