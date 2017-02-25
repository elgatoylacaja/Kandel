export const START_LEVEL = 'START_LEVEL'
export const FINISH_LEVEL = 'FINISH_LEVEL'


export const startLevel = level => ({
    type: START_LEVEL,
    level
})


export const finishLevel = () => ({
    type: FINISH_LEVEL
})
