import React from 'react';
import './TopicContainer.css'
import { randomNumber } from '../../utils/Helper'

import { Event } from '../../containers/Event'
let uuidv4 = require("uuid/v4");

const TopicContainer = ( { content } ) => {
  const feature = content.shift()
  const events = content.map(event => (
    <Event key={uuidv4()} event={event} />
  ))

  const RandomFeature = randomNumber(0, 2)

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