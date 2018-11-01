import { combineReducers } from 'redux';
import { isLoading } from './isLoading';
import { hasErrored } from './hasErrored';
import { content } from './content';

export const rootReducer = combineReducers({
  isLoading,
  hasErrored,
  content
})