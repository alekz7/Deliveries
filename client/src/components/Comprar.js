import React from 'react'
import { Redirect } from 'react-router-dom';

import Card from './Card'
import TotalCompra from './TotalCompra'
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import { DatePicker } from 'antd';

import 'bulma/css/bulma.css';
import 'antd/dist/antd.css';

var divStyle = {
  paddingLeft: '15px'
};

class Comprar extends React.Component {

  state = {
    user: `alex`
  }

  componentWillMount(){
    const user = localStorage.getItem('user');
    this.setState({
      user
    })
  }

  checkUser = () => {
    if(this.state.user != null){
      return <div>
        <h1>Bienvenido {this.state.user}</h1>
      </div>
    }else{
      return <Redirect to='/'/>
    }
  }

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
                <div>
                  {this.checkUser()}
                  <TotalCompra />
                  <Grid>
                    <Row>
                      <Col xs={3} md={2}>
                        <Card />
                      </Col>
                      <Col xs={3} md={2}>
                        <Card />
                      </Col>
                    </Row>
                  </Grid>
                </div>
              </div>
            </div>
          </div>
  }
}

export default Comprar;
