import React, { Component } from 'react';
import { connect } from 'react-redux'


export class Nav extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      avatar: '',
    }
  }

  render() {
    return(
      <div>hey</div>
    )
  }
}



export const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  hasErrored: state.hasErrored,
  content: state.content
})

export const mapDispatchToProps = (dispatch) => ({
  // getTopic: (topic) => dispatch(getTopic(topic))
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav)