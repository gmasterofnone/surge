import React from 'react';
import './TopicContainer.css'

import { Event } from '../../containers/Event'
let uuidv4 = require("uuid/v4");

const TopicContainer = ( { content } ) => {
  const feature = content[0]
  const childEvents = content.filter(event => event.title !== feature.title)
  const events = childEvents.map(event => (
    <Event key={uuidv4()} event={event} /> 
  ))

  const { source, title, image, date, body, comments} = feature;
  // const cleanedTitle = title.split('-')
  
  const avatars = comments.map(comment => (
    <img className={`avatars`} 
      src={comment.avatar} 
      alt={comment.name} 
      key={uuidv4()} 
    />
  ))
    
  return(
    <div className='topic-container'>
      <div 
        className='feature-event'
        style={{backgroundImage: `url(${image})`}}
      >
        <div className='feature-content-container'>
          <div className='feature-content'>
            <p className='feature-source'>{source.toUpperCase()} | <span>{date.toUpperCase()}</span></p>
            <h1 className='feature-title'>{title[0]}</h1>
            <p className='feature-body'>{body}</p>
            <div className='comment-avatars'>
              { avatars.slice(0, 3) }
              <p className='comment-count'>{`${avatars.length} comments`}</p>
            </div>
          </div> 
        </div>
      </div>
      <div className='event-container'>
        { events }
      </div>
    </div>
  )
}



export default TopicContainer;