import { buildNews } from '../../utils/Helper'
import { isLoading, addTopic, hasErrored } from '../../actions'

export const getNews = topic => {
  return async dispatch => {
    dispatch(isLoading(true))
    try {
      const response = await buildNews(topic)
      dispatch(addTopic(topic, response))
      dispatch(isLoading(false))
    } catch(error) {
      dispatch(hasErrored(true))
    }
  }
}