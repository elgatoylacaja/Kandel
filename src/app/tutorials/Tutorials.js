import React from 'react'
import { GenericHeader } from '../shared'


const Logo = () =>
    <div className='generic-logo'>
        <div className='generic-logo-icon'>
        </div>
    </div>


const TutorialLink = ({label}) =>
    <a 
        className='tutorial-link'
        href='/tutorial'
    >
        <span className='tutorial-link-label'>
            {label}
        </span>
        <i className='fa fa-chevron-right tutorial-link-arrow'></i>
    </a>


const TutorialList = () =>
    <div className='tutorial-links'>
        <TutorialLink label='Suma' />
        <TutorialLink label='Producto' />
        <TutorialLink label='Potencia (2 dígitos)' />
        <TutorialLink label='Potencia (3 dígitos)' />
        <TutorialLink label='Sistema Mayor' />
        <TutorialLink label='Potencia (4 dígitos)' />
    </div>


const Tutorial = () =>
    <div className='screen'>
        <GenericHeader title='tutorial' />
        <TutorialList />
        <Logo />
    </div>


export default Tutorial
