import dummyTrials from './dummyTrials'
export const GET_STATS = 'GET_STATS'
const OPTYPES = ['1+1', '1x1', '2+2', '2x1', '3x1', '2^2', '4x1', '3x2', '4^2']


const buildStat = ({opType, trials}) => {
    let averageTime, sumTime, correctTrials, efficacy, evolution = null
    if (trials.length) {
        evolution = trials.map(trial => trial.time)
        sumTime = evolution.reduce((prevTime, time) => prevTime + time, 0)
        averageTime = (sumTime / trials.length).toFixed(3)
        correctTrials = trials.filter(trial => trial.correct === true)
        efficacy = (correctTrials.length / trials.length).toFixed(0)
    }
    return {opType, averageTime, efficacy, evolution}
}


const filterTrialsByType = opType => ({
    opType,
    trials: dummyTrials.filter(trial => trial.operation.type === opType)
})


export const getStats = () => ({
    type: GET_STATS,
    stats: OPTYPES.map(filterTrialsByType).map(buildStat)
})
