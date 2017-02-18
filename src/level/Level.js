import React from 'react'


const LevelStars = () =>
    <span className='level-stars'>
        <span className='level-stars-star'>x</span>
        <span className='level-stars-star'>x</span>
        <span className='level-stars-star'>x</span>
    </span>


const LevelTime = ({time}) =>
    <span className='level-time'>
         {time}
    </span>


const LevelNumber = ({level}) =>
    <span className='level-number'>
        {level}.
    </span>


const Level = ({level, time}) =>
    <a 
        className='level'
        href='/arcade'
    >
        <LevelNumber level={level} />
        <LevelTime time={time} />
        <LevelStars />
    </a>


const Levels = props =>
    <div className='screen'>
        <div className='levels'>
            <Level level='1' time='00:54.234s' />
            <Level level='2' time='00:54.234s' />
            <Level level='3' time='00:54.234s' />
            <Level level='4' time='00:54.234s' />
            <Level level='5' time='00:54.234s' />
        </div>
    </div>


export default Levels
