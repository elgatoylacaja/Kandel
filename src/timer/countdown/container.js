import React, { Component } from 'react'
import { connect } from 'react-redux'
import Countdown from './Countdown'


class CountdownContainer extends Component {

    render = () =>
        <Countdown countdown={this.props.countdown} />

}


export default connect(
    state => state.timer
)(CountdownContainer)
