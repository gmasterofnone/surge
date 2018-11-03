import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { avatar } from '../../assets/'
import { createUser } from '../../actions/index';
import logo from '../../assets/logo.svg';


import './Login.css'

export const login = ( { createUser } ) => {
  let uuidv4 = require("uuid/v4");
  const avatars = Object.keys(avatar).map(icon => (
    <div className='avatar-container' key={uuidv4()}>
      <Link to='/'>
        <img 
          className='login-avatar'
          src={avatar[icon]} 
          alt='avatar' 
          value={icon}
          onClick={() => createUser(icon)}
          key={uuidv4()}
        />
      </Link>
      <img 
        className='login-logo'
        src={logo} 
        alt='logo' 
        value={icon}
        onClick={() => createUser(icon)}
        key={uuidv4()}
      />
    </div>
  ))

  return(
    <div className='login'>
      {/* <img className='avatar' 
        src={avatar.one} 
        alt='avatar' 
        value='one' 
      />
      <img className='avatar' 
        src={avatar.two} 
        alt='avatar' 
        value='one' 
      />
      <img className='avatar' 
        src={avatar.three} 
        alt='avatar' 
        value='one' 
      />
      <img className='avatar' 
        src={avatar.four} 
        alt='avatar' 
        value='one' 
      /> */}
      {avatars}
     
    </div>
  )

}

export const mapDispatchToProps = (dispatch) => ({
  createUser: (avatar) => dispatch(createUser(avatar))
})

export default connect(null, mapDispatchToProps)(login)