import { buildNews } from '../utils/Helper'

export const getNews = topic => {
  return async dispatch => {
    dispatch(isLoading(true))
    try {
      const response = await buildNews(topic)
      dispatch(addTopic(response))
      dispatch(isLoading(false))
    }
  }
}