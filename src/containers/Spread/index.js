import React from 'react';
import { connect } from 'react-redux'

import TopicContainer from '../../components/TopicContainer'

import './Spread.css'

export const Spread = ( { content } ) => {
  let uuidv4 = require("uuid/v4");
  const layouts = Object.keys(content).map(topic => (
    <TopicContainer key={uuidv4()} content={content[topic]} />
  ))

  return(
    <div className='Spread'>
      { layouts }
    </div>
  )
}

export const mapStateToProps = (state) => ({
  content: state.content
})


export default connect(mapStateToProps)(Spread)