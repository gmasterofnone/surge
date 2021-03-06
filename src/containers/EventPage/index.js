import React, { Component } from 'react';
import { connect } from 'react-redux'
import { randomNumber } from '../../utils/Helper';
import { Link } from 'react-router-dom'

import { toggleFavorite } from '../../actions/index';

import addTrue from '../../assets/add-true.svg'
import addFalse from '../../assets/add-false.svg'
import { avatar } from '../../assets/'


 

import './EventPage.css'

export class EventPage extends Component {
  constructor() {
    super()
    this.state = {
      comments: []
    }
  }

  componentDidMount() {
    this.props.blur()
    this.loadComments()
  }

  loadComments = (userComment) => {
    const { comments } = this.props.event
    this.setState( { comments: [...this.state.comments, ...comments]} )
  }

  componentWillUnmount() {
    this.props.blur()
  }

  render() {
    const { title, image, body, surge, attending, favorite, source, date, link, author, event } = this.props.event;
    const { user } = this.props;
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

    const userComments = this.state.comments.map(comment => (
      <li className='user-comments' key={uuidv4()}>
        <img className='user-comments-image' src={comment.avatar} alt={comment.name}/>
        <div>
          <h4 className='event-user-name'>{comment.name}</h4>
          <p className='single-user-comment'>{comment.comment}</p>
        </div>
      </li>
    ))


    return(
      <div className='event-page-container'>
        <div className='event-page'>
          <p className='close-btn'><Link className='close-btn' to='/'>✕</Link></p>
          <div className='eventpage-image'
              style={{backgroundImage: `url(${image})`}}
          >
            <img className={`eventpage-toggle-favorites ${favorite ? 'eventpage-fav-active' : ''}`}
              src={favorite ? addTrue : addFalse}
              alt='toggle favorite'
              onClick={() => this.props.toggleFavorite(this.props.event)}
            />
            <ul className="surge-container-event">
              <label className={surge ===100 ? 'surged' : ''}
              >{`${surge === 100 ? 'Surged' : `${surge}% Surged`} /// ${attending} Followers`}
              </label>
              <li>
                <span className="progressbar-event progressblue-event" id={`surge-${randomStyle}`}></span>
              </li>
            </ul>
          </div>
          <div className='article-detail'>
            <p className='eventpage-source'>{`${source} - ${date}`}</p>
            <h1 className='eventpage-title'>{title[0]}</h1>
            <p className='eventpage-author'>{`by ${author}`}</p>
            <p className='eventpage-body'
            >{body}
              <a className='article-link' target='blank' href={link}>view original article.</a>
            </p>
          </div>
          {
            surge === 100 &&
            <div>
              <p className='surge-tag'>This Headline has Surged!</p>
              <div className='surge-event'>
                <img className='surge-map' src={event.map} alt='event map'/>
                <div className='surge-map-details'>
                  <div>
                    <h3 className='meetup'>Meetup:</h3>
                  </div>
                  <div>
                    <h3 className='surge-event-date'>{event.date}</h3>
                    <p className='surge-event-name'>{event.name}</p>
                    <p className='surge-event-address'>{event.address}</p>
                  </div>
                </div>
              </div>  
            </div>
          }
          <p className='comments-tag'>Recent Comments</p>
          <ul className='user-comments-section'>
            {userComments}
          </ul>
          <form className='add-comment'>
            <div className='add-comment-photo'>
              <img className='user-comments-avatar' src={avatar[user.avatar]} alt='user avatar'/>
              <p className='add-photo'>add photo</p>
            </div>
            <div className='comment-input'>
              <input className='name-input'  
                placeholder='Enter name'
              />
              <input className='comment-input' 
                placeholder='Click here to join the discussion and add a comment..'
              />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  user: state.user,
})

export const mapDispatchToProps = (dispatch) => ({
  toggleFavorite: (article) => dispatch(toggleFavorite(article))
})

export default connect(mapStateToProps, mapDispatchToProps)(EventPage)