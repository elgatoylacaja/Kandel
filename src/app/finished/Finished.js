import React, { PropTypes } from 'react'
import { MiniLogo } from '../shared'


const MainMenu = () =>
    <a href='/' className='finished-menu'>
        Menú principal
    </a>


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


const Performance = ({level, totalCorrect, totalTrials}) =>
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
            {totalCorrect + ' / ' + totalTrials + ' correctas'}
        </div>
    </div>


const Header = ({level, totalCorrect, totalTrials}) =>
    <div className='finished-header'>
        <Congratulations />
        <Performance 
            level={level} 
            totalCorrect={totalCorrect} 
            totalTrials={totalTrials}
        />
    </div>


const Content = props =>
    <div className='finished-content'>
        <Header {...props} />
        <Buttons {...props} />
        <MainMenu />
        <MiniLogo />
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
    totalCorrect: PropTypes.number.isRequired,
    totalTrials: PropTypes.number.isRequired,
    startLevel: PropTypes.func.isRequired,
}


export default Finished
