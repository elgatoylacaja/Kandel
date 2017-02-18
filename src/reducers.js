import { combineReducers } from 'redux'
import { reducer as arcadeReducer } from './arcade'
import { reducer as levelsReducer } from './levels'


export default combineReducers({
    arcade: arcadeReducer,
    levels: levelsReducer,
})
