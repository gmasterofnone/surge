import React from 'react';
import './NoMatch.css'
import { Link } from 'react-router-dom';

import whoops from '../../assets/whoops.svg'

const NoMatch = () => {
  return(
    <div className='error-page'>
      <div className='error-container'>
        <img className='whoops' src={whoops} alt='404 page'/>
        <h1 className='error-header'>Blue screen....You broke it...</h1>
        <h3 className='error-message'>ERROR 404: CLICK <Link className='error-redirect' to='/'>HERE</Link> TO UN-BREAK</h3>
      </div>
    </div>
  )
}

export default NoMatch;