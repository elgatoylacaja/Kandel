import { SELECT_LEVEL } from './actions'



const defaultState = {
    levels: [
        {level: 1, time:'00:54.234s'},
        {level: 2, time:'00:54.234s'},
        {level: 3, time:'00:54.234s'},
        {level: 4, time:'00:54.234s'},
        {level: 5, time:'00:54.234s'},
    ],
    selectedLevel: null
}
    

export default (state = defaultState, action) => {

  switch (action.type) {

    case SELECT_LEVEL:
        return {
            ...state,
            selectedLevel: action.level
        }

    default:
      return state

  }

}
