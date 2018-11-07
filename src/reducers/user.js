import { storeUser } from '../utils/Helper'

export const user = ( state = {}, action) => {
  console.log(action)
  let user, topics;
  switch(action.type) {
    case 'ADD_USER':
      user = {avatar: action.avatar, topics: [], favorites: []}
      storeUser(user)
      return user
    case 'TOGGLE_FAVORITE':
      if (state.favorites.includes(action.id)) {
        const favorites = state.favorites.filter(fav => fav !== action.id)
        user = {...state, favorites}
      } else {
        user = {...state, favorites: [...state.favorites, action.id]}
      }
      storeUser(user)
      return user
    case 'LOGIN_USER':
      return action.user
    case 'ADD_TOPIC':
      const filterTopics = [...state.topics, action.topic]
      topics = filterTopics.filter((topic, i) => filterTopics.indexOf(topic) === i)
      user = {...state, topics}
      storeUser(user)
      return user 
    case 'REMOVE_TOPIC':
      topics = state.topics.filter(topic => 
        (topic.search !== action.topic))
      user = {...state, topics}
      storeUser(user)
      return user
    case 'DELETE_USER':
      return state
    default:
      return state
  }
}  

