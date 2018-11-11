import * as actions from '../actions';

describe('actions', () => {
  it('should have a type of ADD_USER', () => {
    const avatar = 'one';
    const expected = {
      type: 'ADD_USER',
      avatar
    }
    const result = actions.createUser(avatar);
    expect(result).toEqual(expected);
  })

  it('should have a type of LOGIN_USER', () => {
    const user = {};
    const expected = {
      type: 'LOGIN_USER',
      user
    }
    const result = actions.loginUser(user);
    expect(result).toEqual(expected);
  })

  it('should have a type of DELETE_USER', () => {
    const expected = {
      type: 'DELETE_USER',
    }
    const result = actions.deleteUser();
    expect(result).toEqual(expected);
  })

  it('should have a type of IS_LOADING', () => {
    const status = true;
    const expected = {
      type: 'IS_LOADING',
      status
    }
    const result = actions.isLoading(status);
    expect(result).toEqual(expected);
  });

  it('should have a type of HAS_ERRORED', () => {
    const status = true;
    const expected = {
      type: 'HAS_ERRORED',
      status
    }
    const result = actions.hasErrored(status);
    expect(result).toEqual(expected);
  });

  it('should have a type of ADD_TOPIC', () => {
    const topic = 'immigration'
    const articles = []
    const expected = {
      type: 'ADD_TOPIC',
      topic,
      articles
    }
    const result = actions.addTopic(topic, articles);
    expect(result).toEqual(expected);
  })

  it('should have a type of REMOVE_TOPIC', () => {
    const topic = 'immigration';
    const expected = {
      type: 'REMOVE_TOPIC',
      topic
    }
    const result = actions.removeTopic(topic);
    expect(result).toEqual(expected);
  })

  it('should have a type of TOGGLE_FAVORITE', () => {
    const topic = {};
    const expected = {
      type: 'TOGGLE_FAVORITE',
      article
    }
    const result = actions.toggleFavorite(topic);
    expect(result).toEqual(expected);
  })

})