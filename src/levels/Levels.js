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


const Level = ({level, selectLevel}) =>
    <div 
        className='level'
        onClick={e => selectLevel(level.level)}
    >
        <LevelNumber level={level.level} />
        <LevelTime time={level.time} />
        <LevelStars time={level.time} />
    </div>


const BackToArcade = () =>
    <a 
        className='levels-back'
        href='/arcade'
    >
        { String.fromCharCode('8592') + ' Arcade' }
    </a>


const Levels = ({levels, selectLevel}) =>
    <div className='levels'>
        {levels.map((level, i) =>
            <Level 
                key={i} 
                level={level} 
                selectLevel={selectLevel}
            />
        )}
    </div>


const LevelsScreen = ({levels, selectLevel}) =>
    <div className='screen'>
        <BackToArcade />
        <Levels 
            levels={levels} 
            selectLevel={selectLevel}
        />
    </div>


LevelsScreen.propTypes = {
    levels: PropTypes.array.isRequired,
    selectLevel: PropTypes.func.isRequired,
}


export default LevelsScreen
