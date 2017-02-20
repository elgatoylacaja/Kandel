import math from 'mathjs'
import { randomInt, randomChoice } from './shared'


export default () => {
    let operator = randomChoice(['+', '*']) 
    let operand1 = randomInt(10,20)
    let operand2 = randomInt(10,20)
    let result = math.eval(operand1 + operator + operand2)
    return {operator, operand1, operand2, result}
}
