export const user = ( state = {}, action) => {
  switch(action.type) {
    case 'ADD_USER':
      return {avatar: action.avatar, topics: []}
    case 'LOGIN_USER':
      return action.user
    case 'ADD_TOPIC':
      return {...state, topics: [...state.topics, action.topic]}
    case 'REMOVE_TOPIC':
      const topics = state.topics.filter(topic => 
        (topic !== action.topic))
      return {...state, topics}
    case 'DELETE_USER':
      return state
    default:
      return state
  }
}