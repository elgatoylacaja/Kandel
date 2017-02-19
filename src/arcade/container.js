import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'
import Arcade from './Arcade'


class ArcadeContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {countdown: 100, time: 0}
    }

    componentDidMount = () => {
        this.props.generateQuestion()
        this.startTimer(8)
    }

    startTimer = limit => {
        let startTime = Date.now()
        this.runTimer(startTime, limit)
    }
  
    runTimer = (startTime, limit) => {
        let time = Date.now() - startTime
        let countdown = ((limit - (time/1000)) / limit) * 100
        this.setState({time, countdown})
        if (!this.props.submitted) 
            setTimeout(() => this.runTimer(startTime, limit), 10)
    }

    render = () =>
        <Arcade 
            countdown={this.state.countdown} 
            time={this.state.time} 
            {...this.props} 
        />

}


export default connect(
    state => state.arcade, 
    actions
)(ArcadeContainer)
