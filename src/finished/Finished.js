import React, { PropTypes } from 'react'


const Logo = () =>
    <i className='fa fa-circle finished-logo'>
    </i>


const MainMenu = () =>
    <div className='finished-menu'>
        Menú principal
    </div>


const Replay = ({startLevel, level}) =>
    <i 
        className='fa fa-undo finished-replay'
        onClick={e=> startLevel(level)} 
    >
    </i>

  
const NextLevel = ({startLevel, level}) =>
    <i 
        onClick={e=> startLevel(level + 1)}
        className='fa fa-arrow-right finished-next'
    >
    </i>


const Buttons = props =>
    <div className='finished-buttons'>
        <Replay {...props} />
        <NextLevel {...props} />
    </div>


const Congratulations = () =>
    <div className='finished-header-congratulations'>
        Felicitaciones. Nivel completado.
    </div>


const Performance = ({level}) =>
    <div className='finished-performance'>
        <div className='finished-performance-level'>
            Nivel {level}
        </div>
        <div className='finished-performance-stars'>
            <i className='fa fa-star finished-performance-star'></i>
            <i className='fa fa-star finished-performance-star'></i>
            <i className='fa fa-star finished-performance-star'></i>
        </div>
        <div className='finished-performance-correct'>
            18 / 20 correctas
        </div>
    </div>


const Header = ({level}) =>
    <div className='finished-header'>
        <Congratulations />
        <Performance level={level} />
    </div>


const Content = props =>
    <div className='finished-content'>
        <Header {...props} />
        <Buttons {...props} />
        <MainMenu />
        <Logo />
    </div>


const Background = () =>
    <div className='finished-background'>
    </div>


const Finished = props =>
    <div className='screen'>
        <div className='finished'>
            <Background />
            <Content {...props} />
        </div>
    </div>


Finished.propTypes = {
    level: PropTypes.number.isRequired,
    startLevel: PropTypes.func.isRequired,
}


export default Finished
