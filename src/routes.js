import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from 'react-router-dom'
  
//pages
import Menu from './Menu'
import LazyLoadedPage from './pages/LazyLoadedPage'


  

export default () => (
    <Router>
        <Switch>
            <Route exact path='/' component={Menu} />
            <Route  path='/lazyLoaded' component={LazyLoadedPage} />
        </Switch>
    </Router>
)