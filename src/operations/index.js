import difficultyOpTypes from './difficultyOpTypes'
import levelDifficulties from './levelDifficulties'
import selectRandomOpType from './selectRandomOpType'
import buildOperation from './buildOperation'


const createOperation = level => {
    let difficulty = levelDifficulties[level]
    let probabilities = difficultyOpTypes[difficulty]
    let opType = selectRandomOpType(probabilities)
    let operation = buildOperation(opType) 
    return operation
}


export default createOperation
