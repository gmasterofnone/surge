import React from 'react';
import { connect } from 'react-redux';
import { randomNumber } from '../../utils/Helper';
// import { Link } from 'react-router-dom'
import { createUser } from '../../actions/index';



import './Event.css'

export const Event = ( { event } ) => {
  const { source, title, image, date, body, comments, id, surge, attending, author } = event;
  let uuidv4 = require("uuid/v4");

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

  const avatars = comments.map(comment => (
    <img className={`avatars`} 
      src={comment.avatar} 
      alt={comment.name} 
      key={uuidv4()} 
    />
  ))

  return(
    <div className='event'>
      <div className='event-image'
        style={{backgroundImage: `url(${image})`}}
      >
      </div>
      <div className='event-info'>
        <div>
          <h3 className='event-title'>{title[0]}</h3>
          <p className='event-body'>{body.slice(0, 130)}...</p>
        </div>
        <div className='event-interaction'>
          <ul className="surge-container-event">
            <label>{`Surge | ${attending} Followers`}</label>
            <li>
              <span className="progressbar-event progressblue-event" id={`surge-${randomStyle}`}></span>
            </li>
          </ul>
          <div className='event-comment-avatars'>
            { avatars.slice(0, randomNumber(3, 5)) }
            <p className='event-comment-count'>{`${avatars.length} comments`}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export const mapDispatchToProps = (dispatch) => ({
  createUser: (avatar) => dispatch(createUser(avatar))
})

export default connect(null, mapDispatchToProps)(Event)