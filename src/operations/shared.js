

export const randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min


export const randomChoice = array =>
    array[Math.floor(Math.random() * array.length)]
