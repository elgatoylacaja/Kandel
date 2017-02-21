import React, { Component } from 'react'
import { connect } from 'react-redux'
import Result from './Result'
import { actions as timerActions } from '../../timer'


class ArcadeContainer extends Component {

    componentDidMount = () => 
        setTimeout(this.finishTrial, 3000)

    finishTrial = () => {
        this.props.finishTrial()
        if (this.props.trials.length < this.props.totalTrials)
            this.props.createTrial(this.props.level)
    }

    render = () =>
        <Result {...this.props} />

}


export default connect(
    state => state.timer,
    timerActions
)(ArcadeContainer)
