import { combineReducers } from 'redux'
import { reducer as arcadeReducer } from './arcade'
import { reducer as levelReducer } from './level'


export default combineReducers({
    arcade: arcadeReducer,
    level: levelReducer,
})
