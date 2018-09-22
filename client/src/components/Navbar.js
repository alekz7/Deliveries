import React from 'react'
import { Link } from 'react-router-dom';
import history from '../history';

class Navbar extends React.Component {
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

  loginRender = () => {
    return (this.state.user !== '') ? <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around'
    }}>
      <li>
        <Link to ='/'>Home
        </Link>
      </li>
      <li>
        <Link to ='/private'>Private
        </Link>
      </li>
      <li>
        <button onClick={this.logout}>Logout</button>
      </li>
    </div> :
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around'
    }}>
      <li>
        <Link to ='/'>Home
        </Link>
      </li>
      <li>
        <button onClick={this.login}>Login</button>
      </li>
    </div>

  }

  render () {
    return(<div>
        <ul>
        {this.loginRender()}
        </ul>
      </div>
    )
  }
}

export default Navbar;
