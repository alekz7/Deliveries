import { Router, Route } from 'react-router-dom';
import React from 'react';
import history from './history';
import Private from './components/Private';
import Product from './components/Product';
import Navbar from './components/Navbar';
import Home from './components/Home';

export default () => <Router history={history}>
  <div>
    <Navbar />
    <Route exact path='/' component={Home} />
    <Route path='/private' component={Private} />
    <Route path='/product' component={Product} />
  </div>
  </Router>
