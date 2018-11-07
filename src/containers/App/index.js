import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { loginUser } from '../../actions/index'
import { checkUser } from '../../utils/Helper'
import { getTopic } from '../../thunks/getTopic'

import Nav from '../Nav'
import Login from '../Login';
import Spread from '../Spread';
import EventPage from '../EventPage'
import NoMatch from '../../components/NoMatch'

import './App.css';

export class App extends Component {
  constructor() {
    super()
    this.state = {
      blur: false
    }
  }
  
  componentDidMount() {
    const user = checkUser()
    if (user) {
      this.props.loginUser(user)
      user.topics.forEach(topic => this.props.getTopic(topic))
    } else {
      this.props.history.push('/login')
    }
  }

  blurBackground = () => {
    this.setState({ blur: !this.state.blur } )
  }

  render() {
    const { blur } = this.state;
    const { content } = this.props;
    let event;
    return (
      <div>
        <Route path='/:id' render={({match}) => {
            const { id } = match.params;
            
            Object.keys(content).find(topic => {
              const result = content[topic].find(event => event.id === id)
              return event = result;
            })
            if (event) {
              return <EventPage event={event} blur={this.blurBackground} />
            } else {
              return <Redirect to='/error' />;
            } 
          }} 
        />

        <div className={`App ${blur ? 'blur' : ''}`}>
          <Switch>
            <Route exact path='/login' render={() => <Login />}/>
            <Route exact path='/error' component={NoMatch} />
            <Route path='/' render={() => (<div><Nav/><Spread/></div>)}/>
          </Switch>
    
        </div>
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
