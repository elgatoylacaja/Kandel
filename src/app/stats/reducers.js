import { GET_STATS } from './actions'


const defaultState = {
    stats: []
}


export default (state = defaultState, action) => {

  switch (action.type) {

    case GET_STATS:
      return {
        ...state,
        stats: action.stats
    }
        
    default:
      return state

  }

}
