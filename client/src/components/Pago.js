import React from 'react'
import { DatePicker } from 'antd';
import FormPago from './FormPago'

import 'bulma/css/bulma.css';
import 'antd/dist/antd.css';

var divStyle = {
  paddingLeft: '15px'
};


const Pago = (props) => {
  return ( <div>
            <div className="columns is-mobile">
              <div className="is-one-fifth" style={divStyle}>
                <code>Menu</code><br />
                <code>Categorias</code><br />
                <code>Filtros</code><br />
                <DatePicker />
              </div>
              <div className="column">
                <div>
                  <FormPago />
                </div>
              </div>
            </div>
          </div>
  )
}

export default Pago
