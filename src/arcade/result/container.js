import React, { Component } from 'react'
import { connect } from 'react-redux'
import Result from './Result'
import { actions as timerActions } from '../../timer'


class ArcadeContainer extends Component {

    componentDidMount = () => 
        setTimeout(this.finishQuestion, 3000)

    finishQuestion = () => {
        this.props.finishQuestion()
        if (this.props.answers.length < this.props.totalQuestions)
            this.props.createQuestion(this.props.level)
    }

    render = () =>
        <Result {...this.props} />

}


export default connect(
    state => state.timer,
    timerActions
)(ArcadeContainer)
