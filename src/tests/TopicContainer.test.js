import React from 'react';
import { TopicContainer } from '../components/TopicContainer';
import { mount } from 'enzyme';


describe('TopicContainer', () => {
  let wrapper;
  let mockArticle;
  let styleSheet;

  beforeEach(() => {
 
    mockArticle = [{
      source: 'hey',
      comments: []
    }]
   
    wrapper = mount(
      <TopicContainer
        content={mockArticle}
      />
    )
  })

  it.skip('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

})