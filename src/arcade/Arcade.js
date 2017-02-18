import React, { PropTypes } from 'react'


const SubmitButton = ({value}) =>
    <div className='arcade-buttons-row-button'>
        {value}
    </div>


const BackButton = ({value}) =>
    <div className='arcade-buttons-row-button'>
        {value}
    </div>


const InputButton = ({value, arcadeInput}) =>
    <div 
        className='arcade-buttons-row-button'
        onClick={e => arcadeInput(value)}
    >
        <span>{value}</span>
    </div>


const Row1 = ({arcadeInput}) =>
    <div className='arcade-buttons-row'>
        <InputButton value={7} arcadeInput={arcadeInput} />
        <InputButton value={8} arcadeInput={arcadeInput} />
        <InputButton value={9} arcadeInput={arcadeInput} />
    </div>


const Row2 = ({arcadeInput}) =>
    <div className='arcade-buttons-row'>
        <InputButton value={4} arcadeInput={arcadeInput} />
        <InputButton value={5} arcadeInput={arcadeInput} />
        <InputButton value={6} arcadeInput={arcadeInput} />
    </div>


const Row3 = ({arcadeInput}) =>
    <div className='arcade-buttons-row'>
        <InputButton value={1} arcadeInput={arcadeInput} />
        <InputButton value={2} arcadeInput={arcadeInput} />
        <InputButton value={3} arcadeInput={arcadeInput} />
    </div>


const Row4 = ({arcadeInput}) =>
    <div className='arcade-buttons-row'>
        <BackButton value={String.fromCharCode('8592')} />
        <InputButton value={0} arcadeInput={arcadeInput} />
        <SubmitButton value={String.fromCharCode('8629')} />
    </div>


const Buttons = ({arcadeInput}) =>
    <div className='arcade-buttons'>
        <Row1 arcadeInput={arcadeInput} />
        <Row2 arcadeInput={arcadeInput} />
        <Row3 arcadeInput={arcadeInput} />
        <Row4 arcadeInput={arcadeInput} />
    </div>


const Question = ({answer}) =>
    <div className='arcade-question'>
        885 x 7 = {answer ? answer : '?'}
    </div>


const Arcade = props =>
    <div className='screen'>
        <div className='arcade'>
            <Question answer={props.answer} />
            <Buttons arcadeInput={props.arcadeInput} />
        </div>
    </div>


Arcade.propTypes = {
    answer: PropTypes.number,
    arcadeInput: PropTypes.func.isRequired,
}


export default Arcade
