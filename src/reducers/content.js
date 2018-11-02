export const content = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_TOPIC':
      return {...state, [action.topic]: action.articles}
    case 'REMOVE_TOPIC':
      return Object.keys(state).reduce((state, topic) =>{
        if (state[topic] !== action.topic) {
          state[topic] = state.topic;
        }
        return state;
      }, {}) || {}
    default:
      return state;
  }
}