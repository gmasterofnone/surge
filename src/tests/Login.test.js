import React from 'react';
import { Login } from '../containers/Login';
import { mapDispatchToProps } from '../containers/Login';
import { shallow } from 'enzyme';


describe('Login', () => {
  let wrapper;
  let mockCreateUser;

  beforeEach(() => {
 
    mockCreateUser = jest.fn()
   
    wrapper = shallow(
      <login
        createUser={mockCreateUser}
      />
    )
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

})



describe('mapDispatchToProps', () => {

  it('should call dispatch when createUser is invoked', () => {
    const mockDispatch = jest.fn();
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.createUser('one');
    expect(mockDispatch).toHaveBeenCalled();
  });

})