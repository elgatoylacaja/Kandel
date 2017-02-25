import React, { PropTypes } from 'react'
import { Stars, MiniLogo } from '../shared'


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


const Performance = ({level, totalCorrect, efficacy, totalTrials}) =>
    <div className='finished-performance'>
        <div className='finished-performance-level'>
            Nivel {level}
        </div>
        <div className='finished-performance-stars'>
            <Stars efficacy={efficacy} />
        </div>
        <div className='finished-performance-correct'>
            {totalCorrect + ' / ' + totalTrials + ' correctas'}
        </div>
    </div>


const Header = props =>
    <div className='finished-header'>
        <Congratulations />
        <Performance {...props} />
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
    efficacy: PropTypes.number.isRequired,
    totalCorrect: PropTypes.number.isRequired,
    totalTrials: PropTypes.number.isRequired,
    startLevel: PropTypes.func.isRequired,
}


export default Finished
