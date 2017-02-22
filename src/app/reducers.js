import { combineReducers } from 'redux'
import { reducer as arcadeReducer } from './arcade'
import { reducer as levelReducer } from './level'
import { reducer as levelsReducer } from './levels'
import { reducer as timerReducer } from './arcade/timer'


export default combineReducers({
    level: levelReducer,
    levels: levelsReducer,
    arcade: arcadeReducer,
    timer: timerReducer,
})
