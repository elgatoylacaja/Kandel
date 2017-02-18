import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'
import Arcade from './Arcade'


class ArcadeContainer extends Component {

    static propTypes = {
        answer: PropTypes.number,
        arcadeInput: PropTypes.func.isRequired,
    }

    render = () =>
        <Arcade {...this.props} />

}


export default connect(
    state => state.arcade, 
    actions
)(ArcadeContainer)
