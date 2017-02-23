import math from 'mathjs'



const createOperand = digits => {
    let min = math.pow(10, digits - 1)
    let max = math.pow(10, digits) - 1
    return math.randomInt(min, max + 1)
}



const buildOperation = opType => { 

    let operator, operand1, operand2, result

    switch (opType) {

        case '1+1': 
            operator = '+'
            operand1 = createOperand(1)
            operand2 = createOperand(1)
            result = math.eval(operand1 + operator + operand2)
            return {opType, operator, operand1, operand2, result}


        case '1x1': 
            operator = '*'
            operand1 = createOperand(1)
            operand2 = createOperand(1)
            result = math.eval(operand1 + operator + operand2)
            return {opType, operator, operand1, operand2, result}


        case '2+2': 
            operator = '+'
            operand1 = createOperand(2)
            operand2 = createOperand(2)
            result = math.eval(operand1 + operator + operand2)
            return {opType, operator, operand1, operand2, result}


        case '2x1': 
            operator = '*'
            operand1 = createOperand(2)
            operand2 = createOperand(1)
            result = math.eval(operand1 + operator + operand2)
            return {opType, operator, operand1, operand2, result}


        case '3x1': 
            operator = '*'
            operand1 = createOperand(3)
            operand2 = createOperand(1)
            result = math.eval(operand1 + operator + operand2)
            return {opType, operator, operand1, operand2, result}


        case '2^2': 
            operator = '^'
            operand1 = createOperand(2)
            operand2 = 2
            result = math.eval(operand1 + operator + operand2)
            return {opType, operator, operand1, operand2, result}


        case '4x1': 
            operator = '*'
            operand1 = createOperand(4)
            operand2 = createOperand(1)
            result = math.eval(operand1 + operator + operand2)
            return {opType, operator, operand1, operand2, result}


        case '3^2': 
            operator = '^'
            operand1 = createOperand(3)
            operand2 = 2
            result = math.eval(operand1 + operator + operand2)
            return {opType, operator, operand1, operand2, result}


        case '4^2': 
            operator = '^'
            operand1 = createOperand(4)
            operand2 = 2
            result = math.eval(operand1 + operator + operand2)
            return {opType, operator, operand1, operand2, result}


        default:
            return null

    }

}


export default buildOperation
