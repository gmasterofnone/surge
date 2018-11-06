import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, withRouter, Switch } from 'react-router-dom';
import { loginUser } from '../../actions/index'
import { checkUser } from '../../utils/Helper'
import { getTopic } from '../../thunks/getTopic'

import Nav from '../Nav'
import Login from '../Login';
import Spread from '../Spread';
import EventPage from '../../components/EventPage'

import './App.css';

export class App extends Component {
  
  componentDidMount() {
    const user = checkUser()

    if (user) {
      this.props.loginUser(user)
      user.topics.forEach(topic => this.props.getTopic(topic))
    } else {
      this.props.history.push('/login')
    }
  }

  render() {
    const { content, match } = this.props;

    return (
      <div className={`App ${match.path === '/' ? '' : 'blur'}`}>
        <Route path='/:id' render={({match}) => {
            const { id } = match.params;
            let event;
            Object.keys(content).find(topic => {
              const result = content[topic].find(event => event.id === id)
              return event = result;
            })
            if (event) {
              return <EventPage event={event} />
            } else {
              return null;
            } 
          }} 
        />
        <Switch>
          <Route exact path='/login' render={() => <Login />}/>
          <Route path='' render={() => <Nav/>}/>
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
  getTopic: (topic) => dispatch(getTopic(topic)),
  loginUser: (user) => dispatch(loginUser(user))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
