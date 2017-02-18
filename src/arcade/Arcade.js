import React from 'react'


const Button = () =>
    <div className='arcade-buttons-row-button'>
        <span>
            3
        </span>
    </div>


const Row = () =>
    <div className='arcade-buttons-row'>
        <Button />
        <Button />
        <Button />
    </div>


const Buttons = props =>
    <div className='arcade-buttons'>
        <Row />
        <Row />
        <Row />
        <Row />
    </div>


const Question = props =>
    <div className='arcade-question'>
        885 x 7 = ?
    </div>


const Arcade = props =>
    <div className='screen'>
        <div className='arcade'>
            <Question />
            <Buttons />
        </div>
    </div>


export default Arcade
