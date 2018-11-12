import React from 'react';
import './TopicContainer.css'
import { NavLink } from 'react-router-dom';

import EventCard from '../../containers/Event';
import { randomNumber } from '../../utils/Helper';
let uuidv4 = require("uuid/v4");

export const TopicContainer = ( { content } ) => {
  const feature = content[0]
  const childEvents = content.filter(event => event.title !== feature.title)
  const events = childEvents.map(event => (
    <EventCard key={uuidv4()} event={event} /> 
  ))

  const { source, title, image, date,comments, id, surge, attending } = feature;
  
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

  let position = -22;
  let divStyle;

  const randomComments = comments.slice(0, randomNumber(5, 9))

  const avatars = randomComments.map(comment => {
    position += 22;
    divStyle = {
      position: "absolute",
      left: `${position}px`,
    };

  return <img className={`${uuidv4()} feature-avatar-tiles`} 
            style={divStyle}
            src={comment.avatar} 
            alt='avatar'
            key={uuidv4()} 
          />
  })

    
  return(
    <div className='topic-container'>
      <div 
        className='feature-event'
        style={{backgroundImage: `url(${image})`}}
      >
        <div className='event-screen'></div>
        <NavLink className='event-link' to={`/${id}`}>
          <p className='feature-source'>{`${source} - ${date}`}</p>
          <h3 className='feature-event-title'>{title[0]}</h3>
          <div className='feature-avatar-container'>
            { avatars.slice(0, -2) }
            <p className='feature-event-comment-count'
              style={divStyle}
            >{`${comments.length} Comments`}
            </p>
          </div>  
        </NavLink>
        <ul className="surge-container-event">
          <label className={`feature-surge ${surge ===100 ? 'surged' : ''}`}
          >{`${surge === 100 ? 'Surged' : `${surge}% Surged`} /// ${attending} Followers`}
          </label>
          <li>
            <span className="progressbar-event progressblue-event" id={`surge-${randomStyle}`}></span>
          </li>
        </ul>
      </div>
      <div className='event-container'>
        { events }
      </div>
    </div>
  )
}



export default TopicContainer;