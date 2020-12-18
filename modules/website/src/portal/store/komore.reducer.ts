import { createReducer } from '@ngrx/store';
import { KomoreState } from './komore.state';

/**
 * komore store initial state
 */
const initialState: KomoreState = {
  navigationExpanded: false,
  searchQuery: ''
};

/**
 * komore state reducer
 */
export const komoreReducer = createReducer(
  initialState
);
