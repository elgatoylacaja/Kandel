export const GET_STATS = 'GET_STATS'


export const getStats = () => ({
    type: GET_STATS,
    stats: [
        {type: '1+1', time:'00:20.0014', efficacy:95},
        {type: '1+2', time:'00:20.0014', efficacy:95},
        {type: '1+3', time:'00:20.0014', efficacy:95},
        {type: '1+4', time:'00:20.0014', efficacy:95},
        {type: '1+5', time:'00:20.0014', efficacy:95},
        {type: '1+6', time:'00:20.0014', efficacy:95},
        {type: '1+7', time:null, efficacy:null},
        {type: '1+8', time:null, efficacy:null},
        {type: '1+9', time:null, efficacy:null},
    ]
})

