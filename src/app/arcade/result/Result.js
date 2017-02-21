import React, { PropTypes } from 'react'
import Header from './header'
import { Operation, Input } from '../shared'
import { Countdown } from '../../timer'


const ResultArcade = props =>
    <div className='arcade'>
        <Header {...props} />
        <Countdown countdown={100} />
        <Operation {...props} />
        <Input />
    </div>


ResultArcade.propTypes = {
    input: PropTypes.string.isRequired,
    operation: PropTypes.object.isRequired,
}


export default ResultArcade
