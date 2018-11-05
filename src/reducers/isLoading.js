export const isLoading = (state = false, action) => {
  return action.type === 'IS_LOADING' ? action.status : state
}
