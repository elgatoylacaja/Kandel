import React, { PropTypes } from 'react'
import Header from './header'
import { Question, Input } from '../shared'
import { Countdown } from '../../timer'


const ResultArcade = props =>
    <div className='arcade'>
        <Header {...props} />
        <Countdown countdown={100} />
        <Question {...props} />
        <Input />
    </div>


ResultArcade.propTypes = {
    input: PropTypes.string.isRequired,
    question: PropTypes.object.isRequired,
}


export default ResultArcade
