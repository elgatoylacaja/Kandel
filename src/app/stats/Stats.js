import React, { PropTypes } from 'react'
import { GenericHeader } from '../shared'


const EmptyRow = ({stat}) =>
    <div className='stats-row-empty'>
        <div className='stats-row-empty-type'>
            {stat.opType}
        </div>
        <div className='stats-row-empty-message'>
            Juega más niveles
        </div>
    </div>


const Row = ({stat}) =>
    <div className='stats-row'>
        <div className='stats-row-type'>
            {stat.opType}
        </div>
        <div className='stats-row-time'>
            {stat.averageTime + ' s'}
        </div>
        <div className='stats-row-efficacy'>
            {stat.efficacy + '%'}
        </div>
    </div>


const List = ({stats}) =>
    <div className='stats-list'>
        {stats.map((stat, i) =>
            stat.averageTime 
                ?  <Row key={i} stat={stat} />
                :  <EmptyRow key={i} stat={stat} />
        )}
    </div>


const ListHeader = () =>
    <div className='stats-list-header'>
        <span className='stats-list-header-label'>
            Operación
        </span>
        <span className='stats-list-header-label'>
            Tiempo promedio
        </span>
        <span className='stats-list-header-label'>
            Eficacia 
        </span>
    </div>


const Stats = ({stats}) =>
    <div className='screen'>
        <div className='stats'>
            <GenericHeader title='estadísticas' />
            <ListHeader />
            <List stats={stats} />
        </div>
    </div>


Stats.propTypes = {
    stats: PropTypes.array.isRequired
}


export default Stats
