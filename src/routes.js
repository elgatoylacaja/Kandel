import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Arcade from './arcade'
import Level from './level'


export default () =>
    <Router history={browserHistory}>
        <Route path='/' >
            <IndexRoute component={Level} />
            <Route path='/level' component={Level} />
            <Route path='/arcade' component={Arcade} />
        </Route>
    </Router>
