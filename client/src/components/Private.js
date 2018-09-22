import React from 'react'
import { Redirect } from 'react-router-dom';

class Private extends React.Component {

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
    {this.checkUser()}
    </div>
  }
}

export default Private;
