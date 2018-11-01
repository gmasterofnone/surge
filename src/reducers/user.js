export const user = ( state = {}, action) => {
  switch(action.type) {
    case 'ADD_USER':
      return {
        avatar: action.avatar,
        favorites: []
      }
    case 'LOGIN_USER':
      return action.user
    case 'DELETE_USER':
      return state
    default:
      return state
  }
}