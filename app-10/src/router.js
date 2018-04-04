import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Details from './components/Details'
import Products from './components/Products'

export default(
    <Switch>
        <Route path="/details/:id" component={Details}/>
        <Route path="/" component={Products}/>
    </Switch>
)