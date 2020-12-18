import { createReducer } from '@ngrx/store';
import { SearchState } from './search.state';

/**
 * Initial search state
 */
const initialSearchState: SearchState = {
  query: '',
  results: []
};

/**
 * Search state reducer
 */
export const searchReducer = createReducer(initialSearchState);
