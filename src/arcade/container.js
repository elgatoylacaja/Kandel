import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'
import Arcade from './Arcade'


class ArcadeContainer extends Component {

    componentDidMount = () => {
        this.props.createQuestion()
    }

    render = () =>
        <Arcade {...this.props} />

}


export default connect(
    state => ({
       input: state.arcade.input, 
       time: state.timer.time,
    }), 
    actions
)(ArcadeContainer)
