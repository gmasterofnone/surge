import React from 'react';
import { App } from '../containers/App';
import { mapStateToProps, mapDispatchToProps } from '../containers/App';
import { shallow } from 'enzyme';

describe('APP', () => {
  let wrapper;
  let mockMovies;
  let mockUser;

  beforeEach(() => {
    mockMovies = [];
    mockUser = null;
    wrapper = shallow(
      <App
        history={[]}
        user={mockUser}
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
      isLoading: false,
      hasErrored: false,
      user: {}
    }
    const expected = {...mockStore};
    const result = mapStateToProps(mockStore);
    expect(result).toEqual(expected);
  });
})

describe('mapDispatchToProps', () => {
  it('should call dispatch when getTopic is invoked', () => {
    const mockDispatch = jest.fn();
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.getTopic({search: 'immigration'});
    expect(mockDispatch).toHaveBeenCalled();
  });

  it('should call dispatch when loginUser is invoked', () => {
    const mockDispatch = jest.fn();
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.loginUser({});
    expect(mockDispatch).toHaveBeenCalled();
  });

})