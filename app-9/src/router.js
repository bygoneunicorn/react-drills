import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Details from './components/Details'
import Signup from './components/Signup'

export default (
    <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/details" component={Details}/>
        <Route path="/signup" component={Signup}/>
    </Switch>
)