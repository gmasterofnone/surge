export const content = ( state = {}, action ) => {
  switch(action.type) {
    case 'ADD_TOPIC':
    console.log(state)
    const result = {...state, [action.topic]: action.articles}
      return result
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