import React, { PropTypes } from 'react'


const Operation = ({input, operation}) =>
    <div className='arcade-operation'>
        {operation.operand1 + ' ' +  operation.operator + ' ' + operation.operand2}
        {' = '}
        {input ? input : '?'}
    </div>


Operation.propTypes = {
    input: PropTypes.string.isRequired,
    operation: PropTypes.object.isRequired,
}


export default Operation
