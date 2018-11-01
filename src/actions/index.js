export const isLoading = status => ({
  type: 'IS_LOADING',
  status
})

export const addTopic = (topic, articles) => ({
  type: 'ADD_TOPIC',
  topic,
  articles
})

export const hasErrored = status => ({
  type: 'HAS_ERRORED',
  status
})