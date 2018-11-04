import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, withRouter, Switch } from 'react-router-dom';
import { loginUser } from '../../actions/index'
import { checkUser } from '../../utils/Helper'

import Nav from '../Nav'
import Login from '../Login';
import Spread from '../Spread';


import './App.css';


class App extends Component {
  
  async componentDidMount() {
    const user = checkUser()
    
    user 
      ? this.props.loginUser(user)
      : this.props.history.push('/login')
  }

  render() {

    return (
      <div className="App">
        <Switch>
          <Route exact path='/login' render={() => <Login />}/>
          <Route path='/' render={() => <Nav />}/>
        </Switch>
        <Spread />
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  hasErrored: state.hasErrored,
  content: state.content,
  user: state.user
})

export const mapDispatchToProps = (dispatch) => ({
  loginUser: (user) => dispatch(loginUser(user))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
