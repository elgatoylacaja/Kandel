import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Arcade from './arcade'
import Levels from './levels'


export default () =>
    <Router history={browserHistory}>
        <Route path='/' >
            <IndexRoute component={Levels} />
            <Route path='/levels' component={Levels} />
            <Route path='/arcade' component={Arcade} />
        </Route>
    </Router>
