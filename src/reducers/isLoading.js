export const loading = (state = false, action) => {
  action.type === 'IS_LOADING' ? action.type : state
}