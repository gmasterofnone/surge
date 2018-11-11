import React from 'react';
import NoMatch from '../components/NoMatch';
import { shallow } from 'enzyme';


describe('NoMatch', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NoMatch/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

})