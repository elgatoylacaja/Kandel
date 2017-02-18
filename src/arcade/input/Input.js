import React, { PropTypes } from 'react'


const SubmitButton = ({submitAnswer}) =>
    <div 
        className='arcade-submit-button'
        onClick={submitAnswer}
    >
        { String.fromCharCode('8629') }
    </div>


const EraseButton = ({eraseInput}) =>
    <div 
        className='arcade-erase-button'
        onClick={eraseInput}
    >
        { String.fromCharCode('8592') }
    </div>


const InputButton = ({value, typeInput}) =>
    <div 
        className='arcade-input-button'
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


const Row4 = ({typeInput, submitAnswer, eraseInput}) =>
    <div className='arcade-buttons-row'>
        <EraseButton eraseInput={eraseInput} /> 
        <InputButton value={0} typeInput={typeInput} />
        <SubmitButton submitAnswer={submitAnswer} />
    </div>


const Buttons = ({typeInput, submitAnswer, eraseInput}) =>
    <div className='arcade-buttons'>
        <Row1 typeInput={typeInput} />
        <Row2 typeInput={typeInput} />
        <Row3 typeInput={typeInput} />
        <Row4 
            typeInput={typeInput} 
            submitAnswer={submitAnswer} 
            eraseInput={eraseInput} 
        />
    </div>


Buttons.propTypes = {
    typeInput: PropTypes.func.isRequired,
    submitAnswer: PropTypes.func.isRequired,
    eraseInput: PropTypes.func.isRequired,
}


export default Buttons
