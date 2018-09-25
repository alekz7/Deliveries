import React from 'react'
import Card from './Card'
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class Product extends React.Component {
  render () {
    return(<Grid>
            <Row>
              <Col xs={3} md={2}>
                <Card />
              </Col>
              <Col xs={3} md={2}>
                <Card />
              </Col>
              <Col xs={3} md={2}>
                <Card />
              </Col>
              <Col xs={3} md={2}>
                <Card />
              </Col>
              <Col xs={3} md={2}>
                <Card />
              </Col>
              <Col xs={3} md={2}>
                <Card />
              </Col>
              <Col xs={3} md={2}>
                <Card />
              </Col>
              <Col xs={3} md={2}>
                <Card />
              </Col>
              <Col xs={3} md={2}>
                <Card />
              </Col>
              <Col xs={3} md={2}>
                <Card />
              </Col>
              <Col xs={3} md={2}>
                <Card />
              </Col>
            </Row>
          </Grid>)
  }
}

export default Product;
