import React from 'react'


const GenericHeader = () =>
    <a 
        className='generic-header'
        href='/'
    >
        { String.fromCharCode('8592') + ' Tutorial' }
    </a>


const Examples = () =>
    <div className='tutorial-examples'>
        <div className='tutorial-examples-title'>
            Ejemplos
        </div>
        <div className='tutorial-examples-body'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </div>
    </div>


const Video = ({label}) =>
    <div className='tutorial-video'>
    </div>


const Title = () =>
    <div className='tutorial-title'>
        Potencia (2 dígitos)
    </div>


const Tutorial = () =>
    <div className='screen'>
        <GenericHeader />
        <div className='tutorial'>
            <Title />
            <Video />
            <Examples />
        </div>
    </div>


export default Tutorial
