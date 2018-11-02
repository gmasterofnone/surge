export const createUser = avatar => ({
  type: 'ADD_USER',
  avatar
})

export const loginUser = user => ({
  type: 'LOGIN_USER',
  user
})

export const deleteUser = () => ({
  type: 'DELETE_USER'
})


export const isLoading = status => ({
  type: 'IS_LOADING',
  status
})

export const hasErrored = status => ({
  type: 'HAS_ERRORED',
  status
})

export const addTopic = (topic, articles) => ({
  type: 'ADD_TOPIC',
  topic,
  articles
})

export const removeTopic = (topic) => ({
  type: 'REMOVE_TOPIC',
  topic,
})
