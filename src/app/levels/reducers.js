

const defaultState = {
    levels: [
        {level: 1, time:'00:54.234s', efficacy: 50},
        {level: 2, time:'00:54.234s', efficacy: 100},
        {level: 3, time:'00:54.234s', efficacy: 3},
        {level: 4, time:'00:54.234s', efficacy: 35},
        {level: 5, time:'00:54.234s', efficacy: 60},
    ]
}
    

export default (state = defaultState, action) => {

  switch (action.type) {

    default:
      return state

  }

}
