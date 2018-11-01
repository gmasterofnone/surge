import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

import { getTopic } from '../../actions/thunks/getTopic'

import logo from './logo.svg';
import './App.css';


class App extends Component {
  
  componentDidMount() {
    
    this.props.getTopic('activism');
  }

  addTopic = () => {
    this.props.getTopic('metoo')
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button onClick={this.addTopic}></button>
        </header>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  hasErrored: state.hasErrored,
  content: state.content
})

export const mapDispatchToProps = (dispatch) => ({
  getTopic: (topic) => dispatch(getTopic(topic))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
