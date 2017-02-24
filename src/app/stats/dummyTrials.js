export default ([
{
input: 2,
operation: {
    type: '1+1',
    operand1: 1,
    operand2: 1,
    operator: '+',
    result: 2,
},
time: 124,
correct: true
},
{
input: 9,
operation: {
    type: '1+1',
    operand1: 1,
    operand2: 4,
    operator: '+',
    result: 5,
},
time: 9124,
correct: false
},
{
input: 3,
operation: {
    type: '1+1',
    operand1: 1,
    operand2: 6,
    operator: '+',
    result: 7,
},
time: 1314,
correct: false
},
{
input: 2,
operation: {
    type: '1x1',
    operand1: 1,
    operand2: 1,
    operator: 'x',
    result: 1,
},
time: 3124,
correct: false
},
{
input: 9,
operation: {
    type: '1x1',
    operand1: 2,
    operand2: 9,
    operator: 'x',
    result: 18,
},
time: 19124,
correct: false
},
{
input: 8,
operation: {
    type: '1x1',
    operand1: 2,
    operand2: 4,
    operator: 'x',
    result: 8,
},
time: 1010,
correct: true
}
])
