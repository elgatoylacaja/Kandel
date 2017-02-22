import React, { PropTypes } from 'react'


const Star = () =>
    <i className='fa fa-star level-stars-star'>
    </i>


const LevelStars = () =>
    <span className='level-stars'>
        <Star />
        <Star />
        <Star />
    </span>


const LevelTime = ({time}) =>
    <span className='level-time'>
         {time}
    </span>


const LevelNumber = ({level}) =>
    <span className='level-number'>
        {level}.
    </span>


const Level = ({level, startLevel}) =>
    <div 
        className='level'
        onClick={e => startLevel(level.level)}
    >
        <LevelNumber level={level.level} />
        <LevelTime time={level.time} />
        <LevelStars time={level.time} />
    </div>


const GenericHeader = () =>
    <a 
        className='generic-header'
        href='/'
    >
        { String.fromCharCode('8592') + ' Arcade' }
    </a>


const LevelList = ({levels, startLevel}) =>
    <div className='levels'>
        {levels.map((level, i) =>
            <Level 
                key={i} 
                level={level} 
                startLevel={startLevel}
            />
        )}
    </div>


const Levels = ({levels, startLevel}) =>
    <div className='screen'>
        <GenericHeader />
        <LevelList 
            levels={levels} 
            startLevel={startLevel}
        />
    </div>


Levels.propTypes = {
    levels: PropTypes.array.isRequired,
    startLevel: PropTypes.func.isRequired,
}


export default Levels
