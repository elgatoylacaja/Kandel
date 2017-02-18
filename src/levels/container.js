import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'
import Levels from './Levels'


class LevelsContainer extends Component {

    render = () =>
        <Levels {...this.props} />

}


export default connect(
    state => state.levels, 
    actions
)(LevelsContainer)
