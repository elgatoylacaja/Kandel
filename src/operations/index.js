import level01 from './level01'
import level02 from './level02'
import level03 from './level03'


const CREATE_OPERATION = [
    level01, level02, level03
]


export default level =>
    CREATE_OPERATION[ level - 1 ]()
