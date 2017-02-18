import { combineReducers } from 'redux'
import { reducer as arcadeReducer } from './arcade'


export default combineReducers({
    arcade: arcadeReducer,
})
