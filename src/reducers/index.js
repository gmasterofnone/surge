import { combineReducers } from 'redux';
import { isLoading } from './isLoading';
import { hasErrored } from './hasErrored';
import { content } from './content';
import { user } from './user';

export const rootReducer = combineReducers({
  isLoading,
  hasErrored,
  content,
  user
})