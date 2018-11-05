import React from 'react';
import './TopicContainer.css'
import { randomNumber } from '../../utils/Helper'

import { Event } from '../../containers/Event'
let uuidv4 = require("uuid/v4");

const TopicContainer = ( { content } ) => {
  const feature = content[0]
  const childEvents = content.filter(event => event.title !== feature.title)
  const events = childEvents.map(event => (
    <Event key={uuidv4()} event={event} /> 
  ))

  const RandomFeature = randomNumber(0, 1)

  return(
    <div className='topic-container'>
      <div 
        className={RandomFeature ? 'feature-event' : 'feature-event-b'}
        style={{backgroundImage: `url(${feature.image})`}}
      >
      </div>
      <hr/>
      <div className='event-container'>
        { events }
      </div>
    </div>
  )
}



export default TopicContainer;