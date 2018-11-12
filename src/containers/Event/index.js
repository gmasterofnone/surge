import React from 'react';
import { connect } from 'react-redux';
import { randomNumber } from '../../utils/Helper';
import { NavLink } from 'react-router-dom'
import { toggleFavorite } from '../../actions/index';

import addTrue from '../../assets/add-true.svg'
import addFalse from '../../assets/add-false.svg'
import share from '../../assets/share.svg'



import './Event.css'

export const EventCard = ( { event } ) => {
  const { title, image, comments, surge, attending, id, favorite } = event;
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

  let position = -18;
  let divStyle;

  const randomComments = comments.slice(0, randomNumber(5, 9))

  const avatars = randomComments.map(comment => {
    position += 18;
    divStyle = {
      position: "absolute",
      left: `${position}px`,
    };

    return <img className={`${uuidv4()} avatar-tiles`} 
            style={divStyle}
            src={comment.avatar} 
            alt='avatar'
            key={uuidv4()} 
          />
  })

  return(
    <div className='event'>
        <div className='event-image'
          style={{backgroundImage: `url(${image})`}}
        >
          <div className='event-screen'></div>
          <NavLink className='event-link' to={`/${id}`}>
            <h3 className='event-title'>{title[0]}</h3>
            <div className='avatar-container'>
              { avatars.slice(0, -2) }
              <p className='event-comment-count'
                style={divStyle}
              >{`${comments.length} Comments`}
              </p>
            </div>  
          </NavLink>
          <ul className="surge-container-event">
            <label className={surge ===100 ? 'surged' : ''}
            >{`${surge === 100 ? 'Surged' : `${surge}% Surged`} /// ${attending} Followers`}
            </label>
            <li>
              <span className="progressbar-event progressblue-event" id={`surge-${randomStyle}`}></span>
            </li>
          </ul>
        </div>
      </div>
  )
}

export const mapDispatchToProps = (dispatch) => ({
  toggleFavorite: (article) => dispatch(toggleFavorite(article))
})

export default connect(null, mapDispatchToProps)(EventCard)