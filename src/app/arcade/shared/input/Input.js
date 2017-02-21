import React, { PropTypes } from 'react'


const SubmitButton = ({submitTrial, operation, input, time}) =>
    <div 
        className='arcade-submit-button'
        onClick={e => submitTrial(operation, input, time)}
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


const Row4 = props =>
    <div className='arcade-buttons-row'>
        <EraseButton eraseInput={props.eraseInput} /> 
        <InputButton value={0} typeInput={props.typeInput} />
        <SubmitButton {...props} />
    </div>


const Input = props =>
    <div className='arcade-buttons'>
        <Row1 typeInput={props.typeInput} />
        <Row2 typeInput={props.typeInput} />
        <Row3 typeInput={props.typeInput} />
        <Row4 {...props} />
    </div>


Input.propTypes = {
    typeInput: PropTypes.func,
    submitTrial: PropTypes.func,
    eraseInput: PropTypes.func,
    input: PropTypes.string,
    operation: PropTypes.object,
}


export default Input
