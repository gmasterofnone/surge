import { content } from '../reducers/content';
import { hasErrored } from '../reducers/hasErrored';
import { isLoading } from '../reducers/isLoading';
import { user } from '../reducers/user';

import * as actions from '../actions'

describe('Content Reducer', () => {
  it('should return a default state', () => {
    const expected = {};
    const result = content(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should add a topic', () => {
    const topic = 'immigration';
    const articles = [];
    const expected = {immigration: []}
    const result = content({}, actions.addTopic(topic, articles))
    
    expect(result).toEqual(expected)
  })

  it('should remove a topic', () => {
    const topic = 'immigration';
    const articles = [];
    const expected = {}
    const result = content({immigration: []}, actions.removeTopic(topic))
    
    expect(result).toEqual(expected)
  })

})

describe('hasErrored Reducer', () => {
  it('should return a default state', () => {
    const expected = false;
    const result = hasErrored(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should return true if type HAS_ERRORED', () => {
    const expected = true
    const result = hasErrored(false, actions.hasErrored(true))
    
    expect(result).toEqual(expected)
  })

  it('should return false if type HAS_ERRORED', () => {
    const expected = false
    const result = hasErrored(false, actions.hasErrored(false))
    
    expect(result).toEqual(expected)
  })

})

describe('isLoading Reducer', () => {
  it('should return a default state', () => {
    const expected = false;
    const result = isLoading(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should return true if type IS_LOADING', () => {
    const expected = true
    const result = isLoading(false, actions.isLoading(true))
    
    expect(result).toEqual(expected)
  })

  it('should return false if type IS_LOADING', () => {
    const expected = false
    const result = isLoading(false, actions.isLoading(false))
    
    expect(result).toEqual(expected)
  })
})

describe('user Reducer', () => {
  it('should return a default state', () => {
   const expected = {};
   const result =  user(undefined, {})
   expect(result).toEqual(expected)
  })



  it('should add a user', () => {
    const avatar = 'one';
    const expected = {avatar, topics: []}
    const result = user({}, actions.createUser(avatar))
    
    expect(result).toEqual(expected)
  })

  it('should add a user', () => {
    const avatar = 'one';
    const expected = {avatar, topics: []}
    const result = user({}, actions.createUser(avatar))
    
    expect(result).toEqual(expected)
  })

  it('should login a user', () => {
    const user = {avatar: 'one', topics: ['immigration']};
    const expected = {avatar: 'one', topics: ['immigration']}
    const result = user({}, actions.loginUser(user))
    
    expect(result).toEqual(expected)
  })

  it('should delete a user', () => {
    const expected = {}
    const result = user({}, actions.deleteUser())
    
    expect(result).toEqual(expected)
  })

  it('should add a topic', () => {
    const topic = 'immigration';
    const expected = {avatar: 'one', topics: ['immigration']}
    const result = user({avatar: 'one', topics: []}, actions.addTopic(topic))
    
    expect(result).toEqual(expected)
  })

  it('should remove a topic', () => {
    const topic = 'immigration';
    const expected = {avatar: 'one', topics: []}
    const result = user({avatar: 'one', topics: ['immigration']}, actions.removeTopic(topic))
    
    expect(result).toEqual(expected)
  })

 


})
