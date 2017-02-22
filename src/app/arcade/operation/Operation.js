import React, { PropTypes } from 'react'


const Operation = ({trial}) =>
    <div className='arcade-operation'>
        {trial.operation.operand1 + ' ' +  trial.operation.operator + ' ' + trial.operation.operand2}
        {' = '}
        {trial.input ? trial.input : '?'}
    </div>


Operation.propTypes = {
    trial: PropTypes.object.isRequired,
}


export default Operation
