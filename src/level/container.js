import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'
import Level from './Level'


class LevelContainer extends Component {

    render = () =>
        <Level {...this.props} />

}


export default connect(
    state => state.level, 
    actions
)(LevelContainer)
