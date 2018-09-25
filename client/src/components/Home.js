import CarouselBootstrap from './CarouselBootstrap.js'
import React from 'react'
import Product from './Product'
import { DatePicker } from 'antd';

import 'bulma/css/bulma.css';
import 'antd/dist/antd.css';
var divStyle = {
  paddingLeft: '15px'  
};

class Home extends React.Component {
  render () {
    return <div>
            <div className="columns is-mobile">
              <div className="is-one-fifth" style={divStyle}>
                <code>Menu</code><br />
                <code>Categorias</code><br />
                <code>Filtros</code><br />
                <DatePicker />
              </div>
              <div className="column">
                <CarouselBootstrap /><Product />
              </div>
            </div>

          </div>
  }
}

export default Home;
