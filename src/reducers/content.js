export const content = ( state = {}, action ) => {
  switch(action.type) {
    case 'ADD_TOPIC':
      return {...state, [action.topic.search]: action.articles}
    case 'TOGGLE_FAVORITE':
    console.log(action)
      return Object.keys(state).reduce((newState, topic) =>{
        state[topic].forEach(article => {
          if (article.id === action.id) {
            article.favorite = !article.favorite
            newState[topic] = state[topic];
          } else {
            newState[topic] = state[topic];
          }
        });
        return newState;
      }, {}) || state
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