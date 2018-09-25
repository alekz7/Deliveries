import { Router, Route } from 'react-router-dom';
import React from 'react';
import history from './history';
import Private from './components/Private';
import Product from './components/Product';
import NavbarBootstrap from './components/NavbarBootstrap';
import Home from './components/Home';

export default () => <Router history={history}>
  <div>
    <NavbarBootstrap />
    <Route exact path='/' component={Home} />
    <Route path='/private' component={Private} />
    <Route path='/product' component={Product} />
  </div>
  </Router>
