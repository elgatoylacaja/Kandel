import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'
import Arcade from './Arcade'


class ArcadeContainer extends Component {

    componentDidMount = () =>
        this.props.generateQuestion()

    render = () =>
        <Arcade {...this.props} />

}


export default connect(
    state => state.arcade, 
    actions
)(ArcadeContainer)
