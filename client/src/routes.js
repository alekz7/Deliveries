import { Router, Route } from 'react-router-dom';
import React from 'react';
import history from './history';
import Comprar from './components/Comprar';
import Pago from './components/Pago';
import Product from './components/Product';
import NavbarBootstrap from './components/NavbarBootstrap';
import Home from './components/Home';

export default () => <Router history={history}>
  <div>
    <NavbarBootstrap />
    <Route exact path='/' component={Home} />
    <Route path='/comprar' component={Comprar} />
    <Route path='/product' component={Product} />
    <Route path='/pago' component={Pago} />
  </div>
  </Router>
