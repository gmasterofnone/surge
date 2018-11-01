export const hasErrored = (state = false , action) => {
  action.type === 'HAS_ERRORED' ? action.type : state
}