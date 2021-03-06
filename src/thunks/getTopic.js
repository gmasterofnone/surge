import { buildNews } from '../utils/Helper'
import { isLoading, addTopic, hasErrored } from '../actions'

export const getTopic = topic => {
  return async dispatch => {
    dispatch(isLoading(true))
    try {
      const response = await buildNews(topic.search)
      dispatch(addTopic(topic, response))
      dispatch(isLoading(false))
    } catch(error) {
      dispatch(hasErrored(true))
    }
  }
}