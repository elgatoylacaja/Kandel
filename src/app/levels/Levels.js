import React, { PropTypes } from 'react'
import { GenericHeader, Stars } from '../shared'


const LevelStars = ({efficacy}) =>
    <span className='level-stars'>
        <Stars efficacy={efficacy} />
    </span>


const LevelTime = ({time}) =>
    <span className='level-time'>
         {time}
    </span>


const LevelNumber = ({level}) =>
    <span className='level-number'>
        {level}.
    </span>


const LevelRow = ({level, startLevel}) =>
    <div 
        className='level'
        onClick={e => startLevel(level.level)}
    >
        <LevelNumber level={level.level} />
        <LevelTime time={level.time} />
        <LevelStars efficacy={level.efficacy} />
    </div>


const LevelList = ({levels, startLevel}) =>
    <div className='levels'>
        {levels.map((level, i) =>
            <LevelRow
                key={i} 
                level={level} 
                startLevel={startLevel}
            />
        )}
    </div>


const Levels = ({levels, startLevel}) =>
    <div className='screen'>
        <GenericHeader title='arcade' />
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
