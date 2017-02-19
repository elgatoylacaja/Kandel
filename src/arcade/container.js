import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'
import Arcade from './Arcade'


class ArcadeContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            countdown: 100, 
            limit: 8,
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
        let time = Date.now() - startTime
        this.setState({time})
        let limit = this.state.limit
        if (this.state.countdown > 0) {
            let countdown = ((limit - (time/1000)) / limit) * 100
            this.setState({countdown})
        }
        //if (this.state.countdown > 0) 
            setTimeout(() => this.runTimer(startTime), 10)
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
