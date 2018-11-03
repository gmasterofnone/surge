import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { createUser } from '../../actions/index';



import './Event.css'

export const Event = ( { event } ) => {
  let uuidv4 = require("uuid/v4");
  

  return(
    <div className='event'>
      <div className='event-image'
        style={{backgroundImage: `url(${event.image})`}}
      >

      </div>
      <p>{event.date}</p>
      <p>{event.title}</p>
      <p>{event.author}</p>
    </div>
  )
}

export const mapDispatchToProps = (dispatch) => ({
  createUser: (avatar) => dispatch(createUser(avatar))
})

export default connect(null, mapDispatchToProps)(Event)