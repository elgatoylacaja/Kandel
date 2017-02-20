import React, { Component } from 'react'
import { connect } from 'react-redux'
import Typing from './Typing'
import { actions as timerActions } from '../../timer'


class ArcadeContainer extends Component {

    componentDidMount = () => {
        this.props.createQuestion()
        this.props.startTimer(10000)
    }

    componentWillUnmount = () => {
        this.props.stopTimer()
    }

    render = () =>
        <Typing {...this.props} />

}


export default connect(
    state => state.timer,
    timerActions
)(ArcadeContainer)
