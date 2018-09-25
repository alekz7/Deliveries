import React from 'react'
import { Link } from 'react-router-dom';
import history from '../history';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

library.add(faShoppingCart)

class NavbarBootstrap extends React.Component {
  state={
    user:""
  }

  login = () => {
    localStorage.setItem('user','joss');
    this.setState({user:'joss'});
  }

  logout = () => {
    localStorage.removeItem('user');
    this.setState({user:''});
    history.push('/')
  }

  navDropdown = () => {
    return(<NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Separated link</MenuItem>
      </NavDropdown>
    )
  }

  searchButton = (number) => {
    return(<NavItem eventKey={number} href="#">
      <Navbar.Collapse>
        <Navbar.Form pullLeft>
          <FormGroup>
            <FormControl type="text" placeholder="Search" />
          </FormGroup>{' '}
          <Button type="submit">Submit</Button>
        </Navbar.Form>
      </Navbar.Collapse>
    </NavItem>)
  }

  loginRender = () => {
    return (this.state.user !== '') ?
    <Nav>
      <NavItem eventKey={1} href="#">
        Link
      </NavItem>
      <NavItem eventKey={2} href="#">
        <Link to ='/'>Home</Link>
      </NavItem>
      <NavItem eventKey={3} href="#">
        <Link to ='/comprar'>Comprar</Link>
      </NavItem>
      <NavItem eventKey={3} href="#">
        <Link to ='/pago'>Pago</Link>
      </NavItem>
      {this.navDropdown()}
      {this.searchButton(4)}
      <NavItem eventKey={5} href="#">
        <Navbar.Collapse>
          <Navbar.Form pullLeft>
            <Button type="submit" onClick={this.logout}>Logout</Button>
          </Navbar.Form>
        </Navbar.Collapse>
      </NavItem>
    </Nav>
    :
    <Nav>
      <NavItem eventKey={1} href="#">
        Link
      </NavItem>
      <NavItem eventKey={2} href="#">
        <Link to ='/'>Home</Link>
      </NavItem>
      {this.navDropdown()}
      {this.searchButton(3)}
      <NavItem eventKey={4} href="#">
        <Navbar.Collapse>
          <Navbar.Form pullLeft>
            <Button type="submit" onClick={this.login}>Login</Button>
          </Navbar.Form>
        </Navbar.Collapse>
      </NavItem>
    </Nav>
  }

  render () {
    return (<Navbar inverse collapseOnSelect>
              <Navbar.Header>
                <Navbar.Brand>
                  <Link to ='/'>Deliveries <FontAwesomeIcon icon="shopping-cart" /></Link>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                {this.loginRender()}
                <Nav pullRight>
                  <NavItem eventKey={1} href="#">
                    Link Right
                  </NavItem>
                </Nav>
              </Navbar.Collapse>
            </Navbar>)
  }
}

export default NavbarBootstrap;
