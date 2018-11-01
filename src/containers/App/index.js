import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { Route, withRouter } from 'react-router-dom';
import { getTopic } from '../../actions/thunks/getTopic';
import { loginUser } from '../../actions/index'
import { checkUser } from '../../utils/Helper'

import { Nav } from '../Nav'
import Login from '../Login';


import './App.css';


class App extends Component {
  
  componentDidMount() {
    const user = checkUser()
    if (user) {this.props.loginUser(user)}
  }

  render() {
    const { user } = this.props;
    if (!user.avatar) {
      return(<Login />)
    }

    return (
      <div className="App">
        <Nav />
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
  getTopic: (topic) => dispatch(getTopic(topic)),
  loginUser: (user) => dispatch(loginUser(user))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
