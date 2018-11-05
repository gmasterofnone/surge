import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTopic } from '../../thunks/getTopic';
import { removeTopic } from '../../actions'
import {randomNumber } from '../../utils/Helper'

import logo from '../../assets/logo.svg';
import loading from '../../assets/loading.gif'
import add from '../../assets/add.svg';
import close from '../../assets/close.svg';

import { avatar } from '../../assets/'
import { color } from '../../assets/color'

import './Nav.css'


export class Nav extends Component {
  constructor() {
    super()
    this.state = {
      addTopic: false,
      search: '',
    }
  }

  toggleAdd = () => {
    this.setState( {
      addTopic: !this.state.addTopic,
      search : ''
      } 
    );
  }

  handleChange = (event) => {
    const { value } =  event.target;
    this.setState( { search: value } );
  }

  addTopic = event => {
    event.preventDefault();
    const { search } = this.state;
    const randomColor = color[randomNumber(0, 4)];
    const topic = { search, randomColor };
    this.props.getTopic(topic)
    this.setState( { search: '', addTopic: !this.state.addTopic } );
  }

  removeTopic = (name) => {
   this.props.removeTopic(name)
  }
  
  render() {
    const { user } = this.props;
    const { search, addTopic } = this.state;
    let uuidv4 = require("uuid/v4");

    let displayTopics = [];

    if (user.topics) {
      displayTopics = user.topics.map(topic => (
          <span className={`${topic} search-topics`}
            key={uuidv4()}
            style={{color: `${topic.randomColor}`}}
            onClick={() => this.removeTopic(topic.search)}
          >{topic.search.toUpperCase()},</span> 
      )) 
    } else {
      displayTopics = <img className='loading' src={loading} alt='loading'/>
    }

    return(
      <header>
        <div className='avatar-logo'>
          <Link to='/'>
            <img 
              className='avatar'
              src={avatar[user.avatar]} 
              alt='avatar' 
            />
          </Link>
          <img 
            className='logo'
            src={logo} 
            alt='logo' 
          />
        </div>
        { displayTopics }
        {
          addTopic &&
          <form className='topic-form' 
            onSubmit={this.addTopic}
          >
            <input autoFocus className='search'
              value={search}
              style={{width: `${(search.length * 11.2) + 15}px`}}
              onChange={this.handleChange}
            />
          </form>
        }
          <img 
            className='search-btn'
            src={addTopic ? close : add} 
            alt='add button'
            onClick={this.toggleAdd} 
          />
      </header>
    )
  }
}

export const mapStateToProps = (state) => ({
  content: state.content,
})

export const mapDispatchToProps = (dispatch) => ({
  getTopic: (topic) => dispatch(getTopic(topic)),
  removeTopic: (topic) => dispatch(removeTopic(topic))
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav)