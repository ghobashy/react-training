import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Loadable from 'react-loadable'; // https://github.com/thejameskyle/react-loadable

//pages
import Menu from './Menu'
// import LazyLoadedPage from './pages/LazyLoadedPage'



const LazyLoadedPage = Loadable({
  loading () {return <div>Loading ...</div>},
  loader: () => import('./LazyLoading/pages/LazyLoadedPage'),
});


export default () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Menu} />
      <Route  path='/lazyLoaded' component={LazyLoadedPage} />
    </Switch>
  </Router>
)
