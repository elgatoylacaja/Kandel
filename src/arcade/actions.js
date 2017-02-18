export const ARCADE_INPUT = 'ARCADE_INPUT'
export const ERASE_INPUT = 'ERASE_INPUT'


export const typeInput = (input) => ({
    type: ARCADE_INPUT,
    input
})


export const eraseInput = () => ({
    type: ERASE_INPUT,
})
