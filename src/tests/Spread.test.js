import React from 'react';
import { Spread } from '../containers/Spread';
import { mapStateToProps } from '../containers/Spread';
import { shallow } from 'enzyme';

describe('Spread', () => {
  let wrapper;
  let mockContent;
  let uuidv4;
 
  beforeEach(() => {
    uuidv4 = require("uuid/v4");
    mockContent = { immigration: [], elections: [] }
    wrapper = shallow(
      <Spread
        content={mockContent}
      />
    )
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

})

describe('mapStateToProps', () => {
  it('should have access to content and users', () => {
    const mockStore = {
      content: {},
    }
    const expected = {...mockStore};
    const result = mapStateToProps(mockStore);
    expect(result).toEqual(expected);
  });
})



