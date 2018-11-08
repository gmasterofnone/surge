export const content = ( state = {}, action ) => {
  switch(action.type) {
    case 'ADD_TOPIC':
      return {...state, [action.topic.search]: action.articles}
    case 'TOGGLE_FAVORITE':
      return Object.keys(state).reduce((newState, topic) =>{
        state[topic].forEach(article => {
          if (article.id === action.article.id) {
            article.favorite = !article.favorite
            newState[topic] = state[topic];
          } else {
            newState[topic] = state[topic];
          }
        });
        return newState;
      }, {}) 
    case 'REMOVE_TOPIC':
      return Object.keys(state).reduce((newState, topic) =>{
        if (topic !== action.topic) {
         newState[topic] = state[topic]
        }
        return newState;
      }, {}) 
    default:
      return state;
  }
}