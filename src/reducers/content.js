export const content = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_TOPIC':
    return state[action.topic];
  }
}