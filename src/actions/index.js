export const isLoading = status => ({
  type: 'IS_LOADING',
  status
})

export const addTopic = topic => ({
  type: 'ADD_TOPIC',
  topic
})

export const hasErrored = status => ({
  type: 'HAS_ERRORED',
  status
})