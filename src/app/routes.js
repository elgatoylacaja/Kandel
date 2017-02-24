import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Splash from './splash'
import Level from './level'
import Levels from './levels'
import Stats from './stats'
import Tutorial from './tutorial'
import Tutorials from './tutorials'


export default () =>
    <Router history={browserHistory}>
        <Route path='/' >
            <IndexRoute component={Splash} />
            <Route path='/levels' component={Levels} />
            <Route path='/arcade' component={Level} />
            <Route path='/stats' component={Stats} />
            <Route path='/tutorial' component={Tutorial} />
            <Route path='/tutorials' component={Tutorials} />
        </Route>
    </Router>
