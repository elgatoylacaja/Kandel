import React, { PropTypes } from 'react'


const GenericHeader = ({title}) =>
    <a className='generic-header' href='/' >
        <i className='fa fa-chevron-left'></i>
        <span className='generic-header-title'>
            {title}
        </span>
    </a>


GenericHeader.propTypes = {
    title: PropTypes.string.isRequired, 
}


export default GenericHeader
