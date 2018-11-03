import React from 'react';
import { connect } from 'react-redux'

import './Spread.css'

export const Spread = ( { content } ) => {
  let uuidv4 = require("uuid/v4");
  // const avatars = Object.keys(avatar).map(icon => (
  //   <div className='avatar-container' key={uuidv4()}>
  //     <Link to='/'>
  //       <img 
  //         className='Spread-avatar'
  //         src={avatar[icon]} 
  //         alt='avatar' 
  //         value={icon}
  //         onClick={() => createUser(icon)}
  //         key={uuidv4()}
  //       />
  //     </Link>
  //     <img 
  //       className='Spread-logo'
  //       src={logo} 
  //       alt='logo' 
  //       value={icon}
  //       onClick={() => createUser(icon)}
  //       key={uuidv4()}
  //     />
  //   </div>
  // ))

  return(
    <div className='Spread'>
 
    </div>
  )
}

export const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  hasErrored: state.hasErrored,
  content: state.content,
  user: state.user
})



export default connect(mapStateToProps)(Spread)