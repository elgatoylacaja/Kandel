import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'
import Stats from './Stats'


class StatsContainer extends Component {

    componentDidMount = () =>
        this.props.getStats()

    render = () =>
        <Stats {...this.props} />

}


export default connect(
    state => state.stats, 
    actions
)(StatsContainer)
