import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'
import Arcade from './Arcade'


class ArcadeContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            countdown: 100, 
            max: 8,
            time: 0,
        }
    }

    componentDidMount = () => {
        this.props.generateQuestion()
        this.startTimer()
    }

    startTimer = () => {
        let startTime = Date.now()
        this.runTimer(startTime)
    }

    runTimer = startTime => {
        let elapsed = Date.now() - startTime
        let time = this.timeToString(elapsed)
        this.setState({time})
        let max = this.state.max
        if (this.state.countdown > 0) {
            let countdown = ((max - (elapsed/1000)) / max) * 100
            this.setState({countdown})
        }
        //if (this.state.countdown > 0) 
            setTimeout(() => this.runTimer(startTime), 10)
    }

    timeToString = time => {
        let minutes = Math.floor(time / (1000 * 60)).toString()
        minutes = minutes.length < 2 ? '0' + minutes : minutes
        let seconds = Math.floor(time / 1000 % 60 ).toString()
        seconds = seconds.length < 2 ? '0' + seconds : seconds
        return minutes + ':' + seconds
    }

    render = () =>
        <Arcade 
            countdown={this.state.countdown} 
            timePercentage={this.state.timePercentage} 
            time={this.state.time} 
            {...this.props} 
        />

}


export default connect(
    state => state.arcade, 
    actions
)(ArcadeContainer)
