import { SUBMIT_TRIAL } from '../arcade/actions'
import { START_LEVEL } from './actions'


const defaultState = {
    level: 1,
    trials: [],
    levelFinished: false,
    totalTrials: 2,
    totalCorrect: 0,
}


export default (state = defaultState, action) => {

  switch (action.type) {

    case START_LEVEL:
      return {
        ...state,
        trials: [],
        levelFinished: false,
        level: action.level,
        totalTrials: 2,
        totalCorrect: 0,
    }

    case SUBMIT_TRIAL:
      return {
        ...state,
        trials: state.trials.concat(action.trial),
        levelFinished: (state.trials.length + 1 === state.totalTrials),
        totalCorrect: action.trial.input === action.trial.operation.result
                        ? state.totalCorrect + 1
                        : state.totalCorrect
    }
        
    default:
      return state

  }

}
