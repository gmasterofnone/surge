import React, { Component } from 'react';
import { connect } from 'react-redux'

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

export const mapDispatchToProps = (dispatch) => ({
  createUser: (avatar) => dispatch(createUser(avatar))
})

export default connect(null, mapDispatchToProps)(EventPage)