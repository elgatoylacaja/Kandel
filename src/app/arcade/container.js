import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'
import * as timerActions from './timer/actions'
import Arcade from './Arcade'


class ArcadeContainer extends Component {

    componentDidMount = () => {
        this.props.createTrial(this.props.level)
        this.props.startTimer(10000)
    }

    componentWillUnmount = () => {
        this.props.stopTimer()
    }

    submit = trial => {
        if (this.props.trials.length + 1 < this.props.totalTrials) {
            this.props.stopTimer()
            this.props.submitTrial(trial)
            this.props.createTrial(this.props.level)
            this.props.showFeedback(trial)
            setTimeout(this.props.hideFeedback, 3000)
            this.props.startTimer(10000)
        }
        else {
            this.props.stopTimer()
            this.props.showFeedback(trial)
            setTimeout(e => {
                this.props.hideFeedback()
                this.props.submitTrial(trial)
            }, 3000)
        }
    }


    render = () =>
        <Arcade 
            {...this.props} 
            submit={this.submit}
        />

}


export default connect(
    state => ({...state.arcade, ...state.timer}),
    {...actions, ...timerActions}
)(ArcadeContainer)
