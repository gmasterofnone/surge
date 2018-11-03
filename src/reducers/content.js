export const content = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_TOPIC':
      return {...state, [action.topic]: action.articles}
    case 'REMOVE_TOPIC':
      return Object.keys(state).reduce((newState, topic) =>{
        if (topic !== action.topic) {
         newState[topic] = state[topic]
        }
        return newState;
      }, {}) || state
    default:
      return state;
  }
}