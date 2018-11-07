import React, { Component } from 'react';
import { connect } from 'react-redux'
import { randomNumber } from '../../utils/Helper';
import { Link } from 'react-router-dom'


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
    const { title, image, body, surge, attending } = this.props.event;
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

    console.log(this.state.comments)


    return(
      <div className='event-page-container'>
        <div className='event-page'>
          <p className='close-btn'><Link className='close-btn' to='/'>✕</Link></p>
          <div className='eventpage-image'
              style={{backgroundImage: `url(${image})`}}
          >
          </div>
          <div>
            <h1 className='eventpage-title'>{title[0]}</h1>
            <p className='eventpage-body'>{body}...</p>
          </div>   
          <div className='eventpage-interaction'>
            <ul className="surge-container-eventpage">
              <label>{`Surge | ${attending} Followers`}</label>
              <li>
                <span className="progressbar-event progressblue-event" id={`surge-${randomStyle}`}></span>
              </li>
            </ul>
          </div>
          <p className='comments-tag'>Comments</p>
          <ul className='user-comments-section'>
            {userComments}
          </ul>
          <form className='add-comment'></form>
        </div>
      </div>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  // createUser: (avatar) => dispatch(createUser(avatar))
})

export default connect(null, mapDispatchToProps)(EventPage)