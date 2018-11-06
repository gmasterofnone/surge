import React from 'react';
import './TopicContainer.css'
import { NavLink } from 'react-router-dom';

import { Event } from '../../containers/Event';
import { randomNumber } from '../../utils/Helper';
let uuidv4 = require("uuid/v4");

const TopicContainer = ( { content } ) => {
  const feature = content[0]
  const childEvents = content.filter(event => event.title !== feature.title)
  const events = childEvents.map(event => (
    <Event key={uuidv4()} event={event} /> 
  ))

  const { source, title, image, date, body, comments, id, surge, attending } = feature;
  
  const avatars = comments.map(comment => (
    <img className={`avatars`} 
      src={comment.avatar} 
      alt={comment.name} 
      key={uuidv4()} 
    />
  ))

  let randomStyle = randomNumber(0, 20000)
  
  let styleSheet = document.styleSheets[0];
  let keyframes = 
    `@keyframes surge-${randomStyle} {
      0% {width: 0%;}
      100% {width: ${surge}%;}
    }`

  let surgeStyle = 
    `#surge-${randomStyle} {
      -webkit-animation-name: surge-${randomStyle};
      animation-name: surge-${randomStyle};
      -webkit-animation-delay: .7s;
      animation-delay: .7s;
    }`
  
  styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
  styleSheet.insertRule(surgeStyle, styleSheet.cssRules.length);
    
  return(
    <div className='topic-container'>
      <div 
        className='feature-event'
        style={{backgroundImage: `url(${image})`}}
      >
        <NavLink to={`/${id}`} className='feature-content-container'>
          <div className='feature-content'>
            <p className='feature-source'>{source.toUpperCase()} | <span>{date.toUpperCase()}</span></p>
            <h1 className='feature-title'>{title[0]}</h1>
            <p className='feature-body'>{body}</p>
            <ul className="surge-container">
              <label>{`Surge | ${attending} Followers`}</label>
              <li>
                <span className="progressbar progressblue" id={`surge-${randomStyle}`}></span>
              </li>
            </ul>
            <div className='comment-avatars'>
              { avatars.slice(0, 3) }
              <p className='comment-count'>{`${avatars.length} comments`}</p>
            </div>
          </div> 
        </NavLink>
      </div>
      <div className='event-container'>
        { events }
      </div>
    </div>
  )
}



export default TopicContainer;