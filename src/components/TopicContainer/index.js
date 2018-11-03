import React from 'react';
import './TopicContainer.css'

import { Event } from '../../containers/Event'
let uuidv4 = require("uuid/v4");

const TopicContainer = ( { content } ) => {
  const feature = content.shift()
  const events = content.map(event => (
    <Event key={uuidv4()} event={event} />
  ))

  return(
    <div className='TopicContainer'>
      <div className='feature-event'
        style={{backgroundImage: `url(${feature.image})`}}
      ></div>
      <div className='topic-container'>
        { events }
      </div>
    </div>
  )
}

export default TopicContainer;