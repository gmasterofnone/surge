import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.svg';
import { avatar } from '../../assets/'

import './Nav.css'



export class Nav extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      avatar: '',
    }
  }

  render() {
   const { user } = this.props;
  
    return(
      <header>
        <div>
          <Link to='/'>
            <img 
              className='avatar'
              src={avatar[user.avatar]} 
              alt='avatar' 
            />
          </Link>
          <img 
            className='logo'
            src={logo} 
            alt='logo' 
          />
        </div>
       

      </header>
    )
  }
}



export const mapStateToProps = (state) => ({
  content: state.content,
  user: state.user
})

// export const mapDispatchToProps = (dispatch) => ({
//   // getTopic: (topic) => dispatch(getTopic(topic))
// })

export default connect(mapStateToProps)(Nav)