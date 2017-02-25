import React, { PropTypes } from 'react'


const StarEmpty = () =>
    <i className='fa fa-star-o star-empty'>
    </i>


const StarFull = () =>
    <i className='fa fa-star star-full'>
    </i>


const Stars = ({efficacy}) =>

    efficacy < 33
        ? <span><StarEmpty/><StarEmpty/><StarEmpty/></span>

    : efficacy < 66 
        ? <span><StarFull/><StarEmpty/><StarEmpty/></span>

    : efficacy < 100 
        ? <span><StarFull/><StarFull/><StarEmpty/></span>

    : <span><StarFull/><StarFull/><StarFull/></span>



Stars.propTypes = {
    efficacy: PropTypes.number.isRequired,
}


export default Stars
