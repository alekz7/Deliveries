import React from 'react'
import Table from 'react-bootstrap/lib/Table';
import Button from 'react-bootstrap/lib/Button';
import { Link } from 'react-router-dom';

class TotalCompra extends React.Component {
  render () {
    return(<Table responsive>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Total</th>
                <th>Accion</th>
              </tr>
            </thead>
            <tbody>
              <tr>

                <td>Thumbnail label</td>
                <td>1</td>
                <td>$12.50</td>
                <td>$12.50</td>
                <td>
                  <p align="center">
                    <Button bsStyle="danger">X</Button>
                  </p>
                </td>
              </tr>
              <tr>

                <td>Thumbnail label</td>
                <td>2</td>
                <td>$12.50</td>
                <td>$25</td>
                <td>
                  <p align="center">
                    <Button bsStyle="danger">X</Button>
                  </p>
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <strong>$37.50</strong>
                  <p align="center">
                    <Link to ='/pago'><Button bsStyle="success">Confirmar</Button></Link>
                  </p>
                </td>
              </tr>
            </tbody>
          </Table>)
  }
}

export default TotalCompra;
