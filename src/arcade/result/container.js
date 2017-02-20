import React, { Component } from 'react'
import { connect } from 'react-redux'
import Result from './Result'
import { actions as timerActions } from '../../timer'


class ArcadeContainer extends Component {

    componentDidMount = () => {
        setTimeout(this.props.createQuestion, 3000)
    }

    render = () =>
        <Result {...this.props} />

}


export default connect(
    state => state.timer,
    timerActions
)(ArcadeContainer)
