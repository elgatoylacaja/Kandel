import React from 'react'


const MiniLogos = () =>
    <div className='splash-minilogos'>
        <div className='splash-gato'>
        </div>
        <div className='splash-lni'>
        </div>
    </div>


const Stats = () =>
    <a 
        className='splash-stats'
        href='/stats'
    >
        Estadísticas
    </a>


const Buttons = () =>
    <div className='splash-buttons'>
        <a 
            className='splash-play'
            href='/arcade'
        >
            Jugar
        </a>
        <div className='splash-pink-buttons'>
            <a 
                className='splash-practice'
                href='/practice'
            >
                Practice
            </a>
            <a
                className='splash-tutorial'
                href='/tutorials'
            >
                Tutorial
            </a>
        </div>
    </div>


const Logo = () =>
    <div className='splash-logo'>
    </div>


const Splash = () =>
    <div className='screen'>
        <div className='splash'>
            <Logo />
            <Buttons />
            <Stats />
            <MiniLogos />
        </div>
    </div>


export default Splash
