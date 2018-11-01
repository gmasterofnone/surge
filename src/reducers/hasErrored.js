export const hasErrored = (state = false , action) => {
  return action.type === 'HAS_ERRORED' ? action.status : state
}