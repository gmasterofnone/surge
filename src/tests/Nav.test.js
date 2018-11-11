import React from 'react';
import { Nav } from '../containers/Nav';
import { mapStateToProps, mapDispatchToProps } from '../containers/Nav';
import { shallow } from 'enzyme';

describe('Nav', () => {
  let wrapper;
  let mockAddTopic;
  let mockRemoveTopic
  let mockUser;

  beforeEach(() => {
    mockUser = { topics: [], favorites: [{id: 1}]};
    mockAddTopic = jest.fn()
    mockRemoveTopic = jest.fn()
    wrapper = shallow(
      <Nav
        history={[]}
        user={mockUser}
        getTopic={mockAddTopic}
        removeTopic={mockRemoveTopic}
      />
    )
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should allow the user to add a topic', () => {
    wrapper.find('.search-btn').simulate('click')
    expect(wrapper.state().addTopic).toEqual(true);
  });

  it('should add a topic state', () => {
    wrapper.find('.search-btn').simulate('click')
    const event = {
      preventDefault: () => jest.fn,
      target: {
        value: 'hello'
      }
    }
    wrapper.instance().handleChange(event)

    expect(wrapper.state().search).toEqual('hello');
  });

  it('should add a topic to the store', () => {
    wrapper.find('.search-btn').simulate('click')
    const event = {
      preventDefault: () => jest.fn,
      target: {
        value: 'hello'
      }
    }
    wrapper.instance().addTopic(event)

    expect(wrapper.state().search).toEqual('');
    expect(wrapper.state().addTopic).toEqual(false);
  });

  it('should remove a topic to the store', () => {
    wrapper.find('.search-btn').simulate('click')
    const name = 'immigration'
    wrapper.instance().removeTopic(name)
  });

  it('should toggle favorites section', () => {
    wrapper.find('.avatar').simulate('click')

    expect(wrapper.state().showFavorites).toEqual(true);
  });

})

describe('mapStateToProps', () => {
  it('should have access to loading status and users', () => {
    const mockStore = {
      isLoading: false,
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

  it('should call dispatch when removeTopic is invoked', () => {
    const mockDispatch = jest.fn();
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.removeTopic({});
    expect(mockDispatch).toHaveBeenCalled();
  });

})