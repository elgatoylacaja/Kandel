import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Splash from './splash'
import Level from './level'
import Levels from './levels'
import Stats from './stats'


export default () =>
    <Router history={browserHistory}>
        <Route path='/' >
            <IndexRoute component={Splash} />
            <Route path='/levels' component={Levels} />
            <Route path='/arcade' component={Level} />
            <Route path='/stats' component={Stats} />
        </Route>
    </Router>
