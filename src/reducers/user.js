import { storeUser } from '../utils/Helper'

export const user = ( state = {}, action) => {
  let user, topics;
  switch(action.type) {
    case 'ADD_USER':
      user = {avatar: action.avatar, topics: [], favorites: []}
      storeUser(user)
      return user
    case 'TOGGLE_FAVORITE':
    const favId = state.favorites.map(fav => fav.id)
      if (favId.includes(action.article.id)) {
        const favorites = state.favorites.filter(fav => fav.id !== action.article.id)
        user = {...state, favorites}
      } else {
        user = {...state, favorites: [...state.favorites, action.article]}
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
    console.log('hey')
      localStorage.removeItem('user')
      return {}
    default:
      return state
  }
}  

