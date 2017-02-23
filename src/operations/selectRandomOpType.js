import math from 'mathjs'


export default probabilities => {
    let opTypesPool = []
    for (let opType in probabilities) {
        if (probabilities.hasOwnProperty(opType)) {
            let probability = probabilities[opType]
            for (let i=0; i<probability; i++)
                opTypesPool.push(opType)
        }
    }
    return math.pickRandom(opTypesPool)
}
