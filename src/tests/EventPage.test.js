import React from 'react';
import { EventPage } from '../containers/EventPage';
import { mount } from 'enzyme';


describe('EventPage', () => {
  let wrapper;
  let mockArticle;
  let styleSheet;

  beforeEach(() => {
 
    mockArticle = {
      source: 'hey'
    }
    styleSheet = {
      insertRule: () => jest.fn()
    }
   
    wrapper = mount(
      <EventPage
        event={mockArticle}
        styleSheet={styleSheet}
      />
    )
  })

  it.skip('should load comments', () => {
    const comments = ['test'];

    wrapper.instance().loadComments(comments)
    expect(wrapper.state().comments).toEqual(['hey']);
  });

})