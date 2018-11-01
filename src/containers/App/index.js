import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom';

import { getNews } from '../../actions/thunks/getNews'

import logo from './logo.svg';
import './App.css';

import { buildNews } from '../../utils/Helper'


class App extends Component {

  async componentDidMount() {
    this.props.getNews('activism');
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
  getNews: (topic) => dispatch(getNews(topic))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
