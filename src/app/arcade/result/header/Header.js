import React, { PropTypes } from 'react'


const IncorrectHeader = ({input, operation}) =>
    <div className='arcade-result-incorrect'>
        La respuesta era <b>{operation.result}</b>
    </div>


const CorrectHeader = () =>
    <div className='arcade-result-correct'>
        ¡Correcto!
    </div>


const Header = props =>
    props.operation.result === Number(props.input)
        ? <CorrectHeader />
        : <IncorrectHeader 
                input={props.input} 
                operation={props.operation} 
          />


Header.propTypes = {
    submitted: PropTypes.bool.isRequired,
    input: PropTypes.string.isRequired,
    operation: PropTypes.object.isRequired,
}


export default Header
