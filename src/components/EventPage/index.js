import React, { Component } from 'react';
import './EventPage.css'


let uuidv4 = require("uuid/v4");

class EventPage extends Component {
  constructor() {
    super()
    this.state = {
      comments: []
    }
  }

  componentDidMount() {
    this.props.blur()
  }

  componentWillUnmount() {
    this.props.blur()
  }

  render() {
    return(
      <div className='event-page-container'>
        <div className='event-page'>
           
        </div>
     
      </div>
    )
  }
}

export default EventPage;